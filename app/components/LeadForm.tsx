"use client";

import { useActionState } from "react";
import { submitLead, type FormState } from "../actions";

const initial: FormState = { ok: false };

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const input =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200";

export default function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, initial);
  const e = state.errors ?? {};

  if (state.ok) {
    return (
      <p role="status" className="rounded-lg bg-emerald-50 p-4 text-emerald-900">
        Thanks, we got your details. We reply within one working day.
      </p>
    );
  }

  return (
    <form action={action} noValidate className="space-y-4" aria-describedby="form-help">
      <p id="form-help" className="text-sm text-slate-600">
        Tell us about your site. All fields are required.
      </p>
      <Field id="name" label="Name" error={e.name}>
        <input id="name" name="name" autoComplete="name" defaultValue={state.values?.name} aria-invalid={!!e.name} aria-describedby={e.name ? "name-error" : undefined} className={input} />
      </Field>
      <Field id="email" label="Email" error={e.email}>
        <input id="email" name="email" type="email" autoComplete="email" defaultValue={state.values?.email} aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} className={input} />
      </Field>
      <Field id="message" label="What do you want to improve?" error={e.message}>
        <textarea id="message" name="message" rows={4} defaultValue={state.values?.message} aria-invalid={!!e.message} aria-describedby={e.message ? "message-error" : undefined} className={input} />
      </Field>
      <button type="submit" disabled={pending} className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-60">
        {pending ? "Sending..." : "Get my free audit"}
      </button>
    </form>
  );
}
