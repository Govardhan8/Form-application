/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "modal-white": "#FFFFFF",
        "border-gray": "#E6E6E6",
        primary: "#1597E4D4",
        "primary-black": "#182021",
        "error-red": "#D86161",
        "holder-gray": "#7A7A7A",
        "primary-background": "#D8D8D8",
      },
    },
  },
  plugins: [],
};
