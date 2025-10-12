import { generateMetadata } from "@/app/utils/metaUtils";
import Link from "next/link";

export const metadata = generateMetadata(
  "Rechtliches & Datenschutz",
  "Alle rechtlichen Informationen zu IntelliAgent Solutions: Impressum, Datenschutz, AGB, Nutzungsbedingungen und Datenlöschung gemäß DSGVO.",
  "/legal"
);

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] text-gray-100 flex items-center justify-center py-24 px-6">
      <section className="max-w-3xl bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          🧭 Rechtliches & Datenschutz
        </h1>

        <p className="text-gray-300 text-center leading-relaxed">
          Hier findest du alle rechtlichen Dokumente und Datenschutzinformationen
          von <strong>IntelliAgent Solutions</strong> an einem Ort.
        </p>

        <div className="border-t border-gray-700/60 pt-6 space-y-3 text-lg">
          <ul className="space-y-3 text-center">
            <li>
              <Link href="/impressum" className="text-blue-400 hover:text-blue-300 underline">
                📘 Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
                🔒 Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link href="/datendeletion" className="text-blue-400 hover:text-blue-300 underline">
                🧹 Datenlöschung (Meta & Social Media)
              </Link>
            </li>
            <li>
              <Link href="/agb" className="text-blue-400 hover:text-blue-300 underline">
                📄 Allgemeine Geschäftsbedingungen (AGB)
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                ⚙️ Nutzungsbedingungen (Plattform)
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                🤖 Privacy Policy (System & APIs)
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-gray-500 text-center text-sm">
          © {new Date().getFullYear()} IntelliAgent Solutions · Alle Rechte vorbehalten.
        </p>
      </section>
    </main>
  );
}
