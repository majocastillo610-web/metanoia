const services = [
  {
    num: "01",
    tag: "Gratis",
    title: "Auditoría Gratuita",
    description:
      "Analizamos tu presencia digital actual: redes, web, pauta activa y competencia directa. Te entregamos un diagnóstico honesto con oportunidades concretas. Sin costo, sin compromiso.",
    accent: "bg-oliva text-marfil",
    highlight: true,
  },
  {
    num: "02",
    tag: "Estrategia",
    title: "Consultoría Digital",
    description:
      "Sesiones estratégicas para definir tu hoja de ruta digital: posicionamiento, canales, audiencias y modelo de crecimiento. Para quien quiere entender antes de ejecutar.",
    accent: "bg-rosa/20 text-carbon",
  },
  {
    num: "03",
    tag: "Contenido",
    title: "Packs de Contenido",
    description:
      "Creamos el contenido que tu marca necesita: posts, reels, stories, copy y diseño. Planificado, producido y listo para publicar. Vos te enfocás en tu negocio.",
    accent: "bg-celeste/20 text-carbon",
  },
  {
    num: "04",
    tag: "Pauta",
    title: "Pauta Digital",
    description:
      "Campañas en Meta Ads, Google Ads y TikTok Ads optimizadas para maximizar tu retorno. Segmentación precisa, creatividades que convierten y reportes claros.",
    accent: "bg-arena/60 text-carbon",
    platforms: ["Meta", "Google", "TikTok"],
  },
  {
    num: "05",
    tag: "Todo incluido",
    title: "Servicio Integral",
    description:
      "Estrategia + Contenido + Pauta en un solo equipo. Tu marca en manos de especialistas que trabajan de forma coordinada. El camino más directo a resultados reales y medibles.",
    accent: "bg-carbon text-marfil",
    wide: true,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-marfil">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">Servicios</p>
            <h2 className="font-serif font-bold text-carbon text-4xl md:text-5xl leading-tight">
              Todo lo que tu marca<br />necesita<span className="text-rosa">.</span>
            </h2>
          </div>
          <p className="text-piedra max-w-xs text-sm leading-relaxed font-sans">
            Desde el diagnóstico hasta la ejecución. Elegís el servicio que más se adapta a tu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-7 ${s.highlight ? "bg-oliva" : "bg-hueso"} ${
                s.wide ? "md:col-span-2" : ""
              } ${s.num === "05" ? "bg-carbon" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className={`font-serif font-bold text-4xl ${
                  s.num === "05" ? "text-marfil/30" : s.highlight ? "text-marfil/40" : "text-carbon/20"
                }`}>
                  {s.num}
                </span>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  s.num === "05"
                    ? "bg-rosa text-marfil"
                    : s.highlight
                    ? "bg-marfil/20 text-marfil"
                    : "bg-carbon/10 text-carbon"
                }`}>
                  {s.tag}
                </span>
              </div>

              <h3 className={`font-serif font-bold text-2xl mb-3 ${
                s.num === "05" || s.highlight ? "text-marfil" : "text-carbon"
              }`}>
                {s.title}
              </h3>

              <p className={`text-sm leading-relaxed font-sans ${
                s.num === "05" ? "text-marfil/70" : s.highlight ? "text-marfil/80" : "text-piedra"
              }`}>
                {s.description}
              </p>

              {s.platforms && (
                <div className="flex gap-2 mt-5">
                  {s.platforms.map((p) => (
                    <span key={p} className="text-xs font-semibold bg-carbon/10 text-carbon px-3 py-1.5 rounded-full">
                      {p} Ads
                    </span>
                  ))}
                </div>
              )}

              {s.wide && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Estrategia", "Contenido", "Meta Ads", "Google Ads", "TikTok Ads", "Reportes mensuales"].map((t) => (
                    <span key={t} className="text-xs font-medium bg-marfil/10 text-marfil/80 border border-marfil/20 px-3 py-1 rounded-full">
                      {t}
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
