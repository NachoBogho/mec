const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "¿Te pasa esto?", href: "/#problema" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Cómo trabajo", href: "/#metodo" },
  { label: "Servicios", href: "/#servicios" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/contact" },
];

const frameworkLinks = [
  { label: "MEC Framework", href: "/framework" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(43,43,43,0.07)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">

          {/* Brand column */}
          <div>
            {/* Logo placeholder */}
            <div className="mb-5">
              <a href="/" className="flex items-baseline gap-2" aria-label="MEC English Coach">
                <span className="font-serif text-2xl font-bold tracking-wider text-navy">MEC</span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-secondary">
                  English Coach
                </span>
              </a>
            </div>
            <p className="font-sans text-sm text-ink-secondary leading-relaxed max-w-xs">
              Coaching personalizado para profesionales que quieren hablar
              inglés con confianza, naturalidad y presencia.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/masterenglishcoach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-navy transition-colors duration-200"
                aria-label="Instagram de MEC English Coach"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://wa.me/541156576577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-teal transition-colors duration-200"
                aria-label="WhatsApp de MEC English Coach"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-5">
              Navegación
            </p>
            <nav aria-label="Links del footer">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3 border-t border-[rgba(43,43,43,0.07)]">
                  <a
                    href="/framework"
                    className="inline-flex items-center gap-2 font-sans text-sm text-teal hover:text-teal-dark transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                    MEC Framework
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-5">
              Contacto
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-ink-muted mb-1">
                  Email
                </p>
                <span className="font-sans text-sm text-ink-muted italic">
                  Próximamente
                </span>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-ink-muted mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/541156576577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-ink-secondary hover:text-teal transition-colors duration-200"
                >
                  +54 11 5657-6577
                </a>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-ink-muted mb-1">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/masterenglishcoach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-ink-secondary hover:text-navy transition-colors duration-200"
                >
                  @masterenglishcoach
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(43,43,43,0.07)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Gabriela Díaz &mdash; MEC English Coach. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-ink-muted">
            Diseño por{" "}
            <span className="text-ink-secondary">
              <a href="https://samdev-ai.com/">SAM-AI</a>
            </span>
            
          </p>
        </div>

      </div>
    </footer>
  );
}
