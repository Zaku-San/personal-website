/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#2c2d32",
        second: "#323338",
        third: "#6D5D6E",
        light: "#F4EEE0",
        kuning: "#FFD35A",
        pink: "#E1306C",
        biru: "#3f83f8",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
