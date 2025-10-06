import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte alle Felder ausfüllen." },
        { status: 400 }
      );
    }

    // 🔑 Transporter mit SMTP Daten aus .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✉️ E-Mail Daten
    const mailOptions = {
      from: `"Landingpage Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // Zieladresse aus .env
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong><br/>${message}</p>
      `,
    };

    // ✅ Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "E-Mail gesendet ✅" });
  } catch (error) {
    console.error("❌ Fehler beim Mailversand:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Mailversand" },
      { status: 500 }
    );
  }
}
