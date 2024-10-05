/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primaryBlack": "#000000",
        "color-secondaryBlack": "#1C1D1E",
        "color-white": "#CCCCCC",
        "color-ash": "#111111",
      },
    },
  },
  plugins: [],
};
