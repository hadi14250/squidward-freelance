/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Gloria Hallelujah"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        main: "url('/images/dancing-horizon.svg')",
        home: "url('/images/intothe-rainbow.svg')",
        scalebg: "url('/images/scale-bg.png')",
      },
    },
  },
  plugins: [],
};
