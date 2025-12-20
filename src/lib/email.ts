const GETMAILER_API_URL = process.env.GETMAILER_API_URL || 'https://api.getmailer.co';
const GETMAILER_API_KEY = process.env.GETMAILER_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'hello@getia.no';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://getia.no';

// Brand colors
const BRAND = {
  primary: '#c8ff00',
  background: '#000000',
  surface: '#111111',
  surfaceLight: '#1a1a1a',
  text: '#ffffff',
  textMuted: '#888888',
};

// =============================================================================
// Base Email Template
// =============================================================================

interface BaseEmailOptions {
  title: string;
  preheader?: string;
  content: string;
  footerText?: string;
}

function baseEmailTemplate({ title, preheader, content, footerText }: BaseEmailOptions): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="dark">
        <meta name="supported-color-schemes" content="dark">
        <title>${title}</title>
        ${preheader ? `<!--[if !mso]><!-- --><div style="display:none;font-size:1px;color:#000;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${preheader}</div><!--<![endif]-->` : ''}
      </head>
      <body style="margin: 0; padding: 0; background-color: ${BRAND.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.background};">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px;">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, ${BRAND.primary} 0%, #a8d900 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                    <h1 style="color: ${BRAND.background}; margin: 0; font-size: 28px; font-weight: 700;">${title}</h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="background: ${BRAND.surface}; padding: 40px; border: 1px solid #333; border-top: none;">
                    ${content}
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background: ${BRAND.surfaceLight}; padding: 24px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #333; border-top: none;">
                    <p style="margin: 0 0 8px 0; color: ${BRAND.textMuted}; font-size: 12px;">
                      ${footerText || 'GetIA - AI-Powered Solutions for Your Business'}
                    </p>
                    <p style="margin: 0; color: ${BRAND.textMuted}; font-size: 12px;">
                      &copy; ${new Date().getFullYear()} GetIA. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

