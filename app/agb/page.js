import React from "react";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | IntelliAgent Solutions",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von IntelliAgent Solutions – gültig für Nutzung, Lizenzierung und Leistungen unserer SaaS-Plattform.",
};

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] text-gray-100 py-32 px-6">
      <section className="max-w-4xl mx-auto bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          📄 Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <p>
          Diese AGB regeln die Vertragsbeziehung zwischen{" "}
          <strong>IntelliAgent Solutions – Mark Malenica</strong> (nachfolgend
          „Anbieter“) und den Nutzern der angebotenen Software- und
          KI-Dienstleistungen (nachfolgend „Kunden“).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          1. Leistungsbeschreibung
        </h2>
        <p>
          Der Anbieter stellt über seine Plattform automatisierte Content-,
          Design- und Kommunikationslösungen auf Basis von KI bereit.
          Leistungsumfang, Preise und Laufzeiten ergeben sich aus den
          jeweiligen Paketen oder Verträgen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          2. Vertragslaufzeit und Kündigung
        </h2>
        <p>
          Verträge laufen monatlich, sofern nicht anders vereinbart. Eine
          Kündigung ist jederzeit zum Monatsende möglich.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          3. Haftung und Gewährleistung
        </h2>
        <p>
          Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit. Für
          Ausfälle durch Drittanbieter-APIs (z. B. Meta, TikTok, OpenAI)
          übernimmt IntelliAgent keine Verantwortung.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-400">
          4. Datenschutz
        </h2>
        <p>
          Der Schutz personenbezogener Daten richtet sich nach der{" "}
          <a href="/datenschutz" className="text-blue-400 underline">
            Datenschutzerklärung
          </a>{" "}
          von IntelliAgent Solutions.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </section>
    </main>
  );
}
