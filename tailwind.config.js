/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 9%)",
      grey: "hsl(0, 0%, 32%)",
      lightGrey: "hsl(0, 0%, 32%)",
    },
  },
  plugins: [],
};
