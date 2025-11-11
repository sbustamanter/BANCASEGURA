"use client";

import { useState } from "react";

export default function FormRecommendation() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "¡Gracias! Revisa tu correo para ver las recomendaciones de seguridad.",
        });
        setFormData({ nombre: "", email: "" });
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
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
            placeholder="tu@email.com"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isLoading ? "Enviando..." : "Recibir Recomendaciones"}
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
