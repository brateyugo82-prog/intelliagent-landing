import { notFound } from "next/navigation";

const agents = {
  "content-agent": {
    title: "Content-Agent",
    description: `
Der Content-Agent erstellt automatisch hochwertige, SEO-optimierte Artikel
für Blogs, Websites und Newsletter. Er nutzt GPT-Modelle, um Texte mit
Mehrwert zu generieren und speichert die Inhalte direkt als Markdown.
    `,
    usecases: [
      "Blogartikel für deine Unternehmensseite",
      "SEO-Content für Google Ranking",
      "Newsletter-Texte & Social Posts",
    ],
  },
  "design-agent": {
    title: "Design-Agent",
    description: `
Der Design-Agent generiert automatisch Bilder, Social Media Visuals
und Grafiken mit KI. Du erhältst passende Illustrationen zu jedem Artikel,
optimiert für Web und Social Media.
    `,
    usecases: [
      "Blog-Bilder",
      "Instagram/Facebook/LinkedIn Visuals",
      "Präsentationen & Ads",
    ],
  },
  "publishing-agent": {
    title: "Publishing-Agent",
    description: `
Der Publishing-Agent übernimmt das direkte Veröffentlichen von Artikeln
und Bildern in WordPress oder Social Media Kanälen. Alles automatisiert
über die REST API.
    `,
    usecases: [
      "Blog-Artikel automatisch publizieren",
      "Social Media Feeds befüllen",
      "Content-Kampagnen planen",
    ],
  },
  "analytics-agent": {
    title: "Analytics-Agent",
    description: `
Der Analytics-Agent analysiert automatisch die Performance deiner Beiträge.
Er erstellt Diagramme, KPIs und Reports (Markdown/PDF) für dein Dashboard.
    `,
    usecases: [
      "Performance Tracking",
      "SEO & Traffic Reports",
      "Präsentationen für Kunden",
    ],
  },
  "communication-agent": {
    title: "Communication-Agent",
    description: `
Der Communication-Agent (Frederik) ist direkt in Microsoft Teams integriert.
Er kann E-Mails schreiben, Termine erstellen und Erinnerungen setzen – über
die Microsoft Graph API.
    `,
    usecases: [
      "E-Mails verfassen und verschicken",
      "Outlook-Kalender verwalten",
      "Erinnerungen und Notifications in Teams",
    ],
  },
};

export default function AgentPage({ params }) {
  const agent = agents[params.slug];

  if (!agent) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">{agent.title}</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          {agent.description}
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-800 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Einsatzmöglichkeiten</h2>
          <ul className="space-y-3 text-gray-300">
            {agent.usecases.map((u, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✅</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
