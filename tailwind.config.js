/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: '0px',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
      },
      colors: {
        border: 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
        'share-tech': ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        subtleScan: "subtleScan 20s linear infinite",
        glowText: "glowText 3s ease-in-out infinite",
      },
      keyframes: {
        subtleScan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 40px" },
        },
        glowText: {
          "0%, 100%": { filter: "drop-shadow(0 0 5px #facc15)" },
          "50%": { filter: "drop-shadow(0 0 15px #fb923c)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}  
