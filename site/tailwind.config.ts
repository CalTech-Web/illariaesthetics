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
          DEFAULT: "#B57E3A",
          dark: "#9E6C2E",
        },
        dark: {
          DEFAULT: "#161616",
          medium: "#1B1B1B",
        },
        neutral: {
          medium: "#5E5E5E",
          light: "#A4A4A4",
          bg: "#F7F7F7",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
