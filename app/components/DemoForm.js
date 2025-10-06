"use client";
import { useState } from "react";

export default function DemoForm() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState(null);

  const runWorkflow = async () => {
    setLoading(true);
    setSteps(["Starte Workflow..."]);
    setResult(null);
    try {
      const res = await fetch("/api/workflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      if (!res.ok) throw new Error("Backend nicht erreichbar");
      const data = await res.json();
      // Schritte nacheinander anzeigen
      for (let i = 0; i < data.steps.length; i++) {
        await new Promise((r) => setTimeout(r, 800));
        setSteps((prev) => [...prev, data.steps[i]]);
      }
      setResult(data.output || "Fertiges Ergebnis ✅");
    } catch (err) {
      setSteps((prev) => [...prev, `❌ Fehler: ${err.message}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Gib dein Thema ein (z. B. Umzugstipps)"
        className="w-full p-3 rounded-lg text-gray-900 mb-4"
        disabled={loading}
      />
      <button
        onClick={runWorkflow}
        disabled={loading || !input}
        className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-500 text-white px-6 py-3 rounded-lg w-full"
      >
        {loading ? "Workflow läuft..." : "Workflow starten"}
      </button>
      <div className="mt-6 space-y-2 text-left">
        {steps.map((s, i) => (
          <p key={i} className="text-sm">
            {s}
          </p>
        ))}
      </div>
      {result && (
        <div className="mt-6 p-4 bg-green-700 rounded-lg">
          <h2 className="font-bold mb-2">🎉 Ergebnis:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
