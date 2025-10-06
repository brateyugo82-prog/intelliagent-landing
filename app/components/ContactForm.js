"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const paketNamen = {
  starter: "Starter Paket",
  business: "Business Paket",
  premium: "Premium Paket",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [paket, setPaket] = useState("");

  useEffect(() => {
    const selected = searchParams.get("paket");
    if (selected && paketNamen[selected]) {
      setPaket(paketNamen[selected]); // 👈 voller Name statt "starter"
    }
  }, [searchParams]);

  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Dein Name"
        className="p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Deine E-Mail"
        className="p-3 border rounded"
        required
      />

      {/* vorausgefüllt mit Paket */}
      <input
        type="text"
        name="paket"
        value={paket}
        onChange={(e) => setPaket(e.target.value)}
        placeholder="Gewähltes Paket"
        className="p-3 border rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Deine Nachricht..."
        className="p-3 border rounded"
        rows="4"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Anfrage senden
      </button>
    </form>
  );
}
