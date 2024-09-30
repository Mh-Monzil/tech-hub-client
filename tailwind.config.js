/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-black": "#000000",
        "color-white": "#CCCCCC",
        "color-ash": "#111111",
      },
    },
  },
  plugins: [],
};
