const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    tag: "Gratis",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
    title: "Auditoría Gratuita",
    description:
      "Analizamos tu presencia digital actual: redes, web, pauta y competencia. Obtenés un diagnóstico honesto con oportunidades concretas.",
    highlight: true,
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20 hover:border-green-500/40",
    iconBg: "bg-green-500/20 text-green-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tag: "Estrategia",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    title: "Consultoría Digital",
    description:
      "Sesiones estratégicas one-on-one para definir tu hoja de ruta digital: posicionamiento, canales, audiencias y modelo de crecimiento.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    iconBg: "bg-violet-500/20 text-violet-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tag: "Contenido",
    tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    title: "Packs de Contenido",
    description:
      "Creamos el contenido que tu marca necesita: posts, reels, stories, copy y diseño. Todo planificado, producido y listo para publicar.",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20 hover:border-pink-500/40",
    iconBg: "bg-pink-500/20 text-pink-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: "Ads",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    title: "Pauta Digital",
    description:
      "Campañas en Meta Ads, Google Ads y TikTok Ads optimizadas para maximizar tu retorno. Segmentación precisa, creatividades que convierten y reportes claros.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/20 text-cyan-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    tag: "Todo incluido",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Servicio Integral",
    description:
      "Estrategia + Contenido + Pauta en un solo equipo. Tu marca en manos de especialistas que trabajan de forma coordinada para lograr resultados medibles.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
    iconBg: "bg-amber-500/20 text-amber-400",
    wide: true,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Todo lo que tu marca necesita
            <br />
            <span className="gradient-text">en un solo lugar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde el diagnóstico hasta la ejecución. Elegís el servicio que más se adapta a tu momento o apostás por el
            crecimiento completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative bg-gradient-to-br ${s.color} bg-[#12121E] border ${s.border} rounded-2xl p-7 transition-all duration-300 group cursor-default ${
                s.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-xl">{s.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              </div>

              {s.highlight && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-black text-xs font-black px-3 py-1 rounded-full">
                  GRATIS
                </div>
              )}

              {s.wide && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Estrategia", "Contenido", "Meta Ads", "Google Ads", "TikTok Ads", "Reportes"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
