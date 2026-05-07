const services = [
  {
    num: "01",
    tag: "Gratis",
    title: "Auditoría Gratuita",
    description:
      "Antes de proponer cualquier cosa, miramos lo que tenés. Analizamos tus redes, web, pauta activa y competencia. Te entregamos un diagnóstico honesto. Sin costo, sin compromiso.",
    bg: "bg-oliva",
    textColor: "text-marfil",
    subTextColor: "text-marfil/75",
    numColor: "text-marfil/30",
    tagBg: "bg-marfil/20 text-marfil",
    highlight: true,
  },
  {
    num: "02",
    tag: "Estrategia",
    title: "Consultoría Digital",
    description:
      "Para quienes quieren entender antes de ejecutar. Definimos juntos la estrategia: qué canales usar, a quién hablarle y cómo posicionarte.",
    bg: "bg-hueso",
    textColor: "text-carbon",
    subTextColor: "text-piedra",
    numColor: "text-carbon/20",
    tagBg: "bg-carbon/10 text-carbon",
  },
  {
    num: "03",
    tag: "Contenido",
    title: "Packs de Contenido",
    description:
      "Creamos el contenido de tu marca: posts, reels, stories, copy y diseño. Planificado, producido y listo para publicar.",
    bg: "bg-hueso",
    textColor: "text-carbon",
    subTextColor: "text-piedra",
    numColor: "text-carbon/20",
    tagBg: "bg-carbon/10 text-carbon",
  },
  {
    num: "04",
    tag: "Pauta",
    title: "Pauta Digital",
    description:
      "Campañas en Meta Ads, Google Ads y TikTok Ads. Segmentación precisa, creatividades que funcionan y reportes que podés entender.",
    bg: "bg-arena",
    textColor: "text-carbon",
    subTextColor: "text-carbon/70",
    numColor: "text-carbon/20",
    tagBg: "bg-carbon/10 text-carbon",
    platforms: ["Meta", "Google", "TikTok"],
  },
  {
    num: "05",
    tag: "Todo incluido",
    title: "Servicio Integral",
    description:
      "Estrategia + Contenido + Pauta bajo el mismo techo. Para quienes quieren delegar el marketing sin perder el control.",
    bg: "bg-carbon",
    textColor: "text-marfil",
    subTextColor: "text-marfil/70",
    numColor: "text-marfil/20",
    tagBg: "bg-rosa text-marfil",
    wide: true,
    tags: ["Estrategia", "Contenido", "Meta Ads", "Google Ads", "TikTok Ads", "Reportes mensuales"],
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
              className={`rounded-2xl p-7 ${s.bg} ${s.wide ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className={`font-serif font-bold text-4xl ${s.numColor}`}>{s.num}</span>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${s.tagBg}`}>
                  {s.tag}
                </span>
              </div>

              <h3 className={`font-serif font-bold text-2xl mb-3 ${s.textColor}`}>{s.title}</h3>

              <p className={`text-sm leading-relaxed font-sans ${s.subTextColor}`}>{s.description}</p>

              {s.platforms && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.platforms.map((p) => (
                    <span key={p} className="text-xs font-semibold bg-carbon/10 text-carbon px-3 py-1.5 rounded-full">
                      {p} Ads
                    </span>
                  ))}
                </div>
              )}

              {s.tags && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
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
