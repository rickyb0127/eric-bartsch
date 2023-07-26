/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true
    },
    extend: {
      colors: {
        "bg-primary": "#93A8AC",
        "bg-nav": "#454545",
        "bg-tag": "#454545"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    }
  },
  plugins: [],
}

