/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/design-system/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-marianne)',
      },
      colors: {
        primary: {
          /**
           * Background neutral
           */
          100: '#F6F3F8',
          /**
           * Background element point of interest
           */
          200: '#E8DFEE',
          /**
           * Background element point of interest darker
           */
          300: '#AA90BF',
          /**
           * Hover
           */
          400: '#6D418F',
          /**
           * Main elements or text
           */
          500: '#491273',
          /**
           * Darker text
           */
          700: '#3A0E5B',
          800: '#2A0A42',
        },
        secondary: {
          100: '#FEF3F6',
          200: '#FFB8CE',
          500: '#D40983',
        },
        default: '#1A1A1A',
        grey: {
          100: '#F8F8F7',
          200: '#E3E3DB',
        },
        categories: {
          transport: '#bc0b69',
          alimentation: '#e58e26',
          logement: '#04a4ac',
          divers: '#006ccb',
          servicessocietaux: '#0c2461',
        },
      },
      fontSize: {
        '3xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        valuechange: {
          '0%': { opacity: 0, transform: 'translateX(-10%)' },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateX(10%)' },
        },
        iconsRotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        planet1: {
          '0%': { fill: '#8D6C9F' },
          '100%': { fill: '#9F6C6C' },
        },
        planet2: {
          '0%': { fill: '#72CAAF' },
          '100%': { fill: '#EA9292' },
        },
        planet3: {
          '0%': { fill: '#75B8E5' },
          '100%': { fill: '#F78787' },
        },
        planet4: {
          '0%': { fill: '#9FDDFF' },
          '100%': { fill: '#FFB9B9' },
        },
        planet5: {
          '0%': { fill: '#7BBEEB' },
          '100%': { fill: '#FD8D8D' },
        },
        planet6: {
          '0%': { fill: '#85CBF8' },
          '100%': { fill: '#FF9E9E' },
        },
      },
      animation: {
        valuechange: 'valuechange 3s ease-out infinite',
        iconsRotation: 'iconsRotation 1s ease-in-out',
        planet1: 'planet1 3s forwards ease-in',
        planet2: 'planet2 3s forwards ease-in',
        planet3: 'planet3 3s forwards ease-in',
        planet4: 'planet4 3s forwards ease-in',
        planet5: 'planet5 3s forwards ease-in',
        planet6: 'planet6 3s forwards ease-in',
      },
      backgroundImage: {
        'icons-mobile': "url('/images/misc/mobileIcons.svg')",
      },
      screens: {
        xs: '320px',
      },
    },
  },
  safelist: [
    'text-categories-transport',
    'text-categories-alimentation',
    'text-categories-logement',
    'text-categories-divers',
    'text-categories-servicessocietaux',
    'bg-categories-transport',
    'bg-categories-alimentation',
    'bg-categories-logement',
    'bg-categories-divers',
    'bg-categories-servicessocietaux',
    'fill-categories-transport',
    'fill-categories-alimentation',
    'fill-categories-logement',
    'fill-categories-divers',
    'fill-categories-servicessocietaux',
    'border-categories-transport',
    'border-categories-alimentation',
    'border-categories-logement',
    'border-categories-divers',
    'border-categories-servicessocietaux',
  ],
  plugins: [],
}
