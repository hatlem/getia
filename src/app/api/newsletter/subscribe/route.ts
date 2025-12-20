import { NextRequest, NextResponse } from "next/server";

const GETMAILER_API_URL = process.env.GETMAILER_API_URL || "https://api.getmailer.co";
const GETMAILER_API_KEY = process.env.GETMAILER_API_KEY;
const GETMAILER_AUDIENCE_ID = process.env.GETMAILER_AUDIENCE_ID; // Optional - will use default if not set

const PROJECT_NAME = "GetIA";
const DEFAULT_AUDIENCE_NAME = `${PROJECT_NAME} Newsletter`;

async function getOrCreateAudience(): Promise<string | null> {
  // If explicit audience ID is set, use it
  if (GETMAILER_AUDIENCE_ID) {
    return GETMAILER_AUDIENCE_ID;
  }

  try {
    // First, try to find existing audience by name
    const listResponse = await fetch(`${GETMAILER_API_URL}/api/audiences?limit=100`, {
      headers: {
        Authorization: `Bearer ${GETMAILER_API_KEY}`,
      },
    });

    if (listResponse.ok) {
      const { audiences } = await listResponse.json();
      const existing = audiences.find((a: { name: string }) => a.name === DEFAULT_AUDIENCE_NAME);
      if (existing) {
        return existing.id;
      }
    }

    // Create new audience if not found
    const createResponse = await fetch(`${GETMAILER_API_URL}/api/audiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GETMAILER_API_KEY}`,
      },
      body: JSON.stringify({
        name: DEFAULT_AUDIENCE_NAME,
        description: `Newsletter subscribers from ${PROJECT_NAME} website`,
      }),
    });

    if (createResponse.ok) {
      const { audience } = await createResponse.json();
      console.log(`Created new audience: ${DEFAULT_AUDIENCE_NAME} (${audience.id})`);
      return audience.id;
    }

    console.error("Failed to create audience:", await createResponse.text());
    return null;
  } catch (error) {
    console.error("Error getting/creating audience:", error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!GETMAILER_API_KEY) {
      console.error("Missing GETMAILER_API_KEY");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    // Get or create the audience
    const audienceId = await getOrCreateAudience();
    if (!audienceId) {
      return NextResponse.json(
        { error: "Failed to initialize newsletter" },
        { status: 500 }
      );
    }

    // Get client info for consent tracking
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0] ||
                      req.headers.get("x-real-ip") || undefined;
    const userAgent = req.headers.get("user-agent") || undefined;

    // Call GetMailer API to add contact
    const response = await fetch(
      `${GETMAILER_API_URL}/api/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GETMAILER_API_KEY}`,
        },
        body: JSON.stringify({
          contacts: [
            {
              email: email.toLowerCase().trim(),
              consentSource: "getia_website_footer",
              consentType: "EXPLICIT",
              customFields: {
                source: "website_footer",
                signupUrl: req.headers.get("referer") || "unknown",
                ipAddress,
                userAgent,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("GetMailer API error:", errorData);

      if (response.status === 403) {
        return NextResponse.json(
          { error: "Contact limit reached. Please try again later." },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the newsletter",
      created: data.created,
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
