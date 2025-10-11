import React from "react";

export const metadata = {
  title: "Privacy Policy (System & APIs) | IntelliAgent Solutions",
  description:
    "Informationen zur technischen Verarbeitung, Speicherung und Sicherheit von API- und Systemdaten bei IntelliAgent Solutions.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] text-gray-100 py-32 px-6">
      <section className="max-w-4xl mx-auto bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          🤖 Privacy Policy (System & APIs)
        </h1>

        <p>
          Diese Datenschutzerklärung beschreibt, wie IntelliAgent Solutions
          technische Daten, API-Schlüssel und Nutzungsmetriken verarbeitet und
          schützt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          1. Datenspeicherung
        </h2>
        <p>
          API-Tokens, Logs und Analysemetriken werden verschlüsselt gespeichert
          und ausschließlich zur Systemüberwachung und Fehleranalyse verwendet.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          2. Zugriff
        </h2>
        <p>
          Nur autorisierte Entwickler und Systeme haben Zugriff auf
          sicherheitsrelevante Daten. Alle Zugriffe werden protokolliert.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          3. Drittanbieter
        </h2>
        <p>
          IntelliAgent nutzt externe APIs (z. B. OpenAI, Meta, Vercel). Diese
          Anbieter verarbeiten Daten gemäß ihren eigenen Richtlinien.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </section>
    </main>
  );
}
