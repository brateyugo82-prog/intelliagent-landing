import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  // 🧭 Basis-URL für OG, Sitemap, Twitter etc.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.intelliagentsolutions.de"
  ),

  title: "IntelliAgent Solutions – AI-gestützte Marketing-Automation",
  description:
    "Automatisiere Content, Design, Kommunikation und Analyse mit IntelliAgent. Deine KI-Marketing-Pipeline für Social Media, SEO & Markenaufbau.",

  verification: {
    google: "S0i5FJrK1sb6UCi7AWkMsKKAj_ap_vbyOkWAKjPmQqE",
  },

  openGraph: {
    title: "IntelliAgent Solutions – KI-Marketing für dein Business",
    description:
      "Deine smarte Multi-Agenten-Lösung für Content, Design, Publishing & Social Media.",
    url: "https://www.intelliagentsolutions.de",
    siteName: "IntelliAgent Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntelliAgent Solutions – AI Marketing Automation",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  alternates: {
    canonical: "https://www.intelliagentsolutions.de",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* ✅ Google-Verifikation */}
        <meta
          name="google-site-verification"
          content="S0i5FJrK1sb6UCi7AWkMsKKAj_ap_vbyOkWAKjPmQqE"
        />

        {/* ✅ Strukturierte Daten: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IntelliAgent Solutions",
              url: "https://www.intelliagentsolutions.de",
              logo: "https://www.intelliagentsolutions.de/logo.png",
              sameAs: [
                "https://www.instagram.com/intelliagentsolutions",
                "https://www.linkedin.com/company/intelliagentsolutions",
                "https://www.facebook.com/intelliagentsolutions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@intelliagentsolutions.de",
                contactType: "customer support",
                availableLanguage: "German",
              },
            }),
          }}
        />
      </head>

      <body className="bg-background text-foreground font-sans">
        {/* 🧭 Navigation */}
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="IntelliAgent Logo"
                width={40}
                height={40}
                priority
              />
              <span className="font-bold text-xl text-gray-800">
                IntelliAgent
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-6 text-gray-700 font-medium">
              <Link href="/#features" className="hover:text-blue-600">
                Features
              </Link>
              <Link href="/#pricing" className="hover:text-blue-600">
                Preise
              </Link>
              <Link href="/#contact" className="hover:text-blue-600">
                Kontakt
              </Link>
              <Link href="/demo" className="hover:text-blue-600">
                Demo
              </Link>
            </div>
          </nav>
        </header>

        {/* 💡 Hauptinhalt */}
        <main className="pt-[72px]">{children}</main>

        {/* 🧱 Footer */}
        <footer className="mt-20 py-8 bg-gray-100 text-center text-sm text-gray-600">
          {/* Gradient Divider */}
          <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4" />

          {/* Footer Navigation */}
          <div className="flex justify-center flex-wrap gap-6 mb-4">
            <Link href="/datenschutz" className="hover:underline text-gray-700">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:underline text-gray-700">
              Impressum
            </Link>
            <Link href="/datendeletion" className="hover:underline text-gray-700">
              Datenlöschung
            </Link>
            <Link href="/legal" className="hover:underline text-blue-600">
              Rechtliches
            </Link>
            <Link href="/sitemap" className="hover:underline text-gray-700">
              Sitemap
            </Link>
          </div>

          {/* Footer Copyright */}
          <p className="text-gray-500">
            © {new Date().getFullYear()} IntelliAgent Solutions – Alle Rechte vorbehalten.
          </p>
        </footer>
      </body>
    </html>
  );
}
