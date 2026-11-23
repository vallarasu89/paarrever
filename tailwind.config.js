/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official PAARR EVER Brand Palette
        burgundy: {
          DEFAULT: '#7A1034', // Primary Burgundy
          deep: '#570B26',    // Deep Burgundy
          dark: '#570B26',
          light: '#F7EAF0',   // Light Burgundy
          soft: '#F7EAF0',
          tint: '#F7EAF0',
          50: '#FDF7FA',
          100: '#F7EAF0',
          200: '#EFCFDD',
          300: '#E2A8C0',
          400: '#D1779B',
          500: '#BC4B77',
          600: '#9E2A56',
          700: '#7A1034',     // Primary
          800: '#630D2B',
          900: '#570B26',     // Deep Burgundy
        },
        golden: {
          DEFAULT: '#F9AD24', // Golden Yellow
          yellow: '#F9AD24',
          soft: '#FCE2A9',   // Soft Gold
          light: '#FCE2A9',
          dark: '#D98F12',
        },
        gold: {
          DEFAULT: '#F9AD24',
          light: '#FCE2A9',
          soft: '#FCE2A9',
          dark: '#D98F12',
        },
        mustard: {
          DEFAULT: '#F9AD24',
          light: '#FCE2A9',
          dark: '#D98F12',
        },
        // Backgrounds
        warm: {
          DEFAULT: '#FFF9F0', // Warm Background
          bg: '#FFF9F0',
        },
        ivory: '#FFF9F0',
        cream: {
          DEFAULT: '#FFF9F0',
          warm: '#FFF9F0',
        },
        // Text
        charcoal: '#292329',  // Main Text
        mainText: '#292329',
        muted: {
          DEFAULT: '#766A70', // Muted Text
          text: '#766A70',
          grey: '#766A70',
        },
        // Borders
        border: {
          DEFAULT: '#EADDE2', // Border
          subtle: '#EADDE2',
        },
        // Aliases for 100% component compatibility
        forest: {
          DEFAULT: '#7A1034',
          dark: '#570B26',
          light: '#7A1034',
          muted: '#F7EAF0',
        },
        deep: {
          green: '#570B26',
          maroon: '#570B26',
          burgundy: '#570B26',
        },
        brand: {
          green: '#7A1034',
          maroon: '#7A1034',
          burgundy: '#7A1034',
          deep: '#570B26',
          gold: '#F9AD24',
          mustard: '#F9AD24',
          soft: '#F7EAF0',
          light: '#F7EAF0',
        },
        maroon: {
          DEFAULT: '#7A1034',
          dark: '#570B26',
          light: '#F7EAF0',
          tint: '#F7EAF0',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(87, 11, 38, 0.04)',
        'elevated': '0 12px 32px -4px rgba(87, 11, 38, 0.08)',
        'card': '0 4px 20px -2px rgba(87, 11, 38, 0.06)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
