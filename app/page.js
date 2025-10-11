"use client";

import { Suspense } from "react";
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

function HomeContent() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative w-full h-[500px] mt-[72px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="IntelliAgent Hero"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/70 to-gray-900/90 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
            Deine Agenten-Pipeline
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 drop-shadow">
            Content, Design, Kommunikation, Publishing & Analyse – vollautomatisiert.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-gray-800 w-full text-center">
        <motion.div
          className="flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/demo"
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition-transform"
          >
            🚀 Jetzt Demo sichern
          </Link>
          <Link
            href="/pricing"
            className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            Mehr erfahren
          </Link>
        </motion.div>
      </section>

      {/* Agents Overview */}
      <section id="features" className="grid md:grid-cols-3 gap-8 py-24 max-w-6xl px-6">
        {steps.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={`/agent/${f.slug}`}
              className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition text-center block"
            >
              <h3 className="font-semibold text-xl mb-2 text-white">
                {f.icon} {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 w-full px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          💼 Pakete & Preise
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <Link
            href="/pricing/starter?paket=starter#contact"
            className="group bg-gray-800/60 border border-gray-700 hover:border-blue-500 transition p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-3">Starter</h3>
            <p className="text-gray-300 mb-4">
              Ideal für Einzelunternehmer & kleine Projekte.
            </p>
            <p className="text-3xl font-extrabold mb-6 text-blue-400">
              249 € / Monat
            </p>
            <ul className="text-gray-400 space-y-1 mb-8 text-sm">
              <li>📝 2 Blogartikel / Monat</li>
              <li>🎨 2 passende Bilder</li>
              <li>🚀 Automatische Veröffentlichung</li>
            </ul>
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Details ansehen →
            </span>
          </Link>

          {/* Business */}
          <Link
            href="/pricing/business?paket=business#contact"
            className="group bg-gray-800/60 border border-gray-700 hover:border-blue-500 transition p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-3">Business</h3>
            <p className="text-gray-300 mb-4">
              Für Startups & Agenturen mit wachsendem Content-Volumen.
            </p>
            <p className="text-3xl font-extrabold mb-6 text-blue-400">
              799 € / Monat
            </p>
            <ul className="text-gray-400 space-y-1 mb-8 text-sm">
              <li>📝 4–6 Blogartikel + 4 Social Posts</li>
              <li>🎨 Professionelle Designs</li>
              <li>📨 Communication-Agent</li>
              <li>📊 Analytics & Reports</li>
              <li>💬 Teams-Integration</li>
            </ul>
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Details ansehen →
            </span>
          </Link>

          {/* Professional */}
          <Link
            href="/pricing/professional?paket=professional#contact"
            className="group bg-gray-800/60 border border-gray-700 hover:border-purple-500 transition p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-purple-400/20 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-3">Professional</h3>
            <p className="text-gray-300 mb-4">
              Für Unternehmen mit Fokus auf Output, SEO & Automatisierung.
            </p>
            <p className="text-3xl font-extrabold mb-6 text-purple-400">
              1 999 € / Monat
            </p>
            <ul className="text-gray-400 space-y-1 mb-8 text-sm">
              <li>📝 6–8 Blogartikel + 8 Social-Posts</li>
              <li>🎨 Video-Teaser & Designs</li>
              <li>📈 Teams-Integration & Reporting</li>
              <li>🔍 Erweiterte SEO-Optimierung</li>
            </ul>
            <span className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
              Details ansehen →
            </span>
          </Link>

          {/* Enterprise */}
          <Link
            href="/pricing/enterprise?paket=enterprise#contact"
            className="group bg-gradient-to-br from-yellow-500/10 to-yellow-900/20 border-2 border-yellow-500 hover:border-yellow-400 transition p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-yellow-300/30 hover:-translate-y-1 relative"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              ⭐ Empfohlen für Unternehmen
            </span>
            <h3 className="text-2xl font-bold mb-3 text-yellow-400 mt-2">
              Enterprise
            </h3>
            <p className="text-gray-300 mb-4">
              Vollautomatisierte Marketing-Power mit Strategie, APIs &
              Betreuung.
            </p>
            <p className="text-3xl font-extrabold mb-6 text-yellow-400">
              ab 3 999 € / Monat
            </p>
            <ul className="text-gray-400 space-y-1 mb-8 text-sm">
              <li>📝 10–15 Blogartikel + 15–20 Social Posts</li>
              <li>🔗 API-Integrationen (CRM, Teams, WordPress)</li>
              <li>📊 Individuelle Dashboards & Audits</li>
              <li>🤝 Persönlicher Ansprechpartner</li>
              <li>🧠 Custom Strategie & Enterprise Support</li>
            </ul>
            <span className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition">
              Details ansehen →
            </span>
          </Link>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="py-28 text-center bg-gray-50 w-full px-6 text-gray-900">
        <h2 className="text-4xl font-bold mb-6">Starte jetzt mit IntelliAgent</h2>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
          Dein smarter Assistent für Content, Design, Publishing, Kommunikation
          und Analyse.
        </p>
        <div className="max-w-xl mx-auto text-gray-900">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t w-full pt-6 text-center text-sm text-gray-400 bg-gray-900">
        <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"></div>
        <div className="flex justify-center flex-wrap gap-6 mb-4">
          <Link href="/legal" className="hover:underline text-white">
            Rechtliches & Datenschutz
          </Link>
          <Link href="/datendeletion" className="hover:underline text-white">
            Datenlöschung
          </Link>
          <Link href="/pricing/enterprise" className="hover:underline text-blue-400">
            🚀 IntelliAgent für Unternehmen
          </Link>
        </div>
        <p className="text-gray-500 mb-4">
          © {new Date().getFullYear()} IntelliAgent Solutions · by Mark Malenica
        </p>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="text-white text-center p-20">Lädt ...</div>}>
      <HomeContent />
    </Suspense>
  );
}
