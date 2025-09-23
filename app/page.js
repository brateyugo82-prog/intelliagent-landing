import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Banner */}
      <section className="relative w-full h-[450px] mt-[72px] flex items-center justify-center text-center">
        <Image
          src="/hero.png"
          alt="IntelliAgent Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow">
            
          </p>
        </div>
      </section>

      {/* CTA unter Hero */}
      <section className="py-12 bg-gray-900 w-full text-center">
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-base"
          >
            🚀 Jetzt Demo sichern
          </a>
          <a
            href="#pricing"
            className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition text-base"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 py-24 max-w-6xl px-6"
      >
        {[
          {
            slug: "content-agent",
            title: "Content-Agent",
            desc: "SEO-optimierte Blogartikel & Texte automatisch erstellen.",
          },
          {
            slug: "design-agent",
            title: "Design-Agent",
            desc: "Individuelle Bilder & Social Media Visuals generieren.",
          },
          {
            slug: "publishing-agent",
            title: "Publishing-Agent",
            desc: "Beiträge automatisch in WordPress & Social Media posten.",
          },
          {
            slug: "analytics-agent",
            title: "Analytics-Agent",
            desc: "Erfolge messen mit automatischen Reports & Diagrammen.",
          },
          {
            slug: "communication-agent",
            title: "Communication-Agent",
            desc: "E-Mails & Termine direkt in Microsoft Teams verwalten.",
          },
        ].map((f, i) => (
          <Link
            key={i}
            href={`/agent/${f.slug}`}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition text-center block"
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </Link>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 w-full px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Pakete & Preise
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "99€",
              features: [
                "2 Artikel/Monat",
                "2 Bilder/Monat",
                "Autom. Publishing",
              ],
            },
            {
              name: "Business",
              price: "299€",
              features: ["4–6 Artikel/Monat", "Reports", "Teams-Integration"],
            },
            {
              name: "Premium",
              price: "599–999€",
              features: ["8–12 Artikel/Monat", "Social Media", "Alle Agenten"],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 p-10 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {p.name}
              </h3>
              <p className="text-4xl font-bold mb-6 text-blue-400">
                {p.price}/Monat
              </p>
              <ul className="mb-6 space-y-2">
                {p.features.map((f, j) => (
                  <li key={j} className="text-gray-300">
                    ✅ {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
                Jetzt starten
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="py-28 text-center bg-gray-50 w-full px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Starte jetzt mit IntelliAgent
        </h2>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
          Dein smarter Assistent wartet – Content, Bilder, E-Mails und mehr.
        </p>

        <div className="max-w-xl mx-auto text-gray-900">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
