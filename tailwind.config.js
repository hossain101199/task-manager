/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(94, 211, 208, 1)",
      },
      backgroundImage: {
        "primary-background-image":
          "linear-gradient(94.52deg, #5ED3D0 1.81%, #89A2FB 100%)",
      },
    },
  },
  plugins: [],
};
