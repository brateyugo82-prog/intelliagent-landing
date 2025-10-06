"use client";
import { useState } from "react";

export default function DemoContent() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  function handleDemo(e) {
    e.preventDefault();
    setResult(
      `✨ Dein Artikel zum Thema "${topic}":
      
1. Klare Struktur wählen  
2. Leser direkt ansprechen  
3. SEO-Keywords nutzen`
    );
  }

  return (
    <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-4">Demo ausprobieren</h3>
      <form onSubmit={handleDemo} className="flex gap-3">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Gib ein Thema ein..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300"
        />
        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
        >
          Generieren
        </button>
      </form>
      {result && (
        <div className="mt-6 bg-white p-6 rounded-xl border text-gray-800 whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
}
