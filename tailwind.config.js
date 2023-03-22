/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#13111C",
        "background-light": "#211f2e",
        "main": "#607FEF",
        "gris": "#636363",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        52: "3.25rem",
        32: "2rem",
        20: "1.25rem",
        16: "1rem",
      },
      fontWeight: {
        black: "900",
        bold: "700",
        regular: "300",
      },
      text: {
        ralewayBlack52: {
          fontFamily: "raleway",
          fontSize: "52",
          fontWeight: "black",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
