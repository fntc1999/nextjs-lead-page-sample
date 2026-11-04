export type Lead = { name: string; email: string; message: string };
export type LeadErrors = Partial<Record<keyof Lead, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(input: Record<string, unknown>): { lead?: Lead; errors?: LeadErrors } {
  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const message = String(input.message ?? "").trim();
  const errors: LeadErrors = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";
  if (message.length < 10) errors.message = "Tell us a little more, at least 10 characters.";
  if (message.length > 2000) errors.message = "Keep it under 2000 characters.";
  return Object.keys(errors).length ? { errors } : { lead: { name, email, message } };
}
