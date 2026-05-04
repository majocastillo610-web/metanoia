const reasons = [
  {
    icon: "🎯",
    title: "Foco en resultados reales",
    description:
      "No trabajamos por vanity metrics. Cada acción está orientada a resultados que impactan en tu negocio: leads, ventas, comunidad y reconocimiento.",
  },
  {
    icon: "🔍",
    title: "Comenzamos con un diagnóstico",
    description:
      "Antes de proponer cualquier solución, auditamos tu situación actual. Sin contexto no hay estrategia. Por eso la auditoría es gratis.",
  },
  {
    icon: "⚡",
    title: "Equipo especializado",
    description:
      "Estrategas, diseñadores, redactores y media buyers trabajando de forma coordinada. Sin intermediarios ni tercerización.",
  },
  {
    icon: "📊",
    title: "Transparencia total",
    description:
      "Accedés a reportes claros, dashboard en tiempo real y reuniones de seguimiento. Siempre sabés qué está pasando con tu inversión.",
  },
  {
    icon: "🚀",
    title: "Escalamos con vos",
    description:
      "Nuestros servicios crecen con tu negocio. Empezás por donde podés y escalás hacia el servicio integral cuando estés listo.",
  },
  {
    icon: "🤝",
    title: "Relación a largo plazo",
    description:
      "No buscamos clientes de un mes. Construimos relaciones de confianza donde nos convertimos en tu equipo de marketing de cabecera.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Por qué elegirnos
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Metanoia significa{" "}
              <span className="gradient-text">transformación</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              El nombre no es casualidad. <strong className="text-white">Metanoia</strong> es el cambio profundo de
              perspectiva que te lleva a ver y hacer las cosas diferente. Eso es lo que generamos en la presencia
              digital de nuestros clientes.
            </p>
            <a
              href="#auditoria"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Empezar ahora — es gratis
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-[#12121E] border border-[#1E1E30] hover:border-violet-500/30 rounded-2xl p-5 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{r.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
