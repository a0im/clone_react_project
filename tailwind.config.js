/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans KR', 'sans-serif']
      },
    },
  },
  plugins: [],
}
