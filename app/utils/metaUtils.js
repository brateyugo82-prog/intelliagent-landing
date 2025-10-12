// app/utils/metaUtils.js
export const generateMetadata = (title, description, path) => ({
  title: `${title} | IntelliAgent Solutions`,
  description,
  alternates: { canonical: `https://www.intelliagentsolutions.de${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.intelliagentsolutions.de${path}`,
    siteName: "IntelliAgent Solutions",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntelliAgent Solutions – Automatisierte Marketing-Agenten",
      },
    ],
  },
});
