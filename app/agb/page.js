import { generateMetadata } from "@/app/utils/metaUtils";
import React from "react";
import Link from "next/link";

export const metadata = generateMetadata(
  "Allgemeine Geschäftsbedingungen (AGB)",
  "AGB von IntelliAgent Solutions – B2B-orientierte Bedingungen für Nutzung, Lizenzierung und Leistungen unserer KI-Marketing-Plattform.",
  "/agb"
);

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-32 px-6">
      <section className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-10 space-y-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:underline text-blue-400">
            Startseite
          </Link>{" "}
          › <span>AGB</span>
        </nav>

        <h1 className="text-4xl font-bold text-blue-400 text-center">
          📄 Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <p className="text-gray-300">
          Diese AGB regeln die Vertragsbeziehung zwischen{" "}
          <strong>IntelliAgent Solutions – Mark Malenica</strong> (&quot;Anbieter&quot;) und
          Business-Kunden (&quot;Kunden&quot;). Sie richten sich ausschließlich an{" "}
          <strong>B2B</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">
          1. Leistungsbeschreibung
        </h2>
        <p className="text-gray-300">
          Der Anbieter stellt über seine Plattform KI-gestützte Lösungen für
          Content, Design, Kommunikation, Publishing und Analytics bereit.
          Umfang, Laufzeiten und Preise ergeben sich aus den jeweiligen Paketen
          oder Verträgen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">
          2. Vertragslaufzeit und Kündigung
        </h2>
        <p className="text-gray-300">
          Verträge laufen monatlich, sofern nicht anders vereinbart. Eine
          Kündigung ist jederzeit zum Monatsende möglich. Individuelle
          Enterprise-Vereinbarungen bleiben unberührt.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">
          3. Haftung und Gewährleistung
        </h2>
        <p className="text-gray-300">
          Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit. Für Ausfälle
          von Drittanbieter-APIs (z. B. Meta, OpenAI, WordPress) wird keine
          Haftung übernommen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-300">
          4. Datenschutz
        </h2>
        <p className="text-gray-300">
          Der Schutz personenbezogener Daten richtet sich nach der{" "}
          <Link href="/datenschutz" className="text-blue-400 underline">
            Datenschutzerklärung
          </Link>{" "}
          von IntelliAgent Solutions.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </section>
    </main>
  );
}
