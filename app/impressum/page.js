"use client";

import React from "react";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-4 py-16 leading-relaxed">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:underline text-blue-400">
            Startseite
          </Link>{" "}
          › <span className="text-gray-400">Impressum</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-blue-400">Impressum</h1>

        <p className="mb-4 text-gray-200">Angaben gemäß § 5 TMG:</p>
        <p className="text-gray-300 mb-6">
          Mark Malenica  
          <br /> IntelliAgent Solutions  
          <br /> E-Mail:{" "}
          <a
            href="mailto:kontakt@intelliagent.de"
            className="text-blue-400 underline"
          >
            info@intelliagent.de
          </a>  
          <br /> Standort: Deutschland
        </p>

        {/* Haftung für Inhalte */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          Haftung für Inhalte
        </h2>
        <p className="mb-4 text-gray-300">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte
          oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
          zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>

        {/* Haftung für Links */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          Haftung für Links
        </h2>
        <p className="mb-4 text-gray-300">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf
          mögliche Rechtsverstöße überprüft – rechtswidrige Inhalte waren
          dabei nicht erkennbar. Eine permanente inhaltliche Kontrolle der
          verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Links umgehend entfernen.
        </p>

        {/* Urheberrecht */}
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-blue-300">
          Urheberrecht
        </h2>
        <p className="mb-4 text-gray-300">
          Die durch IntelliAgent erstellten Inhalte und Werke auf dieser Website
          unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
          für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>

        {/* Schlussabschnitt */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} IntelliAgent Solutions by Mark Malenica.  
          Alle Rechte vorbehalten.
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
