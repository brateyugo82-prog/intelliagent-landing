export const agents = [
  {
    title: "📝 Content-Agent",
    description:
      "Erstellt automatisch SEO-optimierte Blogartikel, Newsletter und Social Posts. Spart dir Zeit und sorgt dafür, dass deine Marke online sichtbar bleibt.",
  },
  {
    title: "🎨 Design-Agent",
    description:
      "Verwandelt Ideen und Texte in hochwertige Bilder, Illustrationen und Social Media Visuals – perfekt abgestimmt auf deinen Content.",
  },
  {
    title: "📨 Communication-Agent",
    description:
      "Erstellt Social Media Posts, Newsletter-Snippets und kurze Texte – immer in der passenden Tonalität für deine Zielgruppe.",
  },
  {
    title: "🚀 Publishing-Agent",
    description:
      "Veröffentlicht deine Inhalte automatisch auf den richtigen Kanälen: WordPress, LinkedIn, Instagram & mehr – ohne manuelles Posten.",
  },
  {
    title: "📊 Analytics-Agent",
    description:
      "Analysiert deine Inhalte, liefert klare Insights mit Charts, KPIs und SEO-Reports – ideal für Teams oder Kundenpräsentationen.",
  },
];

export default function AgentsSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {agents.map((agent, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-start min-h-[220px]"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900">{agent.title}</h3>
            <p className="text-gray-700 text-base">{agent.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
