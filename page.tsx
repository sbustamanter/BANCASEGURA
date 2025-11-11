"use client";

import Link from "next/link";
import { useState } from "react";
import FraudSelectionForm from "@/components/FraudSelectionForm";

export default function FraudesPage() {
  const [selectedFrauds, setSelectedFrauds] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-6 sm:py-8 md:py-12 shadow-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4">
            🚨 Sistema de Detección de Fraudes
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-orange-100 max-w-3xl mx-auto px-4">
            Protección inteligente contra amenazas bancarias
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 py-4">
            <Link 
              href="/" 
              className="px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors text-center"
            >
              Inicio
            </Link>
            <Link 
              href="/fraudes" 
              className="px-4 py-2 text-blue-600 font-semibold border-b-2 border-blue-600 hover:bg-blue-50 transition-colors text-center"
            >
              Detección de Fraudes
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Dashboard Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
            📊 Estadísticas en Tiempo Real
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">98.7%</div>
              <p className="text-slate-600 text-sm sm:text-base">Tasa de Detección</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{'<1s'}</div>
              <p className="text-slate-600 text-sm sm:text-base">Tiempo de Respuesta</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-slate-600 text-sm sm:text-base">Monitoreo Continuo</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">5M+</div>
              <p className="text-slate-600 text-sm sm:text-base">Transacciones/Día</p>
            </div>
          </div>
        </section>

        {/* Fraud Types Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
              🎯 Tipos de Fraudes Detectables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎣</div>
                <h3 className="font-bold text-slate-800 mb-2">Phishing</h3>
                <p className="text-sm text-slate-600">Correos y sitios fraudulentos</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">💳</div>
                <h3 className="font-bold text-slate-800 mb-2">Tarjetas</h3>
                <p className="text-sm text-slate-600">Clonación y uso no autorizado</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-slate-800 mb-2">Telefónicas</h3>
                <p className="text-sm text-slate-600">Llamadas de suplantación</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🆔</div>
                <h3 className="font-bold text-slate-800 mb-2">Identidad</h3>
                <p className="text-sm text-slate-600">Robo de datos personales</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🦠</div>
                <h3 className="font-bold text-slate-800 mb-2">Malware</h3>
                <p className="text-sm text-slate-600">Software malicioso bancario</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="font-bold text-slate-800 mb-2">Social</h3>
                <p className="text-sm text-slate-600">Ingeniería social</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🏧</div>
                <h3 className="font-bold text-slate-800 mb-2">Cajeros</h3>
                <p className="text-sm text-slate-600">Skimming y fraudes ATM</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-bold text-slate-800 mb-2">Inversión</h3>
                <p className="text-sm text-slate-600">Estafas de inversión</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Detection Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              🤖 Cómo Funciona la IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-center">Análisis</h3>
                <p className="text-blue-50 text-center">
                  Examina millones de transacciones en tiempo real buscando patrones anómalos
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-center">Detección</h3>
                <p className="text-blue-50 text-center">
                  Identifica actividades sospechosas con precisión del 98.7% en menos de 1 segundo
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4 text-center">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-center">Protección</h3>
                <p className="text-blue-50 text-center">
                  Bloquea transacciones fraudulentas y alerta al usuario inmediatamente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fraud Selection Form */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 text-center">
              📧 Recibe Información Personalizada
            </h2>
            <p className="text-base sm:text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Selecciona los tipos de fraude sobre los que deseas recibir información detallada
            </p>
            <FraudSelectionForm 
              selectedFrauds={selectedFrauds}
              setSelectedFrauds={setSelectedFrauds}
            />
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              💡 Consejos de Prevención
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">✅ Sí Hacer</h3>
                <ul className="space-y-2 text-green-50">
                  <li>• Verificar URLs antes de ingresar datos</li>
                  <li>• Usar autenticación de dos factores</li>
                  <li>• Mantener software actualizado</li>
                  <li>• Revisar estados de cuenta regularmente</li>
                  <li>• Usar contraseñas únicas y fuertes</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">❌ No Hacer</h3>
                <ul className="space-y-2 text-green-50">
                  <li>• Compartir contraseñas o PINs</li>
                  <li>• Hacer clic en enlaces sospechosos</li>
                  <li>• Usar WiFi público para banca</li>
                  <li>• Ignorar alertas de seguridad</li>
                  <li>• Guardar contraseñas en navegadores</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg mb-4">
            🛡️ Sistema de Detección de Fraudes
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Protección bancaria impulsada por Inteligencia Artificial
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-4">
            © 2024 - Proyecto Educativo de Ciberseguridad
          </p>
        </div>
      </footer>
    </div>
  );
}
