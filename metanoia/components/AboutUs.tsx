const values = ["Verdad", "Integridad", "Excelencia", "Compromiso", "Servicio"];
const dots = ["bg-oliva", "bg-rosa", "bg-oliva", "bg-rosa", "bg-oliva"];

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-24 px-6 bg-hueso">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Quiénes somos</p>
            <h2 className="font-serif font-bold text-carbon text-4xl md:text-5xl leading-tight mb-6">
              Somos Metanoia,<br />marketing con<br />propósito<span className="text-rosa">.</span>
            </h2>

            <p className="text-piedra leading-relaxed font-sans mb-8">
              Del griego <em className="text-carbon font-medium">metánoia</em> — cambio profundo de mente y dirección. No un ajuste, no algo superficial: una transformación real. Es lo que buscamos implementar en tu negocio. Acompañado de una visión estratégica enfocada en ventas y crecimiento sostenible.
            </p>

            <a
              href="#auditoria"
              className="inline-flex bg-carbon text-marfil font-semibold px-7 py-4 rounded-full text-sm hover:bg-oliva transition-colors font-sans"
            >
              Empezar con una auditoría gratuita →
            </a>
          </div>

          <div>
            <p className="section-label mb-6">Nuestros valores</p>
            <div className="flex flex-col gap-4">
              {values.map((v, i) => (
                <div key={v} className="flex items-center gap-4 bg-marfil rounded-xl px-6 py-4 border border-arena">
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dots[i]}`} />
                  <span className="font-serif font-bold text-carbon text-lg">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
