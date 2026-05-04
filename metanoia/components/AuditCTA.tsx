"use client";
import { useState } from "react";

export default function AuditCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="auditoria" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-violet-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% gratuito, sin compromiso
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Solicitá tu{" "}
            <span className="gradient-text">auditoría gratuita</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Completá el formulario y nos contactamos en menos de 24 horas con tu diagnóstico personalizado.
          </p>
        </div>

        <div className="bg-[#12121E] border border-[#1E1E30] rounded-3xl p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">¡Recibimos tu solicitud!</h3>
              <p className="text-gray-400">
                Nos ponemos en contacto con vos en menos de 24 horas con tu diagnóstico digital gratuito.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-[#0A0A12] border border-[#1E1E30] focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full bg-[#0A0A12] border border-[#1E1E30] focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Negocio o marca *</label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  placeholder="¿Cómo se llama tu negocio?"
                  className="w-full bg-[#0A0A12] border border-[#1E1E30] focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  ¿Cuál es tu principal desafío digital?
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Contanos brevemente en qué estás o qué querés mejorar..."
                  className="w-full bg-[#0A0A12] border border-[#1E1E30] focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold py-4 rounded-xl text-base hover:opacity-90 transition-opacity glow-purple"
              >
                Solicitar auditoría gratuita →
              </button>

              <p className="text-center text-gray-600 text-xs">
                Al enviar el formulario aceptás que nos pongamos en contacto con vos. Sin spam, prometido.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
