import { generateMetadata } from "@/app/utils/metaUtils";

export const metadata = generateMetadata(
  "Privacy Policy (System & APIs)",
  "Unsere Privacy Policy beschreibt, wie IntelliAgent Solutions technische Daten, API-Schlüssel und Integrationen sicher verarbeitet und schützt.",
  "/privacy"
);

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}
