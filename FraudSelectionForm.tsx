"use client";

import { useState } from "react";

interface FraudSelectionFormProps {
  selectedFrauds: string[];
  setSelectedFrauds: (frauds: string[]) => void;
}

export default function FraudSelectionForm({ selectedFrauds, setSelectedFrauds }: FraudSelectionFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fraudTypes = [
    { id: "phishing", label: "🎣 Phishing Bancario", description: "Correos y sitios fraudulentos" },
    { id: "cards", label: "💳 Fraude con Tarjetas", description: "Clonación y uso no autorizado" },
    { id: "phone", label: "📞 Estafas Telefónicas", description: "Llamadas de suplantación" },
    { id: "identity", label: "🆔 Robo de Identidad", description: "Robo de datos personales" },
    { id: "malware", label: "🦠 Malware Bancario", description: "Software malicioso" },
    { id: "social", label: "🎭 Ingeniería Social", description: "Manipulación psicológica" },
    { id: "atm", label: "🏧 Fraudes en Cajeros", description: "Skimming y fraudes ATM" },
    { id: "investment", label: "📈 Estafas de Inversión", description: "Esquemas Ponzi y fraudes" },
  ];

  const toggleFraud = (fraudId: string) => {
    if (selectedFrauds.includes(fraudId)) {
      setSelectedFrauds(selectedFrauds.filter((id) => id !== fraudId));
    } else {
      setSelectedFrauds([...selectedFrauds, fraudId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedFrauds.length === 0) {
      setMessage({
        type: "error",
        text: "Por favor, selecciona al menos un tipo de fraude.",
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          fraudTypes: selectedFrauds,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: `¡Gracias! Revisa tu correo para ver información sobre ${selectedFrauds.length} tipo(s) de fraude seleccionado(s).`,
        });
        setFormData({ nombre: "", email: "" });
        setSelectedFrauds([]);
      } else {
        setMessage({
          type: "error",
          text: data.error || "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Error de conexión. Por favor, verifica tu conexión a internet.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Fraud Type Selection */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Selecciona los tipos de fraude ({selectedFrauds.length} seleccionados)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {fraudTypes.map((fraud) => (
              <button
                key={fraud.id}
                type="button"
                onClick={() => toggleFraud(fraud.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFrauds.includes(fraud.id)
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow"
                }`}
              >
                <div className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">
                  {fraud.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">{fraud.description}</div>
                {selectedFrauds.includes(fraud.id) && (
                  <div className="mt-2 text-blue-600 font-semibold text-xs sm:text-sm">✓ Seleccionado</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre-fraud" className="block text-sm font-medium text-slate-700 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre-fraud"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email-fraud" className="block text-sm font-medium text-slate-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email-fraud"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || selectedFrauds.length === 0}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isLoading ? "Enviando..." : `Recibir Información (${selectedFrauds.length} seleccionados)`}
        </button>
      </form>

      {message && (
        <div
          className={`mt-6 p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-medium">{message.text}</p>
        </div>
      )}
    </div>
  );
}
