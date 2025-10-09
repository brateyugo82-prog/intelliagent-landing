import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [paket, setPaket] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, paket }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setName("");
        setEmail("");
        setMessage("");
        setPaket("");
      } else {
        setError(data.error || "Fehler beim Senden.");
      }
    } catch (err) {
      setError("Serverfehler. Bitte versuche es später erneut.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-lg border"
        required
      />
      <input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 rounded-lg border"
        required
      />
      <textarea
        placeholder="Nachricht"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 rounded-lg border"
        rows={5}
        required
      />
      <select
        value={paket}
        onChange={(e) => setPaket(e.target.value)}
        className="w-full p-3 rounded-lg border"
      >
        <option value="">Paket wählen (optional)</option>
        <option value="Starter">Starter</option>
        <option value="Business">Business</option>
        <option value="Premium">Premium</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
      >
        {loading ? "Senden..." : "Absenden"}
      </button>
      {success && <div className="text-green-600 mt-2">{success}</div>}
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </form>
  );
}
