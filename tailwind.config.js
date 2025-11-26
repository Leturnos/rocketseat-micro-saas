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
        background: {
          primary: "#050505",
          secondary: "#0F0F10",
          tertiary: "#19191A",
        },
        content: {
          heading: "#FFF",
          body: "#CDCBCC",
          headline: "#B2B2B2",
          placeholder: "#827D7D",
        },
        accent: {
          purple: "#4B2DBB",
          "purple-dark": "#171031",
          blue: "#30B9E3",
          "blue-dark": "#102831",
          green: "#87BB2D",
          "green-dark": "#222D26",
          pink: "#B5446B",
          "pink-dark": "#2C1A22",
          yellow: "#DCCB2E",
          "yellow-dark": "#282A0F",
        },
        border: {
          primary: "#19191A",
          secondary: "#323234",
          tertiary: "#97979B",
        },
      },
    },
  },
  plugins: [],
};