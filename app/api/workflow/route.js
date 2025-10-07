export async function POST(req) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return Response.json(
        { success: false, error: "Parameter 'query' fehlt oder ist ungültig." },
        { status: 400 }
      );
    }

    // 🔁 Schritte, die nacheinander ausgeführt werden
    const steps = [
      "✅ Content-Agent: Thema analysiert & SEO-optimiert",
      "✅ Design-Agent: Visual erstellt",
      "✅ Communication-Agent: Social Media Post generiert",
      "✅ Publishing-Agent: Beitrag geplant",
      "✅ Analytics-Agent: KPIs vorbereitet",
    ];

    // 🎨 Beispielausgaben für verschiedene Kanäle
    const variants = [
      `📝 Blogartikel-Intro:\n"${query}" – Alles, was du wissen musst, um stressfrei zu starten. 🚀`,
      `📸 Instagram-Caption:\n✨ ${query} ✨\n\nTipps & Tricks für dich – folge uns für mehr! 💡`,
      `📨 Newsletter-Snippet:\nNeu bei uns: ${query}\n👉 Jetzt mehr erfahren auf unserer Website.`,
      `💼 LinkedIn-Post:\n"${query}" – Ein spannender Einblick in unsere Arbeit. 🚀 #Innovation #Teamwork`,
    ];

    // 🔀 Zufällige Variante wählen
    const output = variants[Math.floor(Math.random() * variants.length)];

    // ✅ Erfolgreiche Antwort
    return Response.json({ success: true, steps, output });
  } catch (error) {
    console.error("❌ Fehler in /api/workflow:", error);
    return Response.json(
      { success: false, error: "Ungültige Anfrage oder JSON-Fehler." },
      { status: 400 }
    );
  }
}

// GET-Endpunkt zur schnellen Prüfung in Browser oder Ping
export async function GET() {
  return Response.json({
    status: "ok",
    message: "Workflow API aktiv ✅",
    example: { query: "Beispielthema" },
  });
}
