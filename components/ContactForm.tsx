"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  challenge: string;
  source: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  challenge: "",
  source: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-12">
        <div className="w-10 h-10 border-2 border-teal flex items-center justify-center flex-shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 9.5l4 4 7-8"
              stroke="#004B49"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="font-serif text-2xl text-ink-primary mb-2">
            ¡Listo! Revisá tu email.
          </p>
          <p className="font-sans text-sm text-ink-secondary leading-relaxed">
            Te mandé un mail con información sobre las clases. Gabriela se
            comunica con vos en menos de 24 horas.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          className="font-sans text-xs text-ink-secondary hover:text-ink-primary underline underline-offset-2 transition-colors"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-sans text-[11px] tracking-[0.16em] uppercase text-ink-secondary"
        >
          Nombre completo{" "}
          <span className="text-ink-muted font-normal normal-case tracking-normal">
            (opcional)
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Tu nombre"
          className="bg-beige-xlight border border-beige-dark focus:border-navy focus:bg-white outline-none font-sans text-sm text-ink-primary placeholder:text-ink-muted px-4 py-3.5 transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-sans text-[11px] tracking-[0.16em] uppercase text-ink-secondary"
        >
          Email <span className="text-teal" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="tu@email.com"
          className="bg-beige-xlight border border-beige-dark focus:border-navy focus:bg-white outline-none font-sans text-sm text-ink-primary placeholder:text-ink-muted px-4 py-3.5 transition-colors duration-200"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="font-sans text-[11px] tracking-[0.16em] uppercase text-ink-secondary"
        >
          Celular <span className="text-teal" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
          placeholder="+54 11 1234-5678"
          className="bg-beige-xlight border border-beige-dark focus:border-navy focus:bg-white outline-none font-sans text-sm text-ink-primary placeholder:text-ink-muted px-4 py-3.5 transition-colors duration-200"
        />
      </div>

      {/* Challenge */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="challenge"
          className="font-sans text-[11px] tracking-[0.16em] uppercase text-ink-secondary"
        >
          ¿Cuál es tu principal desafío con el inglés?{" "}
          <span className="text-ink-muted font-normal normal-case tracking-normal">
            (opcional)
          </span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={4}
          placeholder="Contame brevemente qué querés trabajar o qué situaciones te bloquean..."
          className="bg-beige-xlight border border-beige-dark focus:border-navy focus:bg-white outline-none font-sans text-sm text-ink-primary placeholder:text-ink-muted px-4 py-3.5 transition-colors duration-200 resize-none leading-relaxed"
        />
      </div>

      {/* Source */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="source"
          className="font-sans text-[11px] tracking-[0.16em] uppercase text-ink-secondary"
        >
          ¿Cómo me encontraste?{" "}
          <span className="text-ink-muted font-normal normal-case tracking-normal">
            (opcional)
          </span>
        </label>
        <div className="relative">
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            className="w-full appearance-none bg-beige-xlight border border-beige-dark focus:border-navy focus:bg-white outline-none font-sans text-sm text-ink-primary px-4 py-3.5 pr-10 transition-colors duration-200 cursor-pointer"
          >
            <option value="">Seleccioná una opción</option>
            <option value="Instagram">Instagram</option>
            <option value="Recomendación de alguien">
              Recomendación de alguien
            </option>
            <option value="Google">Google</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Otro">Otro</option>
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-muted"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 4.5L6 8l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="button"
          disabled
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-teal opacity-50 cursor-not-allowed text-white font-sans text-[0.82rem] font-semibold tracking-[0.1em] uppercase px-8 py-4"
        >
          Enviar consulta
        </button>
        <p className="font-sans text-[11px] text-ink-muted mt-3 leading-relaxed">
          Próximamente habilitado. Mientras tanto, escribinos por WhatsApp.
        </p>
      </div>
    </form>
  );
}
