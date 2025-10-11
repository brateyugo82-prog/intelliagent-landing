import React from "react";

export const metadata = {
  title: "Nutzungsbedingungen | IntelliAgent Solutions",
  description:
    "Nutzungsbedingungen der IntelliAgent-Plattform – Regelungen zur Verwendung, Accounts, APIs und Automatisierung.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] text-gray-100 py-32 px-6">
      <section className="max-w-4xl mx-auto bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          ⚙️ Nutzungsbedingungen (Plattform)
        </h1>

        <p>
          Diese Bedingungen regeln die Nutzung der IntelliAgent-Plattform und
          aller damit verbundenen Dienste durch registrierte Benutzer.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          1. Zulässige Nutzung
        </h2>
        <p>
          Die Plattform darf nur für legitime Marketing-, Content- und
          Automatisierungszwecke verwendet werden. Manipulation, Missbrauch von
          APIs oder unerlaubtes Scraping sind untersagt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          2. Zugangsdaten und Sicherheit
        </h2>
        <p>
          Nutzer sind verpflichtet, Zugangsdaten vertraulich zu behandeln. Bei
          Verdacht auf unbefugten Zugriff ist der Anbieter unverzüglich zu
          informieren.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          3. Beendigung der Nutzung
        </h2>
        <p>
          IntelliAgent Solutions kann bei Verstößen gegen diese Bedingungen den
          Zugang zur Plattform sperren oder kündigen.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </section>
    </main>
  );
}
