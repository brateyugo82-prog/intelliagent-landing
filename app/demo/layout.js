import { generateMetadata } from "@/app/utils/metaUtils";

export const metadata = generateMetadata(
  "Demo",
  "Teste kostenlos die IntelliAgent Demo: Erlebe, wie KI-Agenten Content schreiben, Designs erstellen und Social-Posts automatisch veröffentlichen.",
  "/demo"
);

export default function DemoLayout({ children }) {
  return <>{children}</>;
}
