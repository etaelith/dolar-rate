/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        checked: "#26c2ad",
        nochecked: "#00474b",
        placeholder: "#f3f8fb",
        greenlight: "#2cbfac",
      },
    },
  },
  plugins: [],
};
