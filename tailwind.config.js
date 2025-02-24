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
      },
    },
  },
  plugins: [],
}
