import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriela Díaz – MEC English Coach | Coaching de inglés para profesionales",
  description:
    "Coaching personalizado para profesionales que entienden todo en inglés pero se traban al hablar. Activá tu fluidez oral con Gabriela Díaz, English Coach.",
  keywords:
    "english coach argentina, coaching inglés profesionales, fluidez inglés, hablar inglés con confianza, inglés ejecutivos, MEC English Coach",
  openGraph: {
    title: "Gabriela Díaz – MEC English Coach",
    description:
      "Ya sabés inglés. Te ayudo a hablarlo con confianza. Coaching personalizado para líderes y profesionales.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriela Díaz – MEC English Coach",
    description: "Ya sabés inglés. Te ayudo a hablarlo con confianza.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white text-ink-primary">
        {children}
        <WhatsAppButton />
        <ScrollAnimations />
      </body>
    </html>
  );
}
