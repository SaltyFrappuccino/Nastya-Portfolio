/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        evolventa: ['Evolventa', 'sans-serif'],
        suisse: ['Suisse Intl', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#F4F4F4',
          white: '#FFFFFF',
          dark: '#101010',
          footer: '#1D1D1D',
        },
        text: {
          primary: '#000000',
          secondary: '#808080',
          light: '#FFFFFF',
        },
        accent: {
          blue: '#4F75FF',
          red: '#FF4444',
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

