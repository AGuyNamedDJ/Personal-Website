

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan every JS/JSX/TS/TSX file in the src tree for Tailwind class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/app/**/*.{js,jsx,ts,tsx,css}",
    "./src/components/**/*.{js,jsx,ts,tsx,css}",
  ],

  theme: {
    extend: {
      colors: {
        // Graphite background for footer and dark sections
        neutral: {
          950: "#0d0d0d",
        },
      },
    },
  },

  plugins: [],
};
