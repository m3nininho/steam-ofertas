/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {},
    colors: {
      bgPage: '#2d3194',
      textDefault: '#e2cb30',
      titleWarning: '#fff',
      bgBtn: '#eb4036',
      textDiscount: '#a4d007' ,
      bgDiscount: 'rgb(76, 107, 34)',
      bgPrice: 'rgb(34, 32, 50)',
      textBlack: '#000'
    },
    
  },
  plugins: [],
}
