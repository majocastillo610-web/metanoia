export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-carbon border-t border-marfil/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <div className="flex items-baseline gap-0.5 mb-1">
              <span className="font-serif font-bold text-2xl text-marfil">Metanoia</span>
              <span className="font-serif font-bold text-2xl text-rosa">.</span>
            </div>
            <p className="section-label text-marfil/30">Marketing con propósito</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#por-que", label: "Por qué Metanoia" },
              { href: "#proceso", label: "Proceso" },
              { href: "#auditoria", label: "Auditoría gratuita" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-marfil/40 hover:text-marfil text-sm transition-colors font-sans"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/metanoia.py"
              target="_blank"
              rel="noopener noreferrer"
              className="text-marfil/40 hover:text-rosa transition-colors text-sm font-sans"
            >
              @metanoia.py
            </a>
            <a
              href="https://wa.me/595992621934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-marfil/40 hover:text-rosa transition-colors text-sm font-sans"
            >
              0992 621 934
            </a>
          </div>
        </div>

        <div className="border-t border-marfil/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-marfil/25 text-xs font-sans">
            © {year} Metanoia. Todos los derechos reservados. Paraguay.
          </p>
          <p className="text-marfil/25 text-xs font-sans italic font-serif">
            "La transformación que tu negocio necesitaba."
          </p>
        </div>
      </div>
    </footer>
  );
}
