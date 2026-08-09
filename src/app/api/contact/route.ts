import { NextResponse } from "next/server";
import { site } from "@/data/site";

type ContactBody = {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; humans never see it
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const project = String(body.project || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const subject = `Portfolio inquiry: ${project || "Project"} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${project || "—"}`,
    "",
    message,
  ].join("\n");

  // Prefer Resend when RESEND_API_KEY is set; otherwise FormSubmit (confirm email once).
  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (resendKey) {
      const from = process.env.RESEND_FROM || "Ario Portfolio <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [site.email],
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ ok: false, error: "Could not send message. Try emailing me directly." }, { status: 502 });
      }
    } else {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          project,
          message,
          _subject: subject,
          _template: "table",
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("FormSubmit error:", err);
        return NextResponse.json(
          {
            ok: false,
            error:
              "Could not send yet. If this is the first time, check your inbox to activate FormSubmit, or email me directly.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please email me directly." }, { status: 500 });
  }
}
