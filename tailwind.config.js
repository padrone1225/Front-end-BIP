/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { 'max': '360px' },
      sm: { 'max': '480px' },
      md: { 'max': '768px' },
      lg: { 'max': '976px' },
      xl: { 'max': '1280px' },
      '2xl': { 'max': '1536px' },
      '3xl': { 'max': '1920px' }
    },
    extend: {
      colors: {
        // Neutrals
        N50: '#E9E9E9',
        N75: '#999DA2',
        N100: '#6E747C',
        N200: '#303843',
        N300: '#050F1D',
        N400: '#040B14',
        N500: '#030912',

        // Primary
        P50: '#EBF0FB',
        P75: '#AEC1ED',
        P100: '#8CA7E6',
        P200: '#5B82DB',
        P300: '#3968D4',
        P400: '#284994',
        P500: '#233F81',

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
      },
      borderWidth: {
        1.5: '1.5px'
      },
      spacing: {
        1.5: '0.09375rem',
        4: '0.25rem',
        5: '0.3125rem',
        7: '0.4375rem',
        8: '0.5rem',
        10: '0.625rem',
        11: '0.6875rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        25: '1.5625rem',
        26: '1.625rem',
        28: '1.75rem',
        32: '2rem',
        36: '2.25rem',
        37: '2.3125rem',
        40: '2.5rem',
        48: '3rem',
        52: '3.25rem',
        56: '3.5rem',
        60: '3.75rem',
        64: '4rem',
        66: '4.125rem',
        68: '4.25rem',
        72: '4.5rem',
        76: '4.75rem',
        78: '4.875rem',
        80: '5rem',
        82: '5.125rem',
        84: '5.25rem',
        88: '5.5rem',
        89: '5.5625rem',
        94: '5.875rem',
        104: '6.5rem',
        122: '7.625rem',
        138: '8.625rem',
        143: '8.9375rem',
        148: '9.25rem',
        152: '9.5rem',
        160: '10rem',
        167: '10.4375rem',
        169: '10.5625rem',
        184: '11.5rem',
        208: '13rem',
        218: '13.625rem',
        235: '14.6875rem',
        253: '15.8125rem',
        262: '16.375rem',
        266: '16.625rem',
        282: '17.625rem',
        286: '17.875rem',
        436: '27.25rem',
        448: '28rem',
        449: '28.0625rem',
        456: '28.5rem',
        584: '36.5rem',
        595: '37.1875rem',
        872: '54.5rem',
        1216: '76rem'
      },
      backgroundImage: {
        'radial-gradiant': 'radial-gradient(50% 50% at 50% 50%, #C5EAFF 0%, rgba(255, 255, 255, 0) 90.62%)',
        'linear-gradiant': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,247,254,1) 35%, rgba(220,243,255,1) 50%, rgba(233,247,254,1) 65%, rgba(255,255,255,1) 100%)'
      },
      zIndex: {
        1: '1'
      },
      scale: {
        82: '0.82',
        130: '1.3',
        177: '1.77',
        197: '1.97',
      },
      boxShadow: {
        'drop-30': '0 4px 24px rgba(192,195,210,0.3)',
        'drop-45': '0 4px 24px rgba(192,195,210,0.45)'
      }
    },
  },
  plugins: [],
}
