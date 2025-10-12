import { generateMetadata } from "@/app/utils/metaUtils";
import Link from "next/link";

export const metadata = generateMetadata(
  "Datenlöschung",
  "Anleitung zur Löschung deiner gespeicherten Daten bei IntelliAgent Solutions gemäß DSGVO. Hier erfährst du, wie du deine Daten löschen lassen kannst.",
  "/datendeletion"
);

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-4 py-16 leading-relaxed">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:underline text-blue-400">
            Startseite
          </Link>{" "}
          › <span className="text-gray-400">Datenlöschung</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-blue-400">
          Löschung deiner gespeicherten Daten
        </h1>

        <p className="mb-4 text-gray-200">
          IntelliAgent Solutions legt größten Wert auf Datenschutz und Transparenz.
          Wenn du über unsere Website, ein Formular oder eine verbundene Plattform
          personenbezogene Daten übermittelt hast, kannst du jederzeit die
          vollständige Löschung dieser Daten beantragen – gemäß{" "}
          <strong className="text-white">
            Art. 17 DSGVO („Recht auf Vergessenwerden“)
          </strong>.
        </p>

        {/* Anleitung */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-300">
          🔒 So beantragst du die Löschung deiner Daten
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300">
          <li>
            Sende eine E-Mail mit dem Betreff{" "}
            <strong>„Datenlöschung“</strong> an{" "}
            <a
              href="mailto:privacy@intelliagentsolutions.de"
              className="text-blue-400 underline"
            >
              privacy@intelliagentsolutions.de
            </a>.
          </li>
          <li>
            Bitte gib an, über welchen Kanal (Website, Facebook, Instagram, etc.)
            du mit uns interagiert hast.
          </li>
          <li>
            Wir bestätigen den Eingang und löschen alle gespeicherten Daten
            innerhalb von <strong>14 Tagen</strong>.
          </li>
        </ul>

        {/* Plattformabschnitt */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-300">
          🧩 Löschung über verbundene Plattformen
        </h2>
        <p className="mb-4 text-gray-300">
          Wenn du über Social-Media-Plattformen (z. B. Meta/Facebook, Instagram,
          LinkedIn) mit uns interagiert hast, kannst du zusätzlich dort den
          Zugriff auf unsere App oder Integration entfernen. Dadurch werden alle
          über diese Plattform gespeicherten Daten ebenfalls gelöscht.
        </p>

        {/* Meta App Link */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-300">
          📎 Direkter Link zur Datenlöschungs-Anleitung (Meta App)
        </h2>
        <p className="mb-6 text-gray-300">
          Dies ist der offizielle Link, den du in der Facebook-/Meta-Entwicklerkonsole
          für deine App hinterlegen kannst:
        </p>

        <p className="mb-8">
          <a
            href="https://www.intelliagentsolutions.de/datendeletion"
            className="text-blue-400 underline break-all"
          >
            https://www.intelliagentsolutions.de/datendeletion
          </a>
        </p>

        {/* Verantwortlich */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-300">
          📍 Verantwortlich für die Datenverarbeitung
        </h2>
        <address className="not-italic text-gray-300">
          <p>IntelliAgent Solutions</p>
          <p>Hannover, Deutschland</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:privacy@intelliagentsolutions.de"
              className="text-blue-400 underline"
            >
              privacy@intelliagentsolutions.de
            </a>
          </p>
        </address>

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
