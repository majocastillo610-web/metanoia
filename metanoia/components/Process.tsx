const steps = [
  {
    num: "01",
    title: "Auditoría gratuita",
    description: "Analizamos tu presencia digital actual: redes, web, pauta y competencia. Sin costo, sin compromiso.",
    color: "bg-oliva",
  },
  {
    num: "02",
    title: "Estrategia personalizada",
    description: "Definimos en conjunto los objetivos, canales y tácticas. Cada cliente tiene una estrategia a medida.",
    color: "bg-rosa",
  },
  {
    num: "03",
    title: "Producción y ejecución",
    description: "Nuestro equipo crea el contenido, configura las campañas y ejecuta todo según el plan.",
    color: "bg-celeste",
  },
  {
    num: "04",
    title: "Optimización continua",
    description: "Monitoreamos, medimos y ajustamos en tiempo real. Los datos guían cada decisión.",
    color: "bg-arena",
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.num} className={`${s.color} rounded-2xl p-7`}>
              <span className={`font-serif font-bold text-4xl block mb-6 ${
                s.color === "bg-oliva" || s.color === "bg-rosa" ? "text-marfil/30" : "text-carbon/20"
              }`}>
                {s.num}
              </span>
              <h3 className={`font-serif font-bold text-xl mb-3 ${
                s.color === "bg-oliva" || s.color === "bg-rosa" ? "text-marfil" : "text-carbon"
              }`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed font-sans ${
                s.color === "bg-oliva" || s.color === "bg-rosa" ? "text-marfil/75" : "text-carbon/70"
              }`}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
