"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#por-que", label: "Por qué Metanoia" },
    { href: "#proceso", label: "Proceso" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-marfil/95 backdrop-blur-sm border-b border-arena"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1">
          <span className="font-serif font-bold text-2xl text-carbon tracking-tight">
            Metanoia
          </span>
          <span className="font-serif font-bold text-2xl text-rosa">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-piedra hover:text-carbon transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#auditoria"
          className="hidden md:inline-flex items-center bg-carbon text-marfil text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-oliva transition-colors"
        >
          Auditoría gratuita
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-carbon p-1"
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-marfil border-b border-arena px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-carbon text-sm font-medium py-1 border-b border-hueso"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#auditoria"
            onClick={() => setMenuOpen(false)}
            className="bg-carbon text-marfil text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
          >
            Auditoría gratuita
          </a>
        </div>
      )}
    </header>
  );
}
