const reasons = [
  {
    title: "Comenzamos con un diagnóstico",
    description: "Antes de proponer cualquier solución, auditamos tu situación actual. Sin contexto no hay estrategia. Por eso la auditoría es gratis.",
  },
  {
    title: "Foco en resultados reales",
    description: "No trabajamos por vanity metrics. Cada acción está orientada a resultados que impactan en tu negocio: leads, ventas y reconocimiento.",
  },
  {
    title: "Equipo especializado",
    description: "Estrategas, diseñadores, redactores y media buyers trabajando de forma coordinada. Sin intermediarios ni tercerización.",
  },
  {
    title: "Transparencia total",
    description: "Accedés a reportes claros y reuniones de seguimiento. Siempre sabés qué está pasando con tu inversión.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="py-24 px-6 bg-hueso">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />

        <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 mb-16 bg-arena">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Equipo trabajando con entusiasmo"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-carbon/40 flex items-end p-8">
            <p className="font-serif italic text-marfil text-xl md:text-2xl max-w-lg">
              "Tu presencia digital no puede permanecer igual, sabés que necesita un cambio"
            </p>
          </div>
        </div>

        <div className="mb-12">
          <p className="section-label mb-3">Por qué elegirnos</p>
          <h2 className="font-serif font-bold text-carbon text-4xl md:text-5xl leading-tight">
            Razones concretas<span className="text-rosa">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-marfil rounded-xl p-6 border border-arena">
              <div className="flex items-start gap-4">
                <span className="font-serif font-bold text-rosa text-2xl leading-none mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-carbon text-lg mb-2">{r.title}</h3>
                  <p className="text-piedra text-sm leading-relaxed font-sans">{r.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
