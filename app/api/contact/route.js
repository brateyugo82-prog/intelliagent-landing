import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, paket } = await req.json();

    // 🧩 Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Bitte alle Felder ausfüllen." },
        { status: 400 }
      );
    }

    // 🔑 SMTP-Verbindung mit Daten aus deiner .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true = Port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✉️ E-Mail-Inhalt
    const mailOptions = {
      from: `"IntelliAgent Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // Empfängeradresse (du oder dein Kunde)
      subject: `📩 Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${paket ? `<p><strong>Gewähltes Paket:</strong> ${paket}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Mail senden
    await transporter.sendMail(mailOptions);

    console.log("✅ E-Mail erfolgreich gesendet an", process.env.CONTACT_RECEIVER);

    return NextResponse.json({
      success: true,
      message: "E-Mail wurde erfolgreich gesendet ✅",
    });
  } catch (error) {
    console.error("❌ Fehler beim Mailversand:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Mailversand." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Contact API aktiv ✅" });
}
