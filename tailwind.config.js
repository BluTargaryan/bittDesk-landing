/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 8px 3px 0.5px rgba(23, 23, 23, 0.3)",
        custom_hover: "0px 16px 3px 0.5px rgba(23, 23, 23, 0.3)",
      },
      colors: {
        primary: "#F4F4F4",
        secondary: "#171717",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
