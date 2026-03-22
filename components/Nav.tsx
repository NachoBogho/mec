"use client";

import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "¿Qué es?", href: "/#problema" },
    { label: "Cómo trabajo", href: "/#metodo" },
    { label: "Servicios", href: "/#servicios" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_0_0_rgba(43,43,43,0.08)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-baseline gap-2 group" aria-label="MEC English Coach — inicio">
          <span className="font-serif text-xl font-bold tracking-wider text-navy">
            MEC
          </span>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-secondary">
            Master English Coach
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.12em] uppercase text-ink-secondary hover:text-ink-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Framework link + CTA + hamburger */}
        <div className="flex items-center gap-5">

          {/* MEC Framework — visually distinct, targets educators */}
          <a
            href="/framework"
            className="hidden lg:inline-flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-teal hover:text-teal-dark transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
            MEC Framework
          </a>

          {/* CTA */}
          <a
            href="/#contacto"
            className="hidden sm:inline-flex items-center font-sans text-xs font-semibold tracking-[0.14em] uppercase px-5 py-2.5 border border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200"
          >
            Trial Session
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[rgba(43,43,43,0.07)]`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs tracking-[0.12em] uppercase text-ink-secondary hover:text-ink-primary py-3 border-b border-[rgba(43,43,43,0.06)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* MEC Framework — distinct treatment */}
          <a
            href="/framework"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-teal hover:text-teal-dark py-3 border-b border-[rgba(43,43,43,0.06)] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
            MEC Framework
          </a>

          <a
            href="/#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center font-sans text-xs font-semibold tracking-[0.14em] uppercase px-5 py-3 bg-navy text-white hover:bg-navy-dark transition-colors"
          >
            Sesión diagnóstica gratuita
          </a>
        </div>
      </div>
    </header>
  );
}
