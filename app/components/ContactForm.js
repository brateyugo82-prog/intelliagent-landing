"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const paketNamen = {
  starter: "Starter Paket",
  business: "Business Paket",
  premium: "Premium Paket",
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [paket, setPaket] = useState("");

  useEffect(() => {
  const selected = searchParams.get("paket");
  if (selected && paketNamen[selected]) {
    setPaket(paketNamen[selected]);
  } else if (selected) {
    // falls direkt mit ?paket=slug kommt, fallback auf raw slug
    setPaket(selected.charAt(0).toUpperCase() + selected.slice(1));
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
        placeholder="Deine Nachricht …"
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

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-gray-400">Lädt …</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
