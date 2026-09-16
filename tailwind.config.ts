import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8ED",
        coral: "#E9593E",
        orange: "#F28C45",
        tropical: "#557A46",
        yellow: "#F4C86A",
        brown: "#49332A",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        editorial: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(73, 51, 42, 0.15)",
        card: "0 4px 20px -4px rgba(73, 51, 42, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
