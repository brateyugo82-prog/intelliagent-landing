import { generateMetadata } from "@/app/utils/metaUtils";

export const metadata = generateMetadata(
  "Datenschutzerklärung",
  "Erfahre, wie IntelliAgent Solutions deine personenbezogenen Daten gemäß DSGVO schützt. Transparente Informationen zu Speicherung, Nutzung und deinen Rechten.",
  "/datenschutz"
);

export default function DatenschutzLayout({ children }) {
  return <>{children}</>;
}
