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
        gold: {
          DEFAULT: "#b8933a",
          dark: "#a07e2e",
        },
        dark: {
          DEFAULT: "#1a1a18",
          medium: "#1e1e1c",
        },
        ivory: {
          DEFAULT: "#f5f0e8",
          dark: "#e8e0d4",
        },
        marble: {
          DEFAULT: "#faf9f7",
          stone: "#f2ece4",
          warm: "#e8e0d4",
        },
        neutral: {
          medium: "#8a8578",
          light: "#b0a99c",
          bg: "#f5f0e8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-up-1": "fadeUp 0.8s ease-out 0.1s both",
        "fade-up-2": "fadeUp 0.8s ease-out 0.2s both",
        "fade-up-3": "fadeUp 0.8s ease-out 0.3s both",
        "marquee": "marquee 30s linear infinite",
        "draw-line": "drawLine 1.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
