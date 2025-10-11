export default async function sitemap() {
  const baseUrl = "https://www.intelliagentsolutions.de"; // deine Domain

  const staticPages = [
    "",
    "demo",
    "pricing",
    "agent/content-agent",
    "agent/design-agent",
    "agent/communication-agent",
    "agent/publishing-agent",
    "agent/analytics-agent",
    "datenschutz",
    "impressum",
    "datendeletion",
    "agb",
    "terms",
    "privacy",
    "legal",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.7,
  }));
}
