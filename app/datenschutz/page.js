"use client";

import React from "react";
import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-4 py-16 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:underline text-blue-400">
            Startseite
          </Link>{" "}
          › <span className="text-gray-400">Datenschutzerklärung</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-blue-400">
          Datenschutzerklärung
        </h1>

        <p className="mb-4 text-gray-200">
          Der Schutz deiner persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten deine Daten daher ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TMG). In dieser
          Datenschutzerklärung informieren wir dich über die wichtigsten Aspekte
          der Datenverarbeitung im Rahmen unserer Website.
        </p>

        {/* Abschnitt 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          1. Verantwortlicher
        </h2>
        <p className="mb-4 text-gray-300">
          IntelliAgent Solutions / Mark Malenica
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@intelliagent.de"
            className="text-blue-400 underline"
          >
            info@intelliagent.de
          </a>
          <br />
          Website:{" "}
          <a
            href="https://www.intelliagent.de"
            className="text-blue-400 underline"
            target="_blank"
          >
            https://intelliagent.de
          </a>
        </p>

        {/* Abschnitt 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          2. Erhebung und Verarbeitung personenbezogener Daten
        </h2>
        <p className="mb-4 text-gray-300">
          Wenn du unsere Website besuchst, werden automatisch bestimmte
          Informationen (z. B. IP-Adresse, verwendeter Browser, Datum und Uhrzeit
          des Zugriffs) erfasst. Diese Daten dienen ausschließlich der
          technischen Bereitstellung und Sicherheit der Website.
        </p>

        {/* Abschnitt 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          3. Cookies
        </h2>
        <p className="mb-4 text-gray-300">
          Unsere Website verwendet Cookies, um die Nutzung zu optimieren und
          bestimmte Funktionen bereitzustellen. Du kannst die Speicherung von
          Cookies in deinem Browser deaktivieren, was jedoch die
          Funktionalität unserer Seite einschränken kann.
        </p>

        {/* Abschnitt 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          4. Kontaktaufnahme
        </h2>
        <p className="mb-4 text-gray-300">
          Wenn du uns per Formular oder E-Mail kontaktierst, werden deine
          angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir
          nicht ohne deine Einwilligung weiter.
        </p>

        {/* Abschnitt 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          5. Nutzung von Meta / Facebook / Instagram
        </h2>
        <p className="mb-4 text-gray-300">
          Diese Website nutzt Tools von Meta Platforms Ireland Ltd. (Facebook
          Pixel, Instagram Business Tools) zur Analyse, Optimierung und
          Werbeschaltung. Dabei können Cookies gesetzt und personenbezogene
          Daten (z. B. IP-Adresse, Nutzerverhalten) verarbeitet werden. Diese
          Daten können in die USA übertragen werden. Grundlage der Verarbeitung
          ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        </p>

        {/* Abschnitt 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          6. Deine Rechte
        </h2>
        <p className="mb-4 text-gray-300">
          Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
          Widerspruch zu. Wenn du glaubst, dass die Verarbeitung deiner Daten
          gegen das Datenschutzrecht verstößt, kannst du dich bei der
          Aufsichtsbehörde beschweren.
        </p>

        {/* Abschnitt 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          7. Änderungen
        </h2>
        <p className="mb-8 text-gray-300">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
          geänderte rechtliche Rahmenbedingungen oder technische Entwicklungen
          anzupassen.
        </p>

        <p className="text-sm text-gray-500">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-500 border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} IntelliAgent Solutions. Alle Rechte vorbehalten.
          </p>
        </footer>
      </div>
    </main>
  );
}