// =============================================================================
// Email Sending Function
// =============================================================================

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions): Promise<boolean> {
  if (!GETMAILER_API_KEY) {
    console.error('Missing GETMAILER_API_KEY');
    return false;
  }

  try {
    const response = await fetch(`${GETMAILER_API_URL}/api/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GETMAILER_API_KEY}`,
      },
      body: JSON.stringify({
        from: `GetIA <${EMAIL_FROM}>`,
        to,
        replyTo,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Email send error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// Welcome emails are now handled by GetMailer sequences

// =============================================================================
// Newsletter Confirmation Email
// =============================================================================

export async function sendNewsletterConfirmationEmail(email: string): Promise<boolean> {
  const content = `
    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">Hi there,</p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      Thanks for subscribing to the GetIA newsletter! You're now part of a community
      that stays ahead of the curve on AI and automation.
    </p>

    <div style="background: ${BRAND.surfaceLight}; border-radius: 8px; padding: 20px; margin: 24px 0; border-left: 4px solid ${BRAND.primary};">
      <h3 style="color: ${BRAND.primary}; margin: 0 0 16px 0; font-size: 16px;">What to Expect:</h3>
      <ul style="margin: 0; padding-left: 20px; color: ${BRAND.text};">
        <li style="margin-bottom: 8px;">Latest AI trends and industry insights</li>
        <li style="margin-bottom: 8px;">Tips for automating your business processes</li>
        <li style="margin-bottom: 8px;">New feature announcements and updates</li>
        <li style="margin-bottom: 8px;">Exclusive content and resources</li>
      </ul>
    </div>

    <p style="font-size: 14px; color: ${BRAND.textMuted}; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
      You can unsubscribe at any time by clicking the link at the bottom of our emails.
    </p>

    <p style="font-size: 14px; color: ${BRAND.text}; margin-top: 20px;">
      Stay curious,<br>
      <strong style="color: ${BRAND.primary};">The GetIA Team</strong>
    </p>
  `;

  const html = baseEmailTemplate({
    title: 'You\'re Subscribed!',
    preheader: 'Welcome to the GetIA newsletter',
    content,
  });

  return sendEmail({
    to: email,
    subject: 'Welcome to the GetIA Newsletter',
    html,
  });
}

// =============================================================================
// Contact Confirmation Email
// =============================================================================

interface ContactConfirmationOptions {
  name: string;
  email: string;
  type: string;
}

export async function sendContactConfirmationEmail({ name, email, type }: ContactConfirmationOptions): Promise<boolean> {
  const content = `
    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">Hi ${name},</p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      Thank you for reaching out! We've received your ${type} inquiry and our team
      will get back to you within 24-48 hours.
    </p>

    <div style="background: ${BRAND.surfaceLight}; border-radius: 8px; padding: 20px; margin: 24px 0; border-left: 4px solid ${BRAND.primary};">
      <p style="margin: 0; color: ${BRAND.text}; font-size: 14px;">
        <strong style="color: ${BRAND.primary};">What happens next?</strong><br><br>
        A member of our team will review your message and respond to you directly.
        If your inquiry is urgent, you can also reach us on our social channels.
      </p>
    </div>

    <p style="font-size: 14px; color: ${BRAND.textMuted}; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
      This is an automated confirmation. Please don't reply to this email.
    </p>

    <p style="font-size: 14px; color: ${BRAND.text}; margin-top: 20px;">
      Best regards,<br>
      <strong style="color: ${BRAND.primary};">The GetIA Team</strong>
    </p>
  `;

  const html = baseEmailTemplate({
    title: 'Message Received',
    preheader: 'We\'ll get back to you soon',
    content,
  });

  return sendEmail({
    to: email,
    subject: 'We Received Your Message - GetIA',
    html,
  });
}

// =============================================================================
// Password Reset Email
// =============================================================================

interface PasswordResetOptions {
  name: string;
  email: string;
  resetToken: string;
}

export async function sendPasswordResetEmail({ name, email, resetToken }: PasswordResetOptions): Promise<boolean> {
  const resetUrl = `${APP_URL}/reset-password?token=${resetToken}`;

  const content = `
    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">Hi ${name},</p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      We received a request to reset your password. If you didn't make this request,
      you can safely ignore this email.
    </p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      To reset your password, click the button below:
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetUrl}" style="background: linear-gradient(135deg, ${BRAND.primary} 0%, #a8d900 100%); color: ${BRAND.background}; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 700; display: inline-block; font-size: 16px;">
        Reset Password
      </a>
    </div>

    <div style="background: ${BRAND.surfaceLight}; border-radius: 8px; padding: 16px; margin: 24px 0;">
      <p style="margin: 0; color: ${BRAND.textMuted}; font-size: 14px;">
        This link will expire in 1 hour for security reasons.
      </p>
    </div>

    <p style="font-size: 14px; color: ${BRAND.textMuted}; margin-top: 20px;">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${resetUrl}" style="color: ${BRAND.primary}; word-break: break-all;">${resetUrl}</a>
    </p>

    <p style="font-size: 14px; color: ${BRAND.text}; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
      Best regards,<br>
      <strong style="color: ${BRAND.primary};">The GetIA Team</strong>
    </p>
  `;

  const html = baseEmailTemplate({
    title: 'Reset Your Password',
    preheader: 'Reset your GetIA password',
    content,
  });

  return sendEmail({
    to: email,
    subject: 'Reset Your Password - GetIA',
    html,
  });
}

// =============================================================================
// Email Verification
// =============================================================================

interface VerificationEmailOptions {
  name: string;
  email: string;
  verificationToken: string;
}

export async function sendVerificationEmail({ name, email, verificationToken }: VerificationEmailOptions): Promise<boolean> {
  const verifyUrl = `${APP_URL}/verify-email?token=${verificationToken}`;

  const content = `
    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">Hi ${name},</p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      Thanks for signing up! Please verify your email address to complete your registration.
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${verifyUrl}" style="background: linear-gradient(135deg, ${BRAND.primary} 0%, #a8d900 100%); color: ${BRAND.background}; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 700; display: inline-block; font-size: 16px;">
        Verify Email Address
      </a>
    </div>

    <div style="background: ${BRAND.surfaceLight}; border-radius: 8px; padding: 16px; margin: 24px 0;">
      <p style="margin: 0; color: ${BRAND.textMuted}; font-size: 14px;">
        This link will expire in 24 hours.
      </p>
    </div>

    <p style="font-size: 14px; color: ${BRAND.textMuted}; margin-top: 20px;">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${verifyUrl}" style="color: ${BRAND.primary}; word-break: break-all;">${verifyUrl}</a>
    </p>

    <p style="font-size: 14px; color: ${BRAND.text}; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
      Best regards,<br>
      <strong style="color: ${BRAND.primary};">The GetIA Team</strong>
    </p>
  `;

  const html = baseEmailTemplate({
    title: 'Verify Your Email',
    preheader: 'Complete your GetIA registration',
    content,
  });

  return sendEmail({
    to: email,
    subject: 'Verify Your Email - GetIA',
    html,
  });
}

// =============================================================================
// Account Activity Notification
// =============================================================================

interface ActivityNotificationOptions {
  name: string;
  email: string;
  activity: string;
  details?: string;
  actionUrl?: string;
  actionText?: string;
}

export async function sendActivityNotification({
  name,
  email,
  activity,
  details,
  actionUrl,
  actionText,
}: ActivityNotificationOptions): Promise<boolean> {
  const content = `
    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">Hi ${name},</p>

    <p style="font-size: 16px; color: ${BRAND.text}; margin: 0 0 20px 0;">
      ${activity}
    </p>

    ${details ? `
      <div style="background: ${BRAND.surfaceLight}; border-radius: 8px; padding: 16px; margin: 24px 0; border-left: 4px solid ${BRAND.primary};">
        <p style="margin: 0; color: ${BRAND.text}; font-size: 14px;">${details}</p>
      </div>
    ` : ''}

    ${actionUrl && actionText ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="${actionUrl}" style="background: linear-gradient(135deg, ${BRAND.primary} 0%, #a8d900 100%); color: ${BRAND.background}; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 700; display: inline-block; font-size: 16px;">
          ${actionText}
        </a>
      </div>
    ` : ''}

    <p style="font-size: 14px; color: ${BRAND.textMuted}; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
      If you didn't perform this action, please contact support immediately.
    </p>

    <p style="font-size: 14px; color: ${BRAND.text}; margin-top: 20px;">
      Best regards,<br>
      <strong style="color: ${BRAND.primary};">The GetIA Team</strong>
    </p>
  `;

  const html = baseEmailTemplate({
    title: 'Account Activity',
    preheader: activity.substring(0, 100),
    content,
  });

  return sendEmail({
    to: email,
    subject: 'Account Activity - GetIA',
    html,
  });
}
