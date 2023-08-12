/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-white': '#EBEEF3',
        'light-green': '#52C41A',
        'gray-50': '#00000080',
        'gray-75': '#000000bf',
      },
    },
  },
  plugins: [],
}
