import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#003A5D",
          dark: "#002A45",
          light: "#004875",
        },
        teal: {
          DEFAULT: "#004B49",
          dark: "#003836",
          light: "#005E5B",
        },
        beige: {
          DEFAULT: "#D6D2C4",
          dark: "#C4BFB0",
          light: "#E8E5DC",
          xlight: "#F2EFE8",
        },
        ink: {
          primary: "#2B2B2B",
          secondary: "#53565A",
          muted: "#8A8D90",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.12em",
        wide: "0.06em",
        ultra: "0.22em",
      },
      transitionDelay: {
        "100": "100ms",
        "150": "150ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
