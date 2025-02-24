/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://einstein-clients.imgix.net/4213/418433/original.jpg')",
        'Section-bg': "url('/img/bg.jpg')",
        'Section3bg': "url('/img/original.jpg')",
        '6bg': "url('/img/6bg.avif')",
        '9bg': "url('/img/9bg.avif')",
        '13bg': "url('/img/13bg.avif')",
        '8bg': "url('/img/8bg.jpg')",
      },
    },
  },
  plugins: [],
}
