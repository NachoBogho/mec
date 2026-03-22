"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Necesito tener un nivel avanzado para empezar?",
    answer:
      "No. Mi trabajo está diseñado para profesionales que ya comprenden inglés con facilidad — lo leen, lo escuchan, lo entienden — pero se bloquean al hablar. Si podés leer este texto en inglés sin dificultad, tenés el nivel que necesitás. El trabajo es activar lo que ya está ahí, no construir desde cero.",
  },
  {
    question: "¿En qué se diferencia de las clases de inglés tradicionales?",
    answer:
      "Las clases tradicionales enseñan el idioma. El coaching trabaja tu relación con el idioma. En vez de gramática y vocabulario, trabajamos en tus bloqueos específicos, en cómo proyectás presencia cuando hablás, y en la confianza para hacerlo aunque no sea perfecto. Es un proceso personalizado, no un programa estándar.",
  },
  {
    question: "¿Las sesiones son en inglés o en español?",
    answer:
      "La mayoría del trabajo práctico es en inglés, porque el objetivo es que hables. Pero el coaching, la reflexión y el trabajo sobre bloqueos lo hacemos en el idioma en el que te sentís más cómodo/a. El contexto inicial diagnóstico y las conversaciones de seguimiento pueden ser en español cuando lo necesités.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende de tus objetivos y punto de partida. El programa Unlock Your English Voice tiene una duración definida de 4 a 6 semanas. El Coaching 1:1 Premium es flexible y lo adaptamos a tus necesidades. Lo definimos juntos en la sesión diagnóstica gratuita.",
  },
  {
    question: "¿Cómo agendo mi primera sesión?",
    answer:
      "Escribime directo por WhatsApp o completá el formulario de contacto al pie de esta página. La primera sesión diagnóstica es gratuita, sin compromiso. En esa primera conversación entendemos tu situación, definimos tus objetivos y evaluamos si hay un buen match para trabajar juntos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-beige">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">
          <div>
            <p className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
              Preguntas frecuentes
            </p>
            <h2
              className="animate-on-scroll font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-ink-primary leading-[1.12] max-w-lg"
              style={{ transitionDelay: "100ms" }}
            >
              Todo lo que querés saber antes de empezar.
            </h2>
          </div>
          <p
            className="animate-on-scroll font-sans text-sm text-ink-secondary max-w-xs"
            style={{ transitionDelay: "180ms" }}
          >
            ¿No encontrás tu pregunta?{" "}
            <a href="/#contacto" className="text-navy underline underline-offset-2 hover:text-navy-dark transition-colors">
              Escribime directamente.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[rgba(43,43,43,0.09)] border-t border-b border-[rgba(43,43,43,0.09)]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[0.95rem] sm:text-base font-medium text-ink-primary group-hover:text-navy transition-colors leading-relaxed">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 mt-0.5 w-5 h-5 border border-[rgba(43,43,43,0.2)] flex items-center justify-center transition-all duration-200 ${
                      isOpen ? "bg-navy border-navy" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M5 1v8M1 5h8"
                        stroke={isOpen ? "#ffffff" : "#53565A"}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-80 pb-7" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-[0.9rem] text-ink-secondary leading-[1.8] max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
