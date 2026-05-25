/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07192f",
        ink: "#0e2440",
        sky: "#1f7eea",
        amber: "#f58b20",
        mist: "#edf5ff"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(7, 25, 47, 0.14)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
