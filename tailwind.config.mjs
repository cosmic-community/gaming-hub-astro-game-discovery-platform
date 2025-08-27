/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          50: '#eef2ff',
          500: '#6366f1',
          600: '#5b21b6',
          900: '#312e81'
        },
        action: '#ff4444',
        rpg: '#4444ff',
        strategy: '#44ff44',
        gaming: {
          dark: '#0f0f23',
          darker: '#050505',
          accent: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out'
      }
    }
  },
  plugins: []
}