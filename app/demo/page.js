import DemoForm from "../components/DemoForm";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          🚀 Teste die IntelliAgent Demo
        </h1>
        <p className="text-lg mb-8 text-center">
          Probiere selbst aus, wie unsere Agenten Content erstellen, Designs
          generieren und veröffentlichen.
        </p>
        <DemoForm />
      </div>
    </main>
  );
}
