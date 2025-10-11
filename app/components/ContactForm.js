"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PAKETE = [
  { id: "starter", name: "Starter", price: "249 € / Monat", color: "blue" },
  { id: "business", name: "Business", price: "799 € / Monat", color: "blue" },
  { id: "professional", name: "Professional", price: "1 999 € / Monat", color: "purple" },
  { id: "enterprise", name: "Enterprise", price: "ab 3 999 € / Monat", color: "yellow" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const paketParam = searchParams.get("paket");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    paket: "starter",
  });

  const [status, setStatus] = useState("");

  // 🧩 Wenn "?paket=..." in der URL steht → automatisch vorauswählen
  useEffect(() => {
    if (paketParam && PAKETE.some((p) => p.id === paketParam)) {
      setForm((prev) => ({ ...prev, paket: paketParam }));
    }
  }, [paketParam]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("📨 Wird gesendet...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ Nachricht erfolgreich gesendet!");
        setForm({ name: "", email: "", message: "", paket: "starter" });
      } else {
        setStatus("❌ Fehler beim Senden: " + (data.error || "unbekannt"));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Netzwerkfehler.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-8 rounded-3xl shadow-xl space-y-6 text-gray-900"
    >
      {/* 📦 Paket-Auswahl */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Wähle dein Paket:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PAKETE.map((p) => {
            const isActive = form.paket === p.id;
            const color =
              p.color === "blue"
                ? "blue"
                : p.color === "purple"
                ? "purple"
                : "yellow";

            const activeClasses =
              color === "blue"
                ? "bg-blue-600 border-blue-700 text-white"
                : color === "purple"
                ? "bg-purple-600 border-purple-700 text-white"
                : "bg-yellow-500 border-yellow-600 text-black";

            const inactiveClasses =
              "bg-white text-gray-800 border-gray-300 hover:border-gray-400";

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setForm({ ...form, paket: p.id })}
                className={`border rounded-xl px-3 py-2 text-sm font-medium transition-all shadow-sm ${
                  isActive ? `${activeClasses} scale-105` : inactiveClasses
                }`}
              >
                {p.name}
                <div
                  className={`text-xs mt-1 ${
                    isActive
                      ? color === "yellow"
                        ? "text-black/80"
                        : "text-white/80"
                      : "text-gray-600"
                  }`}
                >
                  {p.price}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-3 border rounded"
        required
      />

      {/* E-Mail */}
      <input
        type="email"
        placeholder="E-Mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-3 border rounded"
        required
      />

      {/* Nachricht */}
      <textarea
        placeholder="Nachricht"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows="4"
        className="w-full p-3 border rounded"
        required
      />

      {/* Senden */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition w-full"
      >
        Nachricht senden 🚀
      </button>

      {/* Statusanzeige */}
      {status && (
        <p
          className={`text-sm mt-2 ${
            status.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
