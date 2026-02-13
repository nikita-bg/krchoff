import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
