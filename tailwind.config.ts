import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      principal: '#00875F',
      light: '#00B37E',
      background: '#121214',
      elements: '#202024',
      icon: '#8D8D99',
      text: '#C4C4CC',
      title: '#E1E1E6',
      white: '#FFFFFF',
      'bg-footer-card': 'rgba(32, 32, 36, 0.90)',
    },

    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      padding: {
        '34': '8.5rem',
      },
      borderWidth: {
        '3': '3px',
      },
      width: {
        '34': '8.5rem',
      },
    },
  },
  plugins: [],
}
export default config
