/** @type {import('tailwindcss').Config} */
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
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.4" },
        },
        shoot: {
          "0%": { transform: "translateX(0) translateY(0) rotate(25deg)", opacity: "1" },
          "100%": { transform: "translateX(120vw) translateY(50vh) rotate(25deg)", opacity: "0" },
        },
         typewriter: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        cursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00bcd4' },
        },
      },
      animation: {
        twinkle: "twinkle 8s infinite linear",
        twinkleReverse: "twinkle 6s infinite linear reverse",
        shoot: "shoot 3s infinite ease-in",
        typewriter: "typewriter 2s steps(40, end) forwards",
        cursor: "cursor 1s infinite",
      },
      
    },
  },
  plugins: [],
};
