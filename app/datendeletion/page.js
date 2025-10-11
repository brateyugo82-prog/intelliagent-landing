import Link from "next/link";

export const metadata = {
  title: "Datenlöschung | IntelliAgent Solutions",
  description:
    "Anleitung zur Löschung deiner gespeicherten Daten bei IntelliAgent Solutions gemäß DSGVO. Hier erfährst du, wie du deine Daten löschen lassen kannst.",
  openGraph: {
    title: "Datenlöschung | IntelliAgent Solutions",
    description:
      "So kannst du deine personenbezogenen Daten bei IntelliAgent Solutions löschen lassen – schnell und DSGVO-konform.",
    url: "https://www.intelliagentsolutions.de/datendeletion",
    siteName: "IntelliAgent Solutions",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "https://www.intelliagentsolutions.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntelliAgent Solutions – AI-Driven Marketing Automation",
      },
    ],
  },
};

export default function DataDeletionPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline text-indigo-600">
          Startseite
        </Link>{" "}
        › <span className="text-gray-600">Datenlöschung</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        Löschung deiner gespeicherten Daten
      </h1>

      <p className="mb-4">
        IntelliAgent Solutions legt größten Wert auf Datenschutz und Transparenz.
        Wenn du über unsere Website, ein Formular oder eine verbundene Plattform
        personenbezogene Daten übermittelt hast, kannst du jederzeit die
        vollständige Löschung dieser Daten beantragen – gemäß{" "}
        <strong>Art. 17 DSGVO („Recht auf Vergessenwerden“)</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        🔒 So beantragst du die Löschung deiner Daten
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          Sende eine E-Mail mit dem Betreff{" "}
          <strong>„Datenlöschung“</strong> an{" "}
          <a
            href="mailto:privacy@intelliagentsolutions.de"
            className="text-indigo-600 underline"
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

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        🧩 Löschung über verbundene Plattformen
      </h2>
      <p className="mb-4">
        Wenn du über Social-Media-Plattformen (z. B. Meta/Facebook, Instagram,
        LinkedIn) mit uns interagiert hast, kannst du zusätzlich dort den
        Zugriff auf unsere App oder Integration entfernen. Dadurch werden alle
        über diese Plattform gespeicherten Daten ebenfalls gelöscht.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        📎 Direkter Link zur Datenlöschungs-Anleitung (Meta App)
      </h2>
      <p className="mb-6">
        Dies ist der offizielle Link, den du in der Facebook-/Meta-Entwicklerkonsole
        für deine App hinterlegen kannst:
      </p>

      <p className="mb-8">
        <a
          href="https://www.intelliagentsolutions.de/datendeletion"
          className="text-indigo-600 underline break-all"
        >
          https://www.intelliagentsolutions.de/datendeletion
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        📍 Verantwortlich für die Datenverarbeitung
      </h2>
      <address className="not-italic">
        <p>IntelliAgent Solutions</p>
        <p>Hannover, Deutschland</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:privacy@intelliagentsolutions.de"
            className="text-indigo-600 underline"
          >
            privacy@intelliagentsolutions.de
          </a>
        </p>
      </address>

      <footer className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-4">
        <p>
          © {new Date().getFullYear()} IntelliAgent Solutions. Alle Rechte vorbehalten.
        </p>
      </footer>
    </main>
  );
}
