import { notFound } from "next/navigation";
import Link from "next/link";

const packages = {
  starter: {
    title: "Starter Paket",
    price: "99€/Monat",
    description: `
Perfekt für Selbstständige oder kleine Unternehmen, die mit Content starten wollen.  

Du erhältst regelmäßig hochwertigen Content ohne eigenen Aufwand. Damit wirst du schneller gefunden, bleibst sichtbar und kannst dich voll auf dein Business konzentrieren. Dieses Paket ist ideal, um online durchzustarten, auch wenn du bisher noch wenig Erfahrung mit Marketing hast.

- 2 Blogartikel pro Monat
- 2 Bilder passend zu den Artikeln
- Automatisches Veröffentlichen (WordPress)

👉 Ideal, um erste Online-Sichtbarkeit aufzubauen ohne viel Aufwand.
    `,
    details: `
✅ Geeignet für Coaches, Freelancer & kleine Teams  
✅ Kein Vorwissen nötig – wir übernehmen alles  
✅ Schneller Start mit sofort messbaren Ergebnissen  
✅ Fokus: Sichtbarkeit & erste Kundenkontakte  
✅ Spart Zeit & Geld im Vergleich zu externen Agenturen  
✅ Einstieg in die Welt der Automatisierung – ohne Risiko  
    `,
  },
  business: {
    title: "Business Paket",
    price: "299€/Monat",
    description: `
Für wachsende Unternehmen, die regelmäßig Content produzieren und sichtbar bleiben wollen.  

Mit dem Business Paket hebst du dein Marketing auf ein neues Level: Du bleibst kontinuierlich präsent, stärkst deine Marke und bekommst durch professionelle Designs und Reports messbare Einblicke in deine Reichweite. Durch die Integration in Microsoft Teams fließen Updates direkt in deinen Arbeitsalltag.

- 4–6 Blogartikel pro Monat
- Professionelle Designs & Reports
- Integration in Microsoft Teams
- Bessere SEO-Reichweite

👉 Mit diesem Paket bekommst du einen konstanten Content-Flow und tiefe Einblicke in deine Performance.
    `,
    details: `
✅ Optimal für KMU, Agenturen & Startups in der Wachstumsphase  
✅ Kombination aus Content, Design & Analyse für mehr Reichweite  
✅ Integration in deine bestehenden Tools (z. B. Microsoft Teams)  
✅ Fokus: Regelmäßige Sichtbarkeit & professionelle Außenwirkung  
✅ Inhalte wirken professioneller & heben dich vom Wettbewerb ab  
✅ Einfache Skalierbarkeit, wenn dein Team wächst  
    `,
  },
  premium: {
    title: "Premium Paket",
    price: "599–999€/Monat",
    description: `
Das Rundum-Sorglos-Paket für Unternehmen, die Content & Automatisierung voll ausschöpfen wollen.  

Dieses Paket ist für alle, die maximale Sichtbarkeit und absolute Effizienz wollen. Blog, Social Media, Bilder, Reports – alles läuft automatisiert und perfekt abgestimmt. Du bekommst nicht nur Content, sondern eine komplette Marketing-Maschine, die 24/7 für dich arbeitet. Individuelle Betreuung sorgt dafür, dass deine Strategie exakt zu deinem Unternehmen passt.

- 8–12 Blogartikel pro Monat
- Social Media Betreuung (Bilder + Texte)
- Alle Agenten inklusive
- Individuelle Reports & Betreuung

👉 Maximale Sichtbarkeit, vollständige Automatisierung, klare Zahlen – alles in einem Paket.
    `,
    details: `
✅ Perfekt für größere Unternehmen, die volle Content-Power wollen  
✅ Betreuung von Blog + Social Media aus einer Hand  
✅ Zugriff auf alle IntelliAgent-Module (Content, Design, Publishing, Analytics, Communication)  
✅ Individuelle Strategie & persönlicher Ansprechpartner  
✅ Fokus: maximale Reichweite, höchste Effizienz, volle Automatisierung  
✅ Spart bis zu 80% deiner Marketing-Arbeitszeit  
✅ Stärkt nachhaltig deine Marke und Kundenbindung  
    `,
  },
};

export default async function PricingPage({ params }) {
  const { slug } = await params;
  const pack = packages[slug];

  if (!pack) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-20 px-6">
      <div className="max-w-3xl bg-gray-800 p-10 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">{pack.title}</h1>
        <p className="text-2xl font-semibold text-blue-400 mb-6">
          {pack.price}
        </p>
        <p className="text-gray-300 whitespace-pre-line mb-8">
          {pack.description}
        </p>
        <hr className="border-gray-700 my-8" />
        <p className="text-gray-200 whitespace-pre-line leading-relaxed">
          {pack.details}
        </p>

        {/* CTA → geht zur Startseite, scrollt runter und füllt Paket */}
        <Link
          href={`/?paket=${slug}#contact`}
          className="mt-10 w-full inline-block text-center bg-blue-600 text-white py-4 rounded-full hover:bg-blue-700 transition text-lg"
        >
          🚀 Jetzt {pack.title} buchen
        </Link>
      </div>
    </main>
  );
}
