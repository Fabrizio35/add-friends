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
        first: "#343434",
        second: "#055e68",
        third: "#62a388",
        thirdLight: "#7ac6a6",
        fourth: "#b9d2d2",
        blackTransparent: "rgba(0,0,0,0.5662640056022409)",
        headerColor: "rgba(52,52,52,0.6334908963585435)",
      },
      screens: {
        navbar: "550px"
      },
    },
  },
  plugins: [],
};
