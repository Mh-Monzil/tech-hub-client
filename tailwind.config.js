/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
        'bebas' : "'Bebas Neue', sans-serif"
      },
      colors: {
        "color-primaryBlack": "#000000",
        "color-secondaryBlack": "#222222",
        "color-white": "#CCCCCC",
        "color-ash": "#111111",
      },
    },
  },
  plugins: [],
};
