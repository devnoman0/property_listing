/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
    },
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
        roxborough : ['Roxborough', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
