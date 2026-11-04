import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validate";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a JSON body." }, { status: 400 });
  }
  const { lead, errors } = validateLead(body);
  if (errors) return NextResponse.json({ errors }, { status: 422 });
  return NextResponse.json({ received: lead!.email }, { status: 201 });
}
