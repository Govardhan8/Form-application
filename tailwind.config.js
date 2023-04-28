/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#FFFFFF",
        "primary-gray": "#E6E6E6",
        "primary-blue": "#1597E4D4",
        "primary-black": "#182021",
        "primary-red": "#D86161",
        "primary-background": "#D8D8D8",
        "secondary-gray": "#7A7A7A",
        "secondary-black": "#212427",
      },
    },
  },
  plugins: [],
};
