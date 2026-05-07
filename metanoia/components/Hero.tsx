export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6 bg-marfil">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-6">Paraguay · Marketing Digital</p>

            <h1 className="font-serif font-bold text-carbon leading-[1.1] mb-6">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">La</span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">transformación</span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">que tu negocio</span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block text-oliva">
                necesita<span className="text-rosa">.</span>
              </span>
            </h1>

            <p className="text-piedra text-base md:text-lg leading-relaxed mb-4 font-sans">
              Transformamos tu presencia digital en oportunidades de ventas.
            </p>

            <p className="text-carbon font-serif text-lg md:text-xl italic mb-10">
              "Estrategia que conecta. Pauta que convierte."
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#auditoria"
                className="inline-flex items-center justify-center bg-carbon text-marfil font-semibold px-8 py-4 rounded-full text-sm hover:bg-oliva transition-colors"
              >
                Solicitar auditoría gratuita
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center border border-carbon text-carbon font-semibold px-8 py-4 rounded-full text-sm hover:bg-hueso transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Imagen principal con rostro cálido */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 bg-arena">
              <img
                src="/foto1.jpg"
                alt="Profesional de marketing digital"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "Marcas", desc: "Nuestro foco" },
                { val: "360°", desc: "Servicio integral" },
                { val: "Real", desc: "Resultados medibles" },
              ].map((s) => (
                <div key={s.desc} className="bg-hueso rounded-xl p-4 text-center">
                  <div className="font-serif font-bold text-carbon text-base md:text-lg mb-1">{s.val}</div>
                  <div className="text-piedra text-xs font-sans">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-rosa/15 border border-rosa/30 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rosa/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-rosa" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-carbon text-sm">Auditoría gratuita disponible</p>
                <p className="text-piedra text-xs mt-0.5">Sin costo · Sin compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
