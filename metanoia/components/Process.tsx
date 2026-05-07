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

        {/* Imagen de fondo decorativa */}
        <div className="relative rounded-2xl overflow-hidden mb-14 h-48 md:h-56">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
            alt="Espacio de trabajo Metanoia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-carbon/60 flex flex-col items-center justify-center text-center px-6">
            <p className="section-label text-marfil/60 mb-3">Nuestro proceso</p>
            <h2 className="font-serif font-bold text-marfil text-3xl md:text-5xl leading-tight">
              Simple, claro y orientado a resultados<span className="text-rosa">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.num} className={`${s.bg} rounded-2xl p-7`}>
              <span className={`font-serif font-bold text-4xl block mb-6 ${s.numColor}`}>
                {s.num}
              </span>
              <h3 className={`font-serif font-bold text-xl mb-3 ${s.textColor}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed font-sans ${s.subColor}`}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
