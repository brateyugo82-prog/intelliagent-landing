"use client";

import { notFound } from "next/navigation";
import Link from "next/link";

const agents = {
  "content-agent": {
    icon: "📝",
    title: "Content-Agent",
    desc: "Dein Textexperte für SEO-optimierte Artikel, Blogposts & Newsletter.",
    scenarios: [
      {
        type: "Startup 🚀",
        text: "Starte schnell sichtbar durch – der Content-Agent erstellt dir regelmäßig Blogartikel und Social Posts, ohne dass du ein Marketing-Team brauchst.",
        benefits: ["Schnelle Sichtbarkeit", "Kosteneffizient", "Skalierbar"],
      },
      {
        type: "Mittelstand 🏢",
        text: "Stärke deine Marke nachhaltig mit professionellen Newslettern und regelmäßigen Inhalten, die deine Kundenbindung erhöhen.",
        benefits: ["Markenaufbau", "Kundenbindung", "Bessere Google-Rankings"],
      },
      {
        type: "Konzern 🌐",
        text: "Automatisierte Content-Produktion für mehrere Länder und Abteilungen. Einheitliche Qualität, weniger Overhead.",
        benefits: ["Skalierbarkeit", "Globale Konsistenz", "Entlastung Teams"],
      },
    ],
  },

  "design-agent": {
    icon: "🎨",
    title: "Design-Agent",
    desc: "Verwandelt Inhalte in hochwertige Bilder, Grafiken & Social Visuals.",
    scenarios: [
      {
        type: "Startup 🚀",
        text: "Du hast keine Designer-Ressourcen? Der Design-Agent erstellt automatisch Visuals für deine Posts und Artikel – ready to share.",
        benefits: ["Professionelle Designs", "Schnell & flexibel", "Visuell auffallen"],
      },
      {
        type: "Mittelstand 🏢",
        text: "Mit klaren Corporate Designs und konsistenten Grafiken sparst du dir externe Designer.",
        benefits: ["Markenkonsistenz", "Zeitersparnis", "Kostenkontrolle"],
      },
      {
        type: "Konzern 🌐",
        text: "Globale Teams nutzen den Design-Agent, um Markenrichtlinien automatisch einzuhalten.",
        benefits: ["CI/CD-konform", "Entlastung Design-Abteilungen", "Skalierbar"],
      },
    ],
  },

  "communication-agent": {
    icon: "📨",
    title: "Communication-Agent",
    desc: "Dein Text-Allrounder für Social Media, Newsletter und Kampagnen.",
    scenarios: [
      {
        type: "Startup 🚀",
        text: "Social Posts, die Reichweite bringen – ohne lange Texte brainstormen zu müssen.",
        benefits: ["Schnelle Posts", "Mehr Sichtbarkeit", "Direkte Wirkung"],
      },
      {
        type: "Mittelstand 🏢",
        text: "Automatische Newsletter-Snippets und Kampagnen-Texte, die deine Kunden ansprechen.",
        benefits: ["Effiziente Kommunikation", "Mehr Engagement", "Zeitersparnis"],
      },
      {
        type: "Konzern 🌐",
        text: "Texte für internationale Teams und Märkte – konsistent und skalierbar.",
        benefits: ["Mehrsprachigkeit", "Konsistente Tonalität", "Globale Reichweite"],
      },
    ],
  },

  "publishing-agent": {
    icon: "🚀",
    title: "Publishing-Agent",
    desc: "Automatisches Veröffentlichen auf WordPress, LinkedIn, Instagram & mehr.",
    scenarios: [
      {
        type: "Startup 🚀",
        text: "Du willst deine Inhalte posten, ohne dich um jede Plattform zu kümmern? Der Publishing-Agent veröffentlicht automatisch für dich.",
        benefits: ["Keine manuellen Posts", "Zeit gespart", "Mehr Reichweite"],
      },
      {
        type: "Mittelstand 🏢",
        text: "Plane Beiträge für die ganze Woche oder den ganzen Monat – dein Team bleibt fokussiert.",
        benefits: ["Planungssicherheit", "Team-Entlastung", "Mehr Konsistenz"],
      },
      {
        type: "Konzern 🌐",
        text: "Koordiniere internationale Teams und Kanäle – zentral gesteuert, lokal ausgespielt.",
        benefits: ["Globale Steuerung", "Automatisierung", "Skalierbar"],
      },
    ],
  },

  "analytics-agent": {
    icon: "📊",
    title: "Analytics-Agent",
    desc: "Analysiert Reichweite, SEO-Ergebnisse & erstellt Reports.",
    scenarios: [
      {
        type: "Startup 🚀",
        text: "Verstehe, was wirklich funktioniert – ohne komplizierte Tools. Klarheit für dein Wachstum.",
        benefits: ["Einfache Reports", "Fokus auf Wachstum", "Bessere Entscheidungen"],
      },
      {
        type: "Mittelstand 🏢",
        text: "Erhalte detaillierte KPIs, SEO-Einblicke und automatische Präsentationen für dein Team.",
        benefits: ["Bessere SEO-Strategie", "Automatische Charts", "Team Insights"],
      },
      {
        type: "Konzern 🌐",
        text: "Skalierbare Analysen für mehrere Abteilungen, mit individuell anpassbaren Reports.",
        benefits: ["Enterprise-Analytics", "Automatisierte Dashboards", "Skalierbar"],
      },
    ],
  },
};

export default function ScenarioPage({ params }) {
  const { slug } = params;
  const agent = agents[slug];

  if (!agent) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
          <span>{agent.icon}</span> {agent.title}
        </h1>
        <p className="text-xl text-gray-300 mb-12">{agent.desc}</p>

        {/* Szenarien */}
        <div className="grid md:grid-cols-3 gap-8">
          {agent.scenarios.map((s, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                {s.type}
              </h2>
              <p className="text-gray-300 mb-6">{s.text}</p>
              <ul className="space-y-2 text-gray-200">
                {s.benefits.map((b, j) => (
                  <li key={j}>✅ {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6">
            🚀 Starte jetzt mit dem {agent.title}
          </h3>
          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Jetzt Beratung anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
