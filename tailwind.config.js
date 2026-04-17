/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#050507',
          900: '#0a0b10',
          800: '#12141b',
          700: '#1a1d26',
        },
        steel: {
          400: '#94a3b8',
          300: '#b8c0cc',
          200: '#d8dde5',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        title: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        panel:
          '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        line: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 12px 36px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      maxWidth: {
        shell: '1320px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
