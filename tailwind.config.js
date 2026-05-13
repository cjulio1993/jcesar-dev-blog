import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7ec',
          100: '#e6edd5',
          200: '#cedda9',
          300: '#b2cb79',
          400: '#96b85c',
          500: '#6f933f',
          600: '#5a7732',
          700: '#465d29',
          800: '#324421',
          900: '#25331a'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
        glow: 'glow 6s ease-in-out infinite'
      }
    }
  },
  plugins: [typography]
};
