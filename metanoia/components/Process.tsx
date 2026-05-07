const steps = [
  {
    num: "01",
    title: "Auditoría gratuita",
    description: "Analizamos tu presencia digital actual: redes, web, pauta y competencia. Sin costo, sin compromiso.",
    bg: "bg-oliva",
    textColor: "text-marfil",
    subColor: "text-marfil/75",
    numColor: "text-marfil/30",
  },
  {
    num: "02",
    title: "Estrategia personalizada",
    description: "Definimos en conjunto los objetivos, canales y tácticas. Cada cliente tiene una estrategia a medida.",
    bg: "bg-rosa",
    textColor: "text-marfil",
    subColor: "text-marfil/75",
    numColor: "text-marfil/30",
  },
  {
    num: "03",
    title: "Producción y ejecución",
    description: "Nuestro equipo crea el contenido, configura las campañas y ejecuta todo según el plan.",
    bg: "bg-arena",
    textColor: "text-carbon",
    subColor: "text-carbon/70",
    numColor: "text-carbon/20",
  },
  {
    num: "04",
    title: "Optimización continua",
    description: "Monitoreamos, medimos y ajustamos en tiempo real. Los datos guían cada decisión.",
    bg: "bg-hueso",
    textColor: "text-carbon",
    subColor: "text-carbon/70",
    numColor: "text-carbon/20",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6 bg-marfil">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Nuestro proceso</p>
            <h2 className="font-serif font-bold text-carbon text-4xl md:text-5xl leading-tight">
              Simple, claro y<br />orientado a resultados<span className="text-rosa">.</span>
            </h2>
          </div>
          <p className="text-piedra max-w-xs text-sm leading-relaxed font-sans">
            Un proceso estructurado que nos permite ser ágiles y mantener el foco en lo que más importa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {steps.map((s) => (
            <div key={s.num} className={`${s.bg} rounded-2xl p-7`}>
              <span className={`font-serif font-bold text-4xl block mb-6 ${s.numColor}`}>{s.num}</span>
              <h3 className={`font-serif font-bold text-xl mb-3 ${s.textColor}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed font-sans ${s.subColor}`}>{s.description}</p>
            </div>
          ))}
        </div>

        {/* Imagen de cierre cálida con personas */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 bg-arena">
          <img
            src="/foto3.jpg"
            alt="Equipo Metanoia trabajando juntos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-carbon/50 flex flex-col items-center justify-center text-center px-6">
            <p className="section-label text-marfil/60 mb-3">¿Listo para empezar?</p>
            <h3 className="font-serif font-bold text-marfil text-2xl md:text-4xl mb-6">
              El primer paso es gratis<span className="text-rosa">.</span>
            </h3>
            <a
              href="#auditoria"
              className="bg-marfil text-carbon font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-rosa hover:text-marfil transition-colors font-sans"
            >
              Solicitar auditoría gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
