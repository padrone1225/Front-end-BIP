/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx"],
  theme: {
    extend: {
      colors: {
        // Neutrals
        white: '#fffff',
        N50: '#F3F3F3',
        N75: '#999DA2',
        N100: '#6E747C',
        N200: '#303843',
        N300: '#050F1D',
        N400: '#040B14',
        N500: '#030912',

        // Primary
        B50: '#EBF0FB',
        B75: '#AEC1ED',
        B100: '#8CA7E6',
        B200: '#5B82DB',
        B300: '#3968D4',
        B400: '#284994',
        B500: '#233F81',

        // Secondary
        SC50: '#FDF2EE',
        SC75: '#F5CAB8',
        SC100: '#F1B49A',
        SC200: '#EA946F',
        SC300: '#E67E51',
        SC400: '#A15839',
        SC500: '#8C4D31',

        // Accent
        A50: '#EFFAFA',
        A75: '#D9FBF7',
        A100: '#A3DFE0',
        A200: '#7CD1D2',
        A300: '#61C8C9',
        A400: '#448C8D',
        A500: '#3B7A7B',

        // Success
        S50: '#E6F8E7',
        S75: '#96E29E',
        S100: '#6BD676',
        S200: '#2BC43B',
        S300: '#00B813',
        S400: '#00810D',
        S500: '#00700C',

        // Alert
        A50: '#F9E6E6',
        A75: '#E49696',
        A100: '#D96B6B',
        A200: '#C92B2B',
        A300: '#BE0000',
        A400: '#850000',
        A500: '#740000',
      },
      fontFamily: {
        headings: ['JakartaSans', 'sans-serif'],
        bodyText: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1rem' }],
        base: ['1rem', { lineHeight: '1.25rem' }],
        lg: ['1.25rem', { lineHeight: '1.5rem' }],
        xl: ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.75rem', { lineHeight: '2rem' }],
        '3xl': ['2rem'],
      }
    },
  },
  plugins: [],
}

