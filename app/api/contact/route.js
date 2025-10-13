import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    const hasZepto = !!process.env.ZEPTO_API_KEY;
    const apiKey = process.env.ZEPTO_API_KEY?.trim();
    const fromEmail =
      process.env.FROM_EMAIL || "no-reply@intelliagentsolutions.de";
    const toEmail =
      process.env.CONTACT_RECEIVER || "mark@intelliagentsolutions.de";

    console.log("🔍 ENV CHECK:", {
      hasZepto,
      fromEmail,
      toEmail,
      apiKeySnippet: apiKey ? apiKey.slice(0, 20) + "..." : "undefined",
    });

    // ========== ZEPTO MAIL (wenn vorhanden) ==========
    if (hasZepto) {
      const prefixedKey = apiKey.startsWith("Zoho-enczapikey")
        ? apiKey
        : `Zoho-enczapikey ${apiKey}`;

      const payload = {
        mailagent_id: "1dd0d9a430e96e97",
        from: { address: fromEmail, name: "IntelliAgent Solutions" },
        to: [{ email_address: { address: toEmail } }],
        subject: `Neue Nachricht von ${name}`,
        htmlbody: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;">
            <h2>Neue Anfrage über IntelliAgent Solutions</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Nachricht:</strong><br>${message}</p>
          </div>
        `,
      };

      const response = await fetch("https://api.zeptomail.eu/v1.1/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": prefixedKey,
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      console.log("📬 ZeptoMail:", response.status, raw);

      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: "E-Mail erfolgreich über ZeptoMail gesendet",
        });
      }
      console.warn("⚠️ ZeptoMail fehlgeschlagen:", raw);
    }

    // ========== SMTP FALLBACK ==========
    console.log("💌 SMTP-Fallback aktiv …");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.eu",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"IntelliAgent Solutions" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `Neue Nachricht von ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>E-Mail:</b> ${email}</p>
        <p><b>Nachricht:</b><br>${message}</p>
      `,
    });

    console.log("✅ SMTP erfolgreich.");
    return NextResponse.json({
      success: true,
      message: "E-Mail über SMTP gesendet",
    });
  } catch (err) {
    console.error("❌ Serverfehler:", err);
    return NextResponse.json(
      { error: "Mailversand fehlgeschlagen", details: err.message },
      { status: 500 },
    );
  }
}
