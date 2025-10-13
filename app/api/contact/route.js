import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    const endpoint = "https://api.zeptomail.eu/v1.1/email";
    const apiKey = process.env.ZEPTO_API_KEY?.trim();

    // 🧠 Debug: prüfen, ob ENV korrekt geladen wurde
    console.log("🔍 ENV CHECK:", {
      endpoint,
      from: process.env.FROM_EMAIL,
      to: process.env.CONTACT_RECEIVER,
      apiKeyLoaded: !!apiKey,
    });

    const payload = {
      from: {
        address: "no-reply@intelliagentsolutions.de", // exakt wie in ZeptoMail verifiziert
        name: "IntelliAgent Solutions",
      },
      to: [
        {
          email_address: {
            address:
              process.env.CONTACT_RECEIVER || "mark@intelliagentsolutions.de",
          },
        },
      ],
      subject: `Neue Nachricht von ${name}`,
      htmlbody: `
        <div style="font-family:Arial, sans-serif; line-height:1.6;">
          <h2>Neue Anfrage über IntelliAgent Solutions</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong><br>${message}</p>
          <hr/>
          <p style="font-size:12px;color:#666;">Diese Nachricht wurde automatisch über das Kontaktformular auf intelliagentsolutions.de gesendet.</p>
        </div>
      `,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    // 🧠 Debug-Ausgabe
    const raw = await response.text();
    console.log("🔍 ZeptoMail response status:", response.status);
    console.log("🔍 ZeptoMail response body:", raw);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Mailversand fehlgeschlagen", raw },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "E-Mail erfolgreich gesendet",
    });
  } catch (err) {
    console.error("❌ Serverfehler:", err);
    return NextResponse.json(
      { error: "Serverfehler beim Senden der Nachricht", details: err.message },
      { status: 500 }
    );
  }
}
