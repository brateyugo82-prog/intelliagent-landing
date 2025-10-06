import { NextResponse } from "next/server";

// Dummy Blogposts
const posts = [
  {
    slug: "produktivitaet-tipps",
    title: "5 Tipps für mehr Produktivität im Alltag",
    description: "Mit diesen einfachen Strategien erreichst du mehr in kürzerer Zeit.",
    content: `
Produktivität hängt nicht von langen Arbeitszeiten ab, sondern von smarter Organisation:

1. Plane deinen Tag in Blöcken.  
2. Setze klare Prioritäten (3 wichtigste Aufgaben).  
3. Arbeite in Fokus-Sprints (Pomodoro-Technik).  
4. Vermeide Multitasking.  
5. Reflektiere am Abend deine Ergebnisse.  

👉 Mit kleinen Änderungen erreichst du mehr in weniger Zeit.
    `,
    image: "/images/produktivitaet.jpg",
    prompt: "Eine moderne Arbeitsumgebung, eine Person am Schreibtisch mit Timer und Notizbuch, helles Tageslicht, produktives Ambiente",
  },
  {
    slug: "coaches-sichtbarkeit",
    title: "So steigern Coaches ihre Sichtbarkeit mit Content",
    description: "Warum regelmäßige Artikel und Social Media Posts entscheidend sind.",
    content: `
Coaches leben von Vertrauen. Sichtbarkeit entsteht durch regelmäßigen Content:

- Blogartikel zeigen Expertise.  
- Social Media Posts bauen Nähe auf.  
- Reports und Tipps helfen, Kunden zu gewinnen.  

👉 Wer Content ignoriert, bleibt unsichtbar – wer Content nutzt, wird als Experte wahrgenommen.
    `,
    image: "/images/coach.jpg",
    prompt: "Business-Coach erklärt etwas vor Flipchart, freundliche Atmosphäre, professionelle Umgebung, Fokus auf Person",
  },
  {
    slug: "tools-2025",
    title: "Die besten Tools für effizientes Arbeiten 2025",
    description: "Von Notion bis ChatGPT – so arbeitest du effizienter.",
    content: `
Die richtigen Tools sparen Zeit und Nerven:

- **Notion** – für Planung und Dokumentation.  
- **Trello** – für Teamprojekte.  
- **ChatGPT** – für Texte & Ideen.  
- **Zoom** – für Meetings.  

👉 Mit diesen Tools steigerst du sofort deine Effizienz.
    `,
    image: "/images/tools.jpg",
    prompt: "Collage aus Symbolen von modernen Productivity-Apps (Notion, Trello, Zoom, KI-Icon), futuristischer Hintergrund, klare Darstellung",
  },
  {
    slug: "kundenvertrauen-content",
    title: "Wie regelmäßige Blogartikel Kundenvertrauen schaffen",
    description: "Content-Marketing erklärt: so baust du langfristiges Vertrauen auf.",
    content: `
Kunden vertrauen Marken, die regelmäßig nützliche Inhalte veröffentlichen:

- Blogartikel zeigen Expertise.  
- SEO sorgt für Sichtbarkeit bei Google.  
- Konsistenz = Glaubwürdigkeit.  

👉 Wer regelmäßig schreibt, baut eine Beziehung zu seiner Zielgruppe auf.
    `,
    image: "/images/blogvertrauen.jpg",
    prompt: "Laptop auf einem Tisch, geöffnet mit einem Blogartikel sichtbar, Person tippt konzentriert, warme Farbgebung",
  },
  {
    slug: "ki-kleine-unternehmen",
    title: "KI im Alltag: Chancen für kleine Unternehmen",
    description: "Wie KI Zeit spart und Wettbewerbsvorteile schafft.",
    content: `
Künstliche Intelligenz ist kein Luxus mehr, sondern Alltag:

- KI schreibt Texte, erstellt Bilder, analysiert Daten.  
- Kleine Unternehmen sparen Zeit und Geld.  
- Wer KI früh integriert, hat einen Wettbewerbsvorteil.  

👉 KI ist nicht die Zukunft – sie ist schon heute da.
    `,
    image: "/images/ki-unternehmen.jpg",
    prompt: "Mensch und humanoider Roboter geben sich die Hand, modernes Büro im Hintergrund, positive Stimmung, Zukunftstechnologie",
  },
];

// API Handler
export async function GET() {
  return NextResponse.json(posts);
}
