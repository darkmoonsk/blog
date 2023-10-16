import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1B",
        light: "#FFF",
        accent: "#07bbd6",
        accentDark: "#FFDB4D",
        gray: "#747474"
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      },
      animation: {
        roll: "roll 24s linear infinite"
      },
      keyframes: {
        roll: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        },
      },
      screens: {
        sxl: "1180px",
        xs: "480px",
      },
      backgroundImage: {
        galaxy: "url('/galaxy-bg.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config

