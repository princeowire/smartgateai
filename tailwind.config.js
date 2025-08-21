// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gold: {
          light: "#E6C77C", // soft highlight gold
          DEFAULT: "#C9A646", // primary antique gold
          dark: "#8C6C1F", // deep shadow gold
        },
      },
    },
  },
  plugins: [],
}
