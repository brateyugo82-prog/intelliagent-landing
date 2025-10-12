import { generateMetadata } from "@/app/utils/metaUtils";

export const metadata = generateMetadata(
  "Impressum",
  "Impressum von IntelliAgent Solutions – Angaben gemäß §5 TMG: Verantwortlich für Inhalte, Haftungsausschluss und Urheberrechte.",
  "/impressum"
);

export default function ImpressumLayout({ children }) {
  return <>{children}</>;
}
