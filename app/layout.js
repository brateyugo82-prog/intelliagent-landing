import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "IntelliAgent – Automatisiert dein Business mit KI-Agenten",
  description:
    "IntelliAgent ist dein All-in-One KI-Agenten Hub: Content, Design, Publishing, Analytics und Communication in Microsoft Teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-background text-foreground font-sans">
        {/* Globale Navigation */}
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="IntelliAgent Logo"
                width={40}
                height={40}
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

        {/* Main Content */}
        <main className="pt-[72px]">{children}</main>

        {/* Footer */}
        <footer className="mt-20 py-8 bg-gray-100 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} IntelliAgent – Alle Rechte vorbehalten.
        </footer>
      </body>
    </html>
  );
}
