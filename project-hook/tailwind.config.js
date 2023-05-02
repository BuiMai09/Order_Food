/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ['Lobster', 'sans-serif']
      },
      color: {
        'regal-gray': '#e3dcd2'
      },
      backgroundImage: {
        'candy-bg': "url('https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/67551566a87d5b14be38968b/9935dcedd60ee436cdcb3d0b50a5aea7.png')",
        'loginBg': "url('https://c8.alamy.com/comp/2D6MJ2M/french-bakery-building-with-baguette-macarons-croissant-on-shop-window-paris-cityscape-with-eiffel-tower-and-street-cafe-vector-flat-illustration-2D6MJ2M.jpg')"
      }
    },
  },
  plugins: [],
}
