/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",   // Dunkelblau für Hintergründe
          red: "#dc2626",    // Rot für Highlights
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
