export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#12121E] border border-[#1E1E30] rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-400 text-sm">Agencia Digital — Transformamos tu marca</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Tu negocio merece
          <br />
          <span className="gradient-text">crecer en digital</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          En <strong className="text-white">Metanoia</strong> transformamos tu presencia digital con estrategia real,
          contenido que conecta y pauta que convierte. Del punto A al punto{" "}
          <span className="text-violet-400 font-semibold">extraordinario</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity glow-purple"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Solicitar auditoría gratuita
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-[#12121E] border border-[#1E1E30] text-white font-semibold px-8 py-4 rounded-full text-base hover:border-violet-500 transition-colors"
          >
            Ver servicios
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Clientes activos" },
            { value: "3x", label: "ROI promedio" },
            { value: "Meta • Google • TikTok", label: "Plataformas de pauta" },
            { value: "360°", label: "Servicio integral" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#12121E] border border-[#1E1E30] rounded-2xl p-4">
              <div className="text-white font-black text-xl md:text-2xl mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
