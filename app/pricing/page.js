"use client";

import Link from "next/link";

const packages = [
  {
    slug: "starter",
    title: "Starter Paket",
    price: "249 €/Monat",
    desc: "Für Selbstständige & kleine Unternehmen, die ihre Online-Sichtbarkeit mit regelmäßigem Content aufbauen möchten.",
  },
  {
    slug: "business",
    title: "Business Paket",
    price: "799 €/Monat",
    desc: "Für Unternehmen mit wachsender Reichweite, die regelmäßig Inhalte veröffentlichen und analysieren möchten.",
  },
  {
    slug: "professional",
    title: "Professional Paket",
    price: "1.999 €/Monat",
    desc: "Erweiterte Automatisierung, SEO und Reporting – idealer Zwischenschritt zum Enterprise-Level.",
  },
  {
    slug: "enterprise",
    title: "Enterprise Paket",
    price: "ab 3.999 €/Monat (Custom Quote)",
    desc: "Vollautomatisiertes Marketing-System mit individuellen Strategien, API-Integrationen und eigenem Ansprechpartner.",
  },
];

const features = [
  { label: "Blogartikel / Monat", starter: "2", business: "4–6", professional: "6–8", enterprise: "10–15" },
  { label: "Social Media Posts / Monat", starter: "2", business: "4", professional: "8", enterprise: "15–20" },
  { label: "Professionelle Designs", starter: "✅ Basic", business: "✅ Vollversion", professional: "✅ inkl. Video-Teaser", enterprise: "✅ Custom Branding" },
  { label: "Automatisches Publishing", starter: "❌", business: "✅", professional: "✅", enterprise: "✅" },
  { label: "SEO-Optimierung", starter: "Basis", business: "Erweitert", professional: "Tiefenanalyse", enterprise: "Enterprise-Level" },
  { label: "Analytics & Reports", starter: "❌", business: "Standard", professional: "Automatisch + Teams", enterprise: "Custom Dashboards & Audits" },
  { label: "Individuelle Betreuung", starter: "❌", business: "Teilweise", professional: "✅ Persönlich", enterprise: "✅ Strategisch + Workshops" },
  { label: "Microsoft Teams Integration", starter: "❌", business: "✅", professional: "✅", enterprise: "✅ + API" },
  { label: "API-Integrationen", starter: "❌", business: "❌", professional: "Optional", enterprise: "✅ Vollständig (CRM, WordPress, etc.)" },
];

export default function PricingOverviewPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-20 px-6">
      <h1 className="text-5xl font-extrabold mb-16 text-white text-center">
        💼 Unsere Pakete & Preise
      </h1>

      {/* Paket-Karten */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl w-full mb-20">
        {packages.map((pkg) => (
          <Link
            key={pkg.slug}
            href={`/pricing/${pkg.slug}`}
            className="block bg-gray-800 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition text-center"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">{pkg.title}</h3>
            <p className="text-3xl font-semibold text-blue-400 mb-4">{pkg.price}</p>
            <p className="text-gray-300 mb-6">{pkg.desc}</p>
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Details ansehen →
            </span>
          </Link>
        ))}
      </div>

      {/* Vergleichstabelle */}
      <section className="w-full max-w-6xl bg-gray-800 rounded-3xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          📊 Paketvergleich auf einen Blick
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700 text-sm md:text-base">
                <th className="p-3">Leistung</th>
                <th className="p-3 text-center">Starter</th>
                <th className="p-3 text-center">Business</th>
                <th className="p-3 text-center">Professional</th>
                <th className="p-3 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/40">
                  <td className="p-3 text-gray-200">{f.label}</td>
                  <td className="p-3 text-center">{f.starter}</td>
                  <td className="p-3 text-center">{f.business}</td>
                  <td className="p-3 text-center">{f.professional}</td>
                  <td className="p-3 text-center">{f.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
          >
            🚀 Jetzt Beratung anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}
