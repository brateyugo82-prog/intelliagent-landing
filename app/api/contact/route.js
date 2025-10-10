import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Sicherheitsprüfung
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    // ZeptoMail API-Aufruf
    const response = await fetch("https://api.zeptomail.eu/v1.1/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: {
          address: process.env.FROM_EMAIL || "no-reply@intelliagentsolutions.de",
          name: "IntelliAgent Solutions",
        },
        to: [
          {
            email_address: {
              address:
                process.env.CONTACT_RECEIVER ||
                "mark@intelliagentsolutions.de",
            },
          },
        ],
        subject: `Neue Nachricht von ${name}`,
        htmlbody: `
          <div style="font-family:Arial, sans-serif; line-height:1.5;">
            <h2 style="color:#111;">Neue Anfrage über IntelliAgent Solutions</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>E-Mail:</b> ${email}</p>
            <p><b>Nachricht:</b><br>${message}</p>
            <hr/>
            <p style="font-size:12px;color:#666;">
              Diese Nachricht wurde automatisch über das Kontaktformular auf intelliagentsolutions.de gesendet.
            </p>
          </div>
        `,
      }),
    });

    // 🧠 Sicheres Parsing des Responses
    let data = null;
    try {
      const text = await response.text();
      data = text ? JSON.parse(text) : null;
    } catch (e) {
      console.warn("Antwort konnte nicht als JSON gelesen werden:", e);
    }

    if (!response.ok) {
      console.error("ZeptoMail Fehler:", data || response.statusText);
      return NextResponse.json(
        {
          error: "Mailversand fehlgeschlagen",
          details: data || response.statusText,
        },
        { status: 500 }
      );
    }

    // Erfolgreicher Mailversand
    return NextResponse.json({
      success: true,
      message: "E-Mail erfolgreich gesendet",
    });
  } catch (err) {
    console.error("Serverfehler:", err);
    return NextResponse.json(
      {
        error: "Serverfehler beim Senden der Nachricht",
        details: err.message,
      },
      { status: 500 }
    );
  }
}

