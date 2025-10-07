import AgentPageClient from "@/components/AgentPageClient";

export default function AgentPage({ params }) {
  const { slug } = params;

  if (!slug) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
        <p>❌ Kein gültiger Agent ausgewählt.</p>
      </main>
    );
  }

  return <AgentPageClient slug={slug} />;
}
