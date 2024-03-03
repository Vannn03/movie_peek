/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: { max: "480px" },
      ss: { max: "640px" },
      sm: { max: "768px" },
      md: { max: "1024px" },
      lg: { max: "1280px" },
      xl: { max: "1536px" },
    },
  },
  plugins: [],
};
