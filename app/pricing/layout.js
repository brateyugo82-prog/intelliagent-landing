import { generateMetadata } from "@/app/utils/metaUtils";

export const metadata = generateMetadata(
  "Pakete & Preise",
  "Entdecke unsere KI-Marketing-Pakete für Content, Design, Publishing & Analyse. Flexible Preise für Startups, Agenturen & Unternehmen.",
  "/pricing"
);

export default function PricingLayout({ children }) {
  return <>{children}</>;
}
