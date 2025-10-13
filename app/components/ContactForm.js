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

  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (paketParam && PAKETE.some((p) => p.id === paketParam)) {
      setForm((prev) => ({ ...prev, paket: paketParam }));
    }
  }, [paketParam]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "📨 Wird gesendet..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      console.log("📬 Response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (res.ok && data.success) {
        setStatus({ state: "success", message: "✅ Nachricht erfolgreich gesendet!" });
        setForm({ name: "", email: "", message: "", paket: "starter" });
      } else {
        console.error("❌ Fehler:", data);
        setStatus({
          state: "error",
          message: "❌ Senden fehlgeschlagen. Bitte erneut versuchen.",
        });
      }
    } catch (err) {
      console.error("❌ Netzwerkfehler:", err);
      setStatus({ state: "error", message: "❌ Netzwerkfehler beim Senden." });
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
            const activeClasses =
              p.color === "blue"
                ? "bg-blue-600 border-blue-700 text-white"
                : p.color === "purple"
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
                      ? p.color === "yellow"
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
        disabled={status.state === "loading"}
        className={`px-6 py-3 rounded font-semibold w-full transition ${
          status.state === "loading"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {status.state === "loading" ? "Wird gesendet..." : "Nachricht senden 🚀"}
      </button>

      {/* Status */}
      {status.message && (
        <p
          className={`text-sm mt-2 text-center ${
            status.state === "success"
              ? "text-green-600"
              : status.state === "error"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
