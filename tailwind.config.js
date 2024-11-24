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
        primary: "#7E53D4",
        secondary: "#F4F8FF",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero.png')",
      },
    },
  },
  plugins: [],
};
