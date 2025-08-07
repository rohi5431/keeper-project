/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        xs: '480px', 
        max480: { max: '479px' },   
        sm: '640px',
        md: '768px',
        // ...others
        max580: { max: '580px' },
        max600: { max: '600px' },
      },
    },
  },
  plugins: [],
}
