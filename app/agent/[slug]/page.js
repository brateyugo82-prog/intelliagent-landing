"use client";

import Link from "next/link";
import { useState } from "react";

const agents = {
  "content-agent": {
    title: "📝 Content-Agent",
    description: `
Der Content-Agent ist dein persönlicher Textexperte. Er erstellt automatisch
hochwertige, SEO-optimierte Artikel, Blogbeiträge, Newsletter und Social Media Posts.
Dabei achtet er nicht nur auf die passende Tonalität, sondern auch auf klare Struktur,
Keyword-Optimierung und Lesefreundlichkeit.  

👉 Das bedeutet für dich: mehr Reichweite, bessere Google-Rankings und Texte, die deine Zielgruppe wirklich fesseln.
    `,
    usecases: [
      "Blogartikel für deine Unternehmensseite – professionell und SEO-optimiert",
      "Newsletter-Texte, die deine Kunden wirklich öffnen und lesen",
      "Social Media Posts, die Reichweite und Interaktion steigern",
    ],
    benefits: [
      "Mehr Sichtbarkeit bei Google",
      "Automatisch frischer Content ohne Aufwand",
      "Texte in deiner Markenstimme",
    ],
  },
  "design-agent": {
    title: "🎨 Design-Agent",
    description: `
Der Design-Agent verwandelt Ideen und Texte in beeindruckende Bilder, Social Media Visuals
und Grafiken – automatisch und in Sekunden.  

👉 Damit sparst du Zeit, Geld und musst nie wieder lange nach Stockfotos suchen.
    `,
    usecases: [
      "Hochwertige Blog-Bilder für deine Artikel",
      "Instagram-Posts und LinkedIn Visuals für deine Reichweite",
      "Präsentationen, Ads und Grafiken, die sofort professionell aussehen",
    ],
    benefits: [
      "Individuelle Bilder statt Standard-Stockfotos",
      "Konsistente Markenoptik für alle Kanäle",
      "Schneller als jeder Designer",
    ],
  },
  "communication-agent": {
    title: "📨 Communication-Agent",
    description: `
Der Communication-Agent ist dein Text-Allrounder für Social Media, Newsletter
und kurze Kampagnen. Er erstellt automatisch Posts, optimiert deine Botschaften
für verschiedene Plattformen und passt den Ton an – ob locker, professionell oder inspirierend.  

👉 Mit ihm hast du immer die richtigen Worte für deine Zielgruppe – egal ob auf Instagram, LinkedIn oder im Newsletter.
    `,
    usecases: [
      "Social Media Posts für LinkedIn, Instagram, X/Twitter",
      "Newsletter-Teaser und Kampagnen-Texte",
      "Tonalitätsanpassungen: freundlich, professionell, inspirierend",
    ],
    benefits: [
      "Starke Präsenz auf allen Kanälen",
      "Mehr Interaktion durch optimierte Texte",
      "Automatisch passende Tonalität",
    ],
  },
  "publishing-agent": {
    title: "🚀 Publishing-Agent",
    description: `
Der Publishing-Agent übernimmt das, was normalerweise am meisten Zeit kostet:
das manuelle Hochladen von Inhalten.  

👉 Du klickst einmal – und deine komplette Content-Strategie geht live.
    `,
    usecases: [
      "Blogartikel automatisch in WordPress publizieren",
      "Social Media Feeds (Instagram, LinkedIn, Facebook) füllen",
      "Kampagnen planen und timen ohne manuelles Copy-Paste",
    ],
    benefits: [
      "Nie wieder manuelles Copy-Paste",
      "Kampagnen zeitgenau planen",
      "Mehr Zeit fürs Wesentliche",
    ],
  },
  "analytics-agent": {
    title: "📊 Analytics-Agent",
    description: `
Der Analytics-Agent liefert dir Klarheit. Er analysiert die Performance deiner Inhalte
und erstellt automatisch Reports, Diagramme und KPIs.  

👉 Kein Rätselraten mehr, sondern datenbasierte Entscheidungen.
    `,
    usecases: [
      "Performance-Tracking deiner Artikel und Posts",
      "SEO & Traffic Reports auf Knopfdruck",
      "Automatisierte Reports für Kunden oder Team-Präsentationen",
    ],
    benefits: [
      "Volle Transparenz über Reichweite & Erfolge",
      "Datenbasierte Entscheidungen statt Bauchgefühl",
      "Automatische Reports für Teams & Kunden",
    ],
  },
};

export default function AgentPage({ params }) {
  const { slug } = params;
  const agent = agents[slug];

  // Fallback: Agent nicht gefunden
  if (!agent) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
        <p>❌ Agent nicht gefunden.</p>
      </main>
    );
  }

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleDemo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    switch (slug) {
      case "content-agent":
        setOutput(`📝 Beispiel-Artikel zum Thema "${input}" mit SEO-Optimierung und klarer Struktur.`);
        break;
      case "design-agent":
        setOutput(`🎨 Beispiel-Design-Idee für "${input}" – modernes Visual in deiner Markenoptik.`);
        break;
      case "communication-agent":
        setOutput(`📨 Beispiel-Post: "${input}" – optimiert für Social Media, kurz & ansprechend.`);
        break;
      case "publishing-agent":
        setOutput(`🚀 Publishing-Plan erstellt: "${input}" wird automatisch veröffentlicht.`);
        break;
      case "analytics-agent":
        setOutput(`📊 Report generiert: "${input}" – KPIs, Reichweite und Wachstum im Überblick.`);
        break;
      default:
        setOutput(`Demo für "${input}" ausgeführt.`);
    }
  };

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
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✅</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white">Deine Vorteile</h2>
          <ul className="space-y-3 text-gray-300">
            {agent.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✨</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">🚀 Demo ausprobieren</h2>
        <form
          onSubmit={handleDemo}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
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
