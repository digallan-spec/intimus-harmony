import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        umana: {
          navy: "#091638",
          "navy-light": "#122350",
          "navy-muted": "#2B3A63",
          gold: "#CCA648",
          "gold-soft": "#DFC47B",
          "gold-deep": "#A8842E",
          ice: "#D4E2E4",
          "ice-soft": "#EEF4F5",
          porcelain: "#FAF9F6",
          ink: "#1A2236",
          slate: "#4C566E",
        },
      },
      fontFamily: {
        display: ["var(--font-qafinte)", "var(--font-display-fallback)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 18px 48px -24px rgba(9, 22, 56, 0.14)",
        "editorial-sm": "0 8px 24px -14px rgba(9, 22, 56, 0.12)",
        "gold-glow": "0 10px 30px -12px rgba(204, 166, 72, 0.35)",
      },
      letterSpacing: {
        editorial: "0.14em",
        brand: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
