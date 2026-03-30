const contactEndpoint = "https://formsubmit.co/ajax/contact@moonglade.co.in";

type ContactSubmission = {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
};

export async function submitContactForm(submission: ContactSubmission) {
  const formData = new FormData();

  formData.append("_subject", "New contact form submission");
  formData.append("_captcha", "false");
  formData.append("_template", "table");

  Object.entries(submission).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === "false") {
    throw new Error(result?.message || "Unable to send your message right now.");
  }

  return result;
}
