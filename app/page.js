"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "📝",
    title: "Content-Agent",
    slug: "content-agent",
    desc: "Erstellt automatisch SEO-optimierte Blogartikel, Newsletter und Social Posts.",
  },
  {
    icon: "🎨",
    title: "Design-Agent",
    slug: "design-agent",
    desc: "Verwandelt Ideen und Texte in hochwertige Bilder, Illustrationen und Social Media Visuals.",
  },
  {
    icon: "📨",
    title: "Communication-Agent",
    slug: "communication-agent",
    desc: "Erstellt Social Media Posts, Newsletter-Snippets und kurze Texte – in der passenden Tonalität.",
  },
  {
    icon: "🚀",
    title: "Publishing-Agent",
    slug: "publishing-agent",
    desc: "Veröffentlicht deine Inhalte automatisch auf den richtigen Kanälen.",
  },
  {
    icon: "📊",
    title: "Analytics-Agent",
    slug: "analytics-agent",
    desc: "Analysiert deine Inhalte und liefert klare Insights mit Charts, KPIs und SEO-Reports.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Banner */}
      <section className="relative w-full h-[450px] mt-[72px] flex items-center justify-center text-center">
        <Image
          src="/hero.png"
          alt="IntelliAgent Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Deine Agenten-Pipeline
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow">
            Content, Design, Kommunikation, Publishing & Analyse – vollautomatisiert.
          </p>
        </div>
      </section>

      {/* CTA unter Hero */}
      <section className="py-12 bg-gray-900 w-full text-center">
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-base"
          >
            🚀 Jetzt Demo sichern
          </a>
          <a
            href="#pricing"
            className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition text-base"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Features Übersicht */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 py-24 max-w-6xl px-6"
      >
        {steps.map((f, i) => (
          <Link
            key={i}
            href={`/agent/${f.slug}`}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition text-center block"
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900">
              {f.icon} {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </Link>
        ))}
      </section>

      {/* Pipeline Showcase */}
      <section id="pipeline" className="bg-gray-900 py-28 text-center px-6 w-full">
        <h2 className="text-4xl font-bold text-white mb-6">
          🚀 So arbeiten die IntelliAgents zusammen
        </h2>
        <p className="text-gray-300 mb-16 text-lg max-w-3xl mx-auto">
          Jeder Agent übernimmt eine Aufgabe – gemeinsam bilden sie eine
          vollautomatisierte Pipeline.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, i) => (
            <Link
              key={i}
              href={`/scenarios/${step.slug}`}
              className="flex items-center gap-6 hover:scale-105 transition-transform"
            >
              <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-56 text-center hover:bg-gray-700 transition">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    repeatType: "mirror",
                  }}
                  className="text-blue-400 text-4xl"
                >
                  ➝
                </motion.div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 w-full px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Pakete & Preise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <p className="mb-6">Perfekt für Freelancer & kleine Projekte.</p>
            <p className="text-3xl font-bold mb-6">29 € / Monat</p>
            <ul className="space-y-2 mb-6">
              <li>📝 Content-Agent Basis</li>
              <li>🎨 Design-Agent Lite</li>
              <li>🚀 Einfache Veröffentlichung</li>
            </ul>
            <a
              href="#contact"
              className="bg-blue-600 px-6 py-3 rounded-lg w-full block text-center hover:bg-blue-700 transition"
            >
              Starten
            </a>
          </div>

          <div className="bg-blue-700 p-8 rounded-2xl text-white shadow-lg scale-105">
            <h3 className="text-2xl font-bold mb-4">Business</h3>
            <p className="mb-6">Ideal für Startups & wachsende Unternehmen.</p>
            <p className="text-3xl font-bold mb-6">99 € / Monat</p>
            <ul className="space-y-2 mb-6">
              <li>📝 Content-Agent Pro</li>
              <li>🎨 Design-Agent Vollversion</li>
              <li>📨 Communication-Agent</li>
              <li>🚀 Automatische Veröffentlichung</li>
              <li>📊 Analytics-Agent Standard</li>
            </ul>
            <a
              href="#contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg w-full block text-center hover:bg-gray-100 transition"
            >
              Jetzt starten
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="mb-6">Für Konzerne & internationale Teams.</p>
            <p className="text-3xl font-bold mb-6">299 € / Monat</p>
            <ul className="space-y-2 mb-6">
              <li>Alle Agenten inkludiert</li>
              <li>Custom Integrationen</li>
              <li>Team-Support</li>
              <li>Unlimitierte Workflows</li>
            </ul>
            <a
              href="#contact"
              className="bg-blue-600 px-6 py-3 rounded-lg w-full block text-center hover:bg-blue-700 transition"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="py-28 text-center bg-gray-50 w-full px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Starte jetzt mit IntelliAgent
        </h2>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
          Dein smarter Assistent wartet – Content, Bilder, Publishing, Kommunikation, Analysen und mehr.
        </p>
        <div className="max-w-xl mx-auto text-gray-900">
          <ContactForm />
        </div>
      </section>

      {/* --- Footer mit Datenschutz & Impressum --- */}
      <footer className="mt-20 border-t w-full pt-6 text-center text-sm text-gray-500 bg-gray-900 dark:text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/datenschutz" className="hover:underline text-white">
            Datenschutz
          </Link>
          <Link href="/impressum" className="hover:underline text-white">
            Impressum
          </Link>
        </div>
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} IntelliAgent by Mark Malenica
        </p>
      </footer>
    </main>
  );
}
