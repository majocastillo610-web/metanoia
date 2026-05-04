const steps = [
  {
    number: "01",
    title: "Auditoría gratuita",
    description:
      "Analizamos tu presencia digital actual: redes sociales, web, pauta activa y competencia directa. Sin costo, sin compromiso.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "02",
    title: "Estrategia personalizada",
    description:
      "Definimos en conjunto los objetivos, canales y tácticas. Cada cliente tiene una estrategia a medida, no plantillas genéricas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Producción y ejecución",
    description:
      "Nuestro equipo crea el contenido, configura las campañas y ejecuta todo según el plan. Vos te enfocás en tu negocio.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "04",
    title: "Optimización continua",
    description:
      "Monitoreamos, medimos y ajustamos en tiempo real. Los datos guían cada decisión para maximizar el retorno de tu inversión.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Nuestro proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Simple, claro y{" "}
            <span className="gradient-text">orientado a resultados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trabajamos con un proceso estructurado que nos permite ser ágiles y mantener el foco en lo que más importa.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-green-500 via-violet-500 via-pink-500 to-cyan-500 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div
                  className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 text-white`}
                >
                  <div className="text-center">
                    {step.icon}
                    <div className="text-xs font-black mt-1 opacity-70">{step.number}</div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-violet-500/50 to-transparent mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
