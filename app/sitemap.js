import fs from "fs";
import path from "path";

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.intelliagentsolutions.de";

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

  const getLastModified = (pagePath) => {
    try {
      const fullPath = path.join(process.cwd(), "app", pagePath, "page.js");
      const stats = fs.statSync(fullPath);
      return stats.mtime.toISOString().split("T")[0];
    } catch {
      return new Date().toISOString().split("T")[0];
    }
  };

  return staticPages.map((page) => {
    const url = `${baseUrl}${page ? `/${page}` : ""}`;
    const lastModified = getLastModified(page);
    let priority = 0.7;

    if (page === "") priority = 1.0;
    else if (page.startsWith("agent")) priority = 0.8;
    else if (["pricing", "demo"].includes(page)) priority = 0.9;

    return {
      url,
      lastModified,
      changeFrequency: "monthly",
      priority,
    };
  });
}
