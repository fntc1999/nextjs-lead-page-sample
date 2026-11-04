# Next.js lead page sample

A small landing page with a validated lead form. Built with the Next.js App Router, TypeScript (strict) and Tailwind CSS.

- `app/page.tsx` the page, server rendered.
- `app/components/LeadForm.tsx` the form, with `useActionState`, labelled fields and error messages tied to each input.
- `app/actions.ts` a server action that validates the form.
- `app/api/lead/route.ts` a JSON API route that uses the same validator (201 valid, 422 invalid, 400 bad body).
- `lib/validate.ts` the shared validation.

There is no database or login. A real build would save the lead in `app/actions.ts`.

```bash
npm install
npm run dev
```
