/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        checked: "#26c2ad",
        nochecked: "#191A19",
        placeholder: "#f3f8fb",
        greenlight: "#2cbfac",
        textnumbers: "#10b981",
      },
    },
  },
  plugins: [],
};
