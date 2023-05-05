/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 10px 30px rgba(20, 20, 21, 0.06)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};
