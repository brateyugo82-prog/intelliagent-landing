"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1e2f] flex flex-col items-center justify-center px-6 py-24 text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#111827]/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-800"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Kontakt aufnehmen
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Ihr Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Max Mustermann"
              className="w-full p-3 rounded-lg bg-[#0a0a0a]/70 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="max@unternehmen.de"
              className="w-full p-3 rounded-lg bg-[#0a0a0a]/70 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Ihre Nachricht
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Wie können wir helfen?"
              className="w-full p-3 rounded-lg bg-[#0a0a0a]/70 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none h-32"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              status === "success"
                ? "bg-green-600 hover:bg-green-700"
                : status === "error"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "loading"
              ? "Wird gesendet..."
              : status === "success"
              ? "✅ Nachricht gesendet!"
              : status === "error"
              ? "❌ Fehler beim Senden"
              : "Nachricht senden"}
          </motion.button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-8">
          Diese Nachricht wird automatisch über{" "}
          <span className="text-blue-400">IntelliAgent Solutions</span>{" "}
          verschickt. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </motion.div>
    </main>
  );
}
