"use client";

import React from "react";

export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
        Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
        gesetzlichen Bestimmungen (DSGVO, TMG). In dieser
        Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte
        der Datenverarbeitung im Rahmen unserer Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Verantwortlicher</h2>
      <p className="mb-4">
        IntelliAgent / Mark Malenica<br />
        E-Mail: info@intelliagent.de<br />
        Website: https://intelliagent.de
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p className="mb-4">
        Wenn Sie unsere Website besuchen, werden automatisch bestimmte
        Informationen (z. B. IP-Adresse, verwendeter Browser, Datum und Uhrzeit
        des Zugriffs) erfasst. Diese Daten dienen ausschließlich der
        technischen Bereitstellung und Sicherheit der Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
      <p className="mb-4">
        Unsere Website verwendet Cookies, um die Nutzung zu optimieren und
        bestimmte Funktionen bereitzustellen. Sie können die Speicherung von
        Cookies in Ihrem Browser deaktivieren, was jedoch die Funktionalität
        unserer Seite einschränken kann.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Kontaktaufnahme</h2>
      <p className="mb-4">
        Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre
        angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir
        nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Nutzung von Meta / Facebook / Instagram</h2>
      <p className="mb-4">
        Diese Website nutzt Tools von Meta Platforms Ireland Ltd. (Facebook Pixel,
        Instagram Business Tools) zur Analyse, Optimierung und Werbeschaltung.
        Dabei können Cookies gesetzt und personenbezogene Daten (z. B.
        IP-Adresse, Nutzerverhalten) verarbeitet werden. Diese Daten können in
        die USA übertragen werden. Grundlage der Verarbeitung ist Ihre
        Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Ihre Rechte</h2>
      <p className="mb-4">
        Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
        Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch
        zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
        Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde
        beschweren.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Änderungen</h2>
      <p className="mb-8">
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
        geänderte rechtliche Rahmenbedingungen oder technische Entwicklungen
        anzupassen.
      </p>

      <p className="text-sm text-gray-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}
