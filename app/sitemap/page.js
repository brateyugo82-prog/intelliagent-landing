import Link from "next/link";

export const metadata = {
  title: "Sitemap | IntelliAgent Solutions",
  description:
    "Übersicht aller Seiten, Agenten und rechtlichen Informationen von IntelliAgent Solutions. Schnellzugriff auf alle wichtigen Bereiche.",
  openGraph: {
    title: "Sitemap | IntelliAgent Solutions",
    description:
      "Hier findest du alle Seiten von IntelliAgent Solutions: Agenten, Preise, Rechtliches und mehr.",
    url: "https://www.intelliagentsolutions.de/sitemap",
    siteName: "IntelliAgent Solutions",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.intelliagentsolutions.de/sitemap",
  },
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] text-gray-100 py-32 px-6">
      <section className="max-w-5xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
            🗺️ Sitemap
          </h1>
          <p className="text-gray-400 text-lg">
            Finde hier alle wichtigen Seiten, Agenten und rechtlichen Informationen
            von <span className="text-blue-400 font-semibold">IntelliAgent Solutions</span>.
          </p>
        </header>

        {/* 🔹 Agenten */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🤖 Unsere Agenten
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300">
            <li><Link href="/agent/content-agent" className="hover:text-blue-400">📝 Content-Agent</Link></li>
            <li><Link href="/agent/design-agent" className="hover:text-blue-400">🎨 Design-Agent</Link></li>
            <li><Link href="/agent/communication-agent" className="hover:text-blue-400">💬 Communication-Agent</Link></li>
            <li><Link href="/agent/publishing-agent" className="hover:text-blue-400">🚀 Publishing-Agent</Link></li>
            <li><Link href="/agent/analytics-agent" className="hover:text-blue-400">📊 Analytics-Agent</Link></li>
          </ul>
        </section>

        {/* 🔹 Produkte & Preise */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            💼 Produkte & Pakete
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300">
            <li><Link href="/pricing" className="hover:text-purple-400">Preise & Pakete</Link></li>
            <li><Link href="/demo" className="hover:text-purple-400">🚀 Demo anfordern</Link></li>
            <li><Link href="/#contact" className="hover:text-purple-400">📩 Kontaktformular</Link></li>
          </ul>
        </section>

        {/* 🔹 Unternehmen */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">
            🏢 Unternehmen
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300">
            <li><Link href="/" className="hover:text-pink-400">🏠 Startseite</Link></li>
            <li><Link href="/#features" className="hover:text-pink-400">✨ Features</Link></li>
            <li><Link href="/#contact" className="hover:text-pink-400">📞 Kontakt</Link></li>
          </ul>
        </section>

        {/* 🔹 Rechtliches */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            ⚖️ Rechtliches & Datenschutz
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300">
            <li><Link href="/legal" className="hover:text-yellow-400">📘 Rechtliches</Link></li>
            <li><Link href="/agb" className="hover:text-yellow-400">📄 AGB</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-400">⚙️ Nutzungsbedingungen</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-400">🔒 Datenschutz</Link></li>
            <li><Link href="/datenschutz" className="hover:text-yellow-400">📜 Datenschutzerklärung</Link></li>
            <li><Link href="/impressum" className="hover:text-yellow-400">🏛️ Impressum</Link></li>
            <li><Link href="/datendeletion" className="hover:text-yellow-400">🧹 Datenlöschung</Link></li>
          </ul>
        </section>

        {/* 📅 Footer Info */}
        <footer className="pt-10 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
          <p className="text-gray-600 mt-1">
            © {new Date().getFullYear()} IntelliAgent Solutions · Alle Rechte vorbehalten.
          </p>
        </footer>
      </section>
    </main>
  );
}
