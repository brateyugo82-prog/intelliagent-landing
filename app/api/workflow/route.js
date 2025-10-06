export async function POST(req) {
  try {
    const { query } = await req.json();

    // Schritte, die nacheinander angezeigt werden
    const steps = [
      "✅ Content-Agent: Thema analysiert & SEO-optimiert",
      "✅ Design-Agent: Visual erstellt",
      "✅ Communication-Agent: Social Media Post generiert",
      "✅ Publishing-Agent: Beitrag geplant",
      "✅ Analytics-Agent: KPIs vorbereitet"
    ];

    // Verschiedene Ergebnisvarianten
    const variants = [
      `📝 Blogartikel-Intro:\n"${query}" – Alles was du wissen musst, um stressfrei zu starten. 🚀`,
      `📸 Instagram-Caption:\n✨ ${query} ✨\n\nTipps & Tricks für dich – folge uns für mehr! 💡`,
      `📨 Newsletter-Snippet:\nNeu bei uns: ${query}\n👉 Jetzt mehr erfahren auf unserer Website.`,
      `💼 LinkedIn-Post:\n"${query}" – Ein spannender Einblick in unsere Arbeit. 🚀 #Innovation #Teamwork`
    ];

    // Zufällig eine Variante auswählen
    const output = variants[Math.floor(Math.random() * variants.length)];

    return Response.json({ steps, output });
  } catch (e) {
    return Response.json(
      { error: "Ungültige Anfrage" },
      { status: 400 }
    );
  }
}
