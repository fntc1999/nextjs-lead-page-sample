"use server";

import { validateLead, type LeadErrors } from "@/lib/validate";

export type FormState = { ok: boolean; errors?: LeadErrors; values?: Record<string, string> };

// Sample only: a real build would write the lead to a database or a CRM here.
export async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = Object.fromEntries(
    ["name", "email", "message"].map((k) => [k, String(formData.get(k) ?? "")]),
  );
  const { errors } = validateLead(values);
  if (errors) return { ok: false, errors, values };
  return { ok: true };
}
