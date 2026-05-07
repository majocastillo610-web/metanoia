"use client";
import { useState } from "react";

export default function AuditCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Metanoia! 👋 Me interesa la auditoría gratuita.

*Nombre:* ${form.name}
*Email:* ${form.email}
*Negocio:* ${form.business}
*Desafío principal:* ${form.message || "No especificado"}`;

    const url = `https://wa.me/595992621934?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="auditoria" className="py-24 px-6 bg-carbon">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label text-marfil/40 mb-3">Auditoría gratuita</p>
          <h2 className="font-serif font-bold text-marfil text-4xl md:text-5xl leading-tight mb-4">
            El primer paso es gratis<span className="text-rosa">.</span>
          </h2>
          <p className="text-marfil/60 font-sans leading-relaxed">
            Completá el formulario y nos contactamos en menos de 24 horas con tu diagnóstico personalizado.
          </p>
        </div>

        <div className="bg-marfil/5 border border-marfil/10 rounded-2xl p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-rosa/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-rosa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-marfil text-2xl mb-2">Recibimos tu solicitud</h3>
              <p className="text-marfil/60 font-sans text-sm">
                Nos ponemos en contacto en menos de 24 horas con tu diagnóstico digital gratuito.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-marfil/60 text-xs font-medium mb-2 tracking-wide uppercase font-sans">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-marfil/8 border border-marfil/15 focus:border-rosa text-marfil placeholder-marfil/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors font-sans"
                    style={{ backgroundColor: "rgba(243,238,230,0.06)" }}
                  />
                </div>
                <div>
                  <label className="block text-marfil/60 text-xs font-medium mb-2 tracking-wide uppercase font-sans">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full border border-marfil/15 focus:border-rosa text-marfil placeholder-marfil/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors font-sans"
                    style={{ backgroundColor: "rgba(243,238,230,0.06)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-marfil/60 text-xs font-medium mb-2 tracking-wide uppercase font-sans">
                  Negocio o marca *
                </label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  placeholder="¿Cómo se llama tu negocio?"
                  className="w-full border border-marfil/15 focus:border-rosa text-marfil placeholder-marfil/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors font-sans"
                  style={{ backgroundColor: "rgba(243,238,230,0.06)" }}
                />
              </div>

              <div>
                <label className="block text-marfil/60 text-xs font-medium mb-2 tracking-wide uppercase font-sans">
                  ¿Cuál es tu principal desafío?
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Contanos brevemente qué querés mejorar..."
                  className="w-full border border-marfil/15 focus:border-rosa text-marfil placeholder-marfil/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none font-sans"
                  style={{ backgroundColor: "rgba(243,238,230,0.06)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rosa hover:bg-rosa/90 text-marfil font-semibold py-4 rounded-full text-sm transition-colors font-sans"
              >
                Solicitar auditoría gratuita →
              </button>

              <p className="text-center text-marfil/30 text-xs font-sans">
                Sin spam, prometido. Solo te contactamos para ayudarte.
              </p>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-marfil/40 text-sm font-sans">¿Preferís hablar directo?</p>
          <a
            href="https://wa.me/595992621934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-marfil/70 hover:text-marfil text-sm font-medium transition-colors font-sans"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
