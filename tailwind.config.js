/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F5C842',
        'gold-dark': '#C9A227',
        'casino-black': '#0A0A0F',
        'casino-dark': '#12121A',
        'casino-card': '#1A1A28',
        'casino-border': '#2A2A3D',
        'casino-purple': '#6C3FC9',
        'casino-green': '#22C55E',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
