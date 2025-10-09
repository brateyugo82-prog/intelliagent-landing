export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, paket } = await req.json();

    // 🧩 Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    // 🔑 SMTP-Verbindung (Zoho)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true = Port 465 (SSL)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false }, // falls Zoho TLS verwendet
    });

    // ✉️ Mail-Konfiguration
    const mailOptions = {
      from: `"IntelliAgent Solutions" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email, // damit du direkt dem Absender antworten kannst
      subject: `📩 Neue Anfrage von ${name} über IntelliAgent Landing`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2>Neue Kontaktanfrage 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          ${paket ? `<p><strong>Gewähltes Paket:</strong> ${paket}</p>` : ""}
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
          <hr style="margin: 20px 0;">
          <p style="font-size: 0.9em; color: #888;">
            Gesendet über <b>intelliagentsolutions.de</b>
          </p>
        </div>
      `,
    };

    // 📬 Mail senden
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail erfolgreich gesendet:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "E-Mail erfolgreich gesendet ✅",
    });
  } catch (error) {
    console.error("❌ Fehler beim Mailversand:", error.message);
    return NextResponse.json(
      { success: false, error: "Fehler beim Mailversand: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Contact API aktiv ✅" });
}
