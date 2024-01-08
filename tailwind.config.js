/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "10px 10px 0 hsl(var(--neutral-black))",
        hover: "15px 15px 0 hsl(var(--neutral-black))",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary-yellow))",
        },
        muted: {
          DEFAULT: "hsl(var(--neutral-grey))",
        },
        white: {
          DEFAULT: "hsl(var(--neutral-white))",
        },
        black: {
          DEFAULT: "hsl(var(--neutral-black))",
        },
      },
    },
  },
  plugins: [],
};
