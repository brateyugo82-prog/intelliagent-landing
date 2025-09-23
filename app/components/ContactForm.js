"use client";

export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Danke! Deine Anfrage wurde gesendet 🚀");
      e.target.reset();
    } else {
      alert("❌ Fehler beim Senden, bitte versuche es erneut.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Dein Name"
        className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Deine E-Mail"
        className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="message"
        placeholder="Deine Nachricht"
        className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
      >
        Anfrage senden
      </button>
    </form>
  );
}
