import { NextResponse } from 'next/server';

const GETMAILER_API_URL = process.env.GETMAILER_API_URL || 'https://api.getmailer.co';
const GETMAILER_API_KEY = process.env.GETMAILER_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'hello@getia.no';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via GetMailer
    const response = await fetch(`${GETMAILER_API_URL}/api/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GETMAILER_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Getia Contact <${EMAIL_FROM}>`,
        to: 'hello@getia.no',
        replyTo: email,
        subject: `New ${type} inquiry from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c8ff00; background: #000; padding: 20px; margin: 0;">New Contact Form Submission</h2>
            <div style="padding: 20px; background: #111; color: #fff;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #c8ff00;">${email}</a></p>
              <p><strong>Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #1a1a1a; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('GetMailer error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
