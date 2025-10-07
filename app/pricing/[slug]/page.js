import { notFound } from "next/navigation";
import Link from "next/link";

const packages = {
  starter: {
    title: "Starter Paket",
    price: "249 €/Monat",
    description: `
Perfekt für Selbstständige, Freelancer oder kleine Unternehmen, die mit regelmäßigem Content durchstarten wollen.  

Das **Starter Paket** hilft dir, deine Online-Sichtbarkeit schnell und effizient aufzubauen – ganz ohne technisches Vorwissen.  
Deine Agenten übernehmen die Erstellung und Veröffentlichung deiner Inhalte, sodass du dich auf dein Kerngeschäft konzentrieren kannst.
    `,
    details: `
✅ 2 Blogartikel + 2 Social-Posts pro Monat  
✅ Passende Bilder & Basis-Designs inklusive  
✅ Automatische Veröffentlichung auf WordPress  
✅ Einstieg in automatisierte Content-Erstellung  
✅ Fokus: Erste Sichtbarkeit & Reichweitenaufbau  

**Ideal für:** Coaches, Dienstleister & kleine Teams  

👉 Der perfekte Start in die Welt der Automatisierung.  
    `,
  },

  business: {
    title: "Business Paket",
    price: "799 €/Monat",
    description: `
Für wachsende Unternehmen, Agenturen und Startups, die regelmäßig hochwertigen Content produzieren möchten.  

Das **Business Paket** kombiniert Content, Design und Analyse zu einem vollautomatisierten Workflow.  
So bleibst du kontinuierlich sichtbar, stärkst deine Marke und erhältst datenbasierte Einblicke in deine Reichweite.
    `,
    details: `
✅ 4–6 Blogartikel + 4 Social-Posts pro Monat  
✅ Professionelle Designs & Performance-Reports  
✅ Microsoft Teams Integration  
✅ Erweiterte SEO-Optimierung  
✅ Regelmäßige Statusupdates & Analytics  

**Ideal für:** Unternehmen mit Fokus auf Wachstum & Branding  

👉 Sichtbarkeit, Konsistenz und klare Analyse – alles in einem Paket.  
    `,
  },

  professional: {
    title: "Professional Paket",
    price: "1.999 €/Monat",
    description: `
Für Unternehmen, die mehr Output und Analyse wollen, aber noch nicht auf Enterprise-Niveau sind.  

Das **Professional Paket** erweitert den automatisierten Workflow deines Business-Pakets um tiefere Insights, mehr Content und präzise SEO-Optimierung.  
Deine Agenten liefern regelmäßig Inhalte, Designs und Reports – komplett integriert in deine bestehenden Systeme.
    `,
    details: `
✅ 6–8 Blogartikel + 8 Social-Posts pro Monat  
✅ Professionelle Designs & kurze Video-Teaser  
✅ Teams-Integration & automatisches Reporting  
✅ Erweiterte SEO-Optimierung & Keyword-Analyse  
✅ Persönlicher Ansprechpartner für Strategiefragen  

**Ideal für:** wachsende Unternehmen, Agenturen, Marketing-Teams  

👉 Perfekter Zwischenschritt zu vollautomatisiertem Marketing.  
    `,
  },

  enterprise: {
    title: "Enterprise Paket",
    price: "ab 3.999 €/Monat (Custom Quote)",
    description: `
Hier läuft wirklich alles automatisiert – inklusive individueller Strategie, API-Integrationen und eigenem Ansprechpartner.  

Das **Enterprise Paket** ist die Komplettlösung für Unternehmen, die Marketingprozesse vollständig automatisieren und datenbasiert steuern möchten.  
Perfekt für größere Teams, Agenturen oder Konzerne, die maximale Reichweite und Effizienz erreichen wollen.
    `,
    details: `
✅ 10–15 Blogartikel + 15–20 Social-Posts pro Monat  
✅ API-Integrationen (CRM, Teams, WordPress)  
✅ Individuelle Dashboards & Performance-Audits  
✅ Eigener Ansprechpartner & Strategie-Workshops  
✅ Custom Branding, Automatisierung & KPI-Tracking  
✅ Enterprise SLA & priorisierter Support  

**Ideal für:** große Unternehmen, Corporate Marketing & Agenturen mit mehreren Kundenprojekten  

👉 Volle Automatisierung, maximale Kontrolle – dein Marketing läuft von selbst.  
    `,
  },
};

export default function PricingDetailPage({ params }) {
  const pack = packages[params.slug];
  if (!pack) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-20 px-6">
      <div className="max-w-3xl bg-gray-800 p-10 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">{pack.title}</h1>
        <p className="text-2xl font-semibold text-blue-400 mb-6">{pack.price}</p>
        <p className="text-gray-300 whitespace-pre-line mb-8">{pack.description}</p>

        <hr className="border-gray-700 my-8" />

        <p className="text-gray-200 whitespace-pre-line leading-relaxed">{pack.details}</p>

        {/* CTA → Anfrage senden */}
        <Link
          href={`/?paket=${params.slug}#contact`}
          className="mt-10 w-full inline-block text-center bg-blue-600 text-white py-4 rounded-full hover:bg-blue-700 transition text-lg"
        >
          🚀 Jetzt {pack.title} buchen
        </Link>

        {/* CTA → Zurück zur Übersicht */}
        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-block text-blue-400 hover:text-blue-300 underline transition"
          >
            ← Zurück zur Preisübersicht
          </Link>
        </div>
      </div>
    </main>
  );
}
