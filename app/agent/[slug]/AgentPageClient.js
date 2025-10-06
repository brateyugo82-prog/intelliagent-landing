"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const agents = {
  "content-agent": {
    title: "📝 Content-Agent",
    description: `
Der Content-Agent ist dein persönlicher Textexperte. Er erstellt automatisch
hochwertige, SEO-optimierte Artikel, Blogbeiträge, Newsletter und Social Media Posts.
    `,
    usecases: [
      "Blogartikel für deine Unternehmensseite",
      "Newsletter-Texte für Kundenbindung",
      "Social Media Posts mit Reichweite",
    ],
    benefits: [
      "Mehr Sichtbarkeit bei Google",
      "Frischer Content ohne Aufwand",
      "Texte in deiner Markenstimme",
    ],
  },
  "design-agent": {
    title: "🎨 Design-Agent",
    description: `
Verwandelt Ideen und Texte in beeindruckende Bilder, Social Media Visuals
und Grafiken – automatisch und in Sekunden.  
    `,
    usecases: [
      "Blog-Bilder automatisch generieren",
      "Instagram-Posts und LinkedIn Visuals",
      "Präsentationen und Grafiken",
    ],
    benefits: [
      "Individuelle Bilder statt Stockfotos",
      "Konsistente Markenoptik",
      "Schneller als jeder Designer",
    ],
  },
  "communication-agent": {
    title: "📨 Communication-Agent",
    description: `
Der Communication-Agent ist dein Text-Allrounder für Social Media, Newsletter
und kurze Kampagnen. Er optimiert deine Botschaften und passt den Ton an.
    `,
    usecases: [
      "Social Media Posts für LinkedIn, Instagram, X/Twitter",
      "Newsletter-Snippets und Kampagnen-Texte",
      "Automatische Tonalitäts-Anpassung",
    ],
    benefits: [
      "Starke Präsenz auf allen Kanälen",
      "Mehr Interaktion",
      "Immer die richtige Tonalität",
    ],
  },
  "publishing-agent": {
    title: "🚀 Publishing-Agent",
    description: `
Der Publishing-Agent übernimmt das, was normalerweise am meisten Zeit kostet:
das manuelle Hochladen von Inhalten.
    `,
    usecases: [
      "Blogartikel automatisch in WordPress posten",
      "Social Media Feeds automatisch füllen",
      "Kampagnen timen und planen",
    ],
    benefits: [
      "Nie wieder Copy-Paste",
      "Zeitgenaue Planung",
      "Mehr Zeit fürs Wesentliche",
    ],
  },
  "analytics-agent": {
    title: "📊 Analytics-Agent",
    description: `
Der Analytics-Agent liefert dir Klarheit. Er analysiert die Performance deiner Inhalte
und erstellt automatisch Reports, Diagramme und KPIs.
    `,
    usecases: [
      "Performance-Tracking von Artikeln",
      "SEO & Traffic Reports",
      "Automatische Kundenreports",
    ],
    benefits: [
      "Volle Transparenz",
      "Daten statt Bauchgefühl",
      "Automatische Reports",
    ],
  },
};

export default function AgentPageClient({ slug }) {
  const agent = agents[slug];
  if (!agent) return notFound();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleDemo(e) {
    e.preventDefault();
    if (!input.trim()) return;

    switch (slug) {
      case "content-agent":
        setOutput(`📝 Artikel-Idee zum Thema "${input}" erstellt.`);
        break;
      case "design-agent":
        setOutput(`🎨 Visual-Idee für "${input}" erstellt.`);
        break;
      case "communication-agent":
        setOutput(`📨 Social-Post für "${input}" vorbereitet.`);
        break;
      case "publishing-agent":
        setOutput(`🚀 Publishing-Plan für "${input}" angelegt.`);
        break;
      case "analytics-agent":
        setOutput(`📊 Report für "${input}" erstellt.`);
        break;
      default:
        setOutput(`Demo für "${input}" ausgeführt.`);
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">{agent.title}</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed">
          {agent.description}
        </p>
      </section>

      {/* Usecases & Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Einsatzmöglichkeiten</h2>
          <ul className="space-y-3 text-gray-300">
            {agent.usecases.map((u, i) => (
              <li key={i}>✅ {u}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Deine Vorteile</h2>
          <ul className="space-y-3 text-gray-300">
            {agent.benefits.map((b, i) => (
              <li key={i}>✨ {b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">🚀 Demo ausprobieren</h2>
        <form onSubmit={handleDemo} className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Dein Thema eingeben..."
            className="flex-1 p-4 rounded-xl text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Testen
          </button>
        </form>
        {output && (
          <div className="mt-8 bg-gray-800 p-6 rounded-xl text-left whitespace-pre-line">
            {output}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          Starte jetzt mit dem {agent.title}
        </h2>
        <Link
          href="/#contact"
          className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
        >
          🚀 {agent.title} jetzt anfragen
        </Link>
      </section>
    </main>
  );
}
