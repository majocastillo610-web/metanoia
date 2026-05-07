const values = [
  { dot: "bg-oliva", label: "Verdad" },
  { dot: "bg-rosa", label: "Integridad" },
  { dot: "bg-oliva", label: "Excelencia" },
  { dot: "bg-rosa", label: "Servicio" },
  { dot: "bg-oliva", label: "Resultados" },
];

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

        {/* Imagen de equipo full-width arriba */}
        <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 mb-16 bg-arena">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Equipo trabajando con entusiasmo"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-carbon/40 flex items-end p-8">
            <p className="font-serif italic text-marfil text-xl md:text-2xl max-w-lg">
              "Por sus frutos los conoceréis. Marketing que transforma, no que promete."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Por qué elegirnos</p>
            <h2 className="font-serif font-bold text-carbon text-4xl md:text-5xl leading-tight mb-6">
              Marketing que<br />transforma, no<br />que promete<span className="text-rosa">.</span>
            </h2>

            <p className="text-piedra leading-relaxed mb-8 font-sans">
              Del griego <em className="text-carbon font-medium">metánoia</em> — cambio profundo de mente y dirección. No un ajuste: una transformación real. Quien trabaja con Metanoia no queda igual.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                  <span className="text-sm font-medium text-carbon font-sans">{v.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#auditoria"
              className="inline-flex bg-carbon text-marfil font-semibold px-7 py-4 rounded-full text-sm hover:bg-oliva transition-colors font-sans"
            >
              Empezar con una auditoría gratuita →
            </a>
          </div>

          <div className="flex flex-col gap-4">
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
      </div>
    </section>
  );
}
