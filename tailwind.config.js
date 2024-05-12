/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0098ed",
          200: "#0080c8",
          300: "#0067a1",
        },
        secondary: {
          100: "#F0F3F5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
};
