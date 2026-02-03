import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#B76E79',
        'soft-gold': '#C9A84C',
        'off-white': '#FAF8F5',
        'dark-charcoal': '#2C2C2C',
        'soft-gray': '#7A7A7A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        raleway: ['var(--font-raleway)'],
      },
    },
  },
  plugins: [],
}
export default config
