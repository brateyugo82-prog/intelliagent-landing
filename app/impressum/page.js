export default function ImpressumPage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <p className="mb-4">Angaben gemäß § 5 TMG:</p>
      <p>
        Mark Malenica  
        <br /> IntelliAgent  
        <br /> E-Mail: kontakt@intelliagent.de  
        <br /> Standort: Deutschland
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten verantwortlich. Für die Inhalte
        verlinkter Seiten übernehmen wir jedoch keine Haftung.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Urheberrecht</h2>
      <p>
        Die durch IntelliAgent erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
        Vervielfältigung oder Verwendung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.
      </p>

      <p className="mt-8">© {new Date().getFullYear()} IntelliAgent by Mark Malenica</p>
    </main>
  );
}
