/** @type {import('tailwindcss').Config} */
export default{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        error: {
          50: '#FEE7E7',
          100: '#FFC8BA',
          200: '#FFA38D',
          300: '#FF7B60',
          400: '#FF593D',
          500: '#FF2E1B',
          600: '#FF2617',
          700: '#F81B10',
          800: '#EA0A0A',
          900: '#D20000',
        },

        success: {
          50: '#EDFCEB',
          100: '#D1F6CD',
          200: '#B2F0AC',
          300: '#90E989',
          400: '#71E36D',
          500: '#51DD51',
          600: '#40CC48',
          700: '#20B73E',
          800: '#00A233',
          900: '#007E1F',
        },
        primary: '#1565D8E5',
        light: '#8692A6',
      },
      backgroundColor: {
        primary: '#1565D8E5',
        light: '#F5F9FF',
        dark: '#7A2D26',
      },
      borderColor: {
        default: '#CED2D7',
      },
      boxShadow: {
        default: '5px 11px 40.43px rgba(211, 209, 216, 0.3)',
      },
      screens: {
        lgMax: { max: '1023px' },
        mdMax: { max: '767px' },
        smMax: { max: '639px' },
      },
      borderRadius: {
        25: '25px',
      },
      fontSize: {
        'title-mobile': '1.125rem',
        'title-desktop': '1.75rem',
        'subtitle-mobile': '0.875rem',
        'subtitle-desktop': '1rem',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
