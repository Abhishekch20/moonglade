import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultContactRecipient = "abhishekchiluveru1@gmail.com";
const maxFieldLength = 2000;

function normalizeField(value: string | undefined, maxLength = maxFieldLength) {
  return value?.trim().slice(0, maxLength) || "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export type ContactResponse =
  | { status: 200; body: { ok: true } }
  | { status: 400 | 405 | 500; body: { error: string } };

export async function handleContactRequest(
  method: string | undefined,
  payload: ContactPayload | undefined,
): Promise<ContactResponse> {
  if (method !== "POST") {
    return { status: 405, body: { error: "Method not allowed." } };
  }

  const submittedEmail = normalizeField(payload?.email, 320);
  const firstName = normalizeField(payload?.firstName, 120);
  const lastName = normalizeField(payload?.lastName, 120);
  const phone = normalizeField(payload?.phone, 40);
  const message = normalizeField(payload?.message, maxFieldLength);

  if (!submittedEmail || !emailPattern.test(submittedEmail)) {
    return { status: 400, body: { error: "A valid email address is required." } };
  }

  const fullName = `${firstName} ${lastName}`.trim() || "Not provided";
  const messageText = message || "Not provided";
  const phoneText = phone || "Not provided";
  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(submittedEmail);
  const safePhone = escapeHtml(phoneText);
  const safeMessage = escapeHtml(messageText).replace(/\n/g, "<br />");

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;

  const contactRecipient = CONTACT_TO_EMAIL || defaultContactRecipient;
  const normalizedSmtpPass = SMTP_PASS?.replace(/\s+/g, "");

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !normalizedSmtpPass) {
    return { status: 500, body: { error: "Email service is not configured yet." } };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: normalizedSmtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: contactRecipient,
      replyTo: submittedEmail,
      subject: "New contact form submission",
      disableFileAccess: true,
      disableUrlAccess: true,
      text: `A visitor submitted the contact form.\n\nName: ${fullName}\nEmail: ${submittedEmail}\nPhone: ${phoneText}\nMessage: ${messageText}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send your message right now.";
    const isProduction = process.env.NODE_ENV === "production";

    return {
      status: 500,
      body: {
        error: isProduction ? "Unable to send your message right now." : message,
      },
    };
  }

  return { status: 200, body: { ok: true } };
}
