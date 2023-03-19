/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xxxs: '270px',
        xxs: '359px',
        xs: "480px",
        xmd: "932px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
