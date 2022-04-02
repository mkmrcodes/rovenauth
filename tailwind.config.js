module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Quicksand'],
    },
    fontSize: {
      '6xl': [
        '6.125rem',
        {
          letterSpacing: '-0.09375rem',
          lineHeight: '9.1875rem',
        },
      ],
      '5xl': [
        '3.8125rem',
        {
          letterSpacing: '-0.03125rem',
          lineHeight: '5.71875rem',
        },
      ],
      '4xl': [
        '3.0625rem',
        {
          letterSpacing: '0rem',
          lineHeight: '4.59375rem',
        },
      ],
      '3xl': [
        '2.1875rem',
        {
          letterSpacing: '0.015625rem',
          lineHeight: '3.28125rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          letterSpacing: '0rem',
          lineHeight: '2.25rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          letterSpacing: '0.009375rem',
          lineHeight: '1.875rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          letterSpacing: '0.015625rem',
          lineHeight: '1.6875rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '0.009375rem',
          lineHeight: '1.5rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '0.009375rem',
          lineHeight: '1.3125rem',
        },
      ],
      xs: [
        '0.75rem',
        {
          letterSpacing: '0.015625rem',
          lineHeight: '1.125rem',
        },
      ],
      '2xs': [
        '0.625rem',
        {
          letterSpacing: '0.09375rem',
          lineHeight: '0.9375rem',
        },
      ],
      '3xs': [
        '0.625rem',
        {
          letterSpacing: '0.09375rem',
          lineHeight: '0.5rem',
        },
      ],
      '4xs': [
        '0.6rem',
        {
          letterSpacing: '0.08rem',
          lineHeight: '0.3rem',
        },
      ],
    },
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1536px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    textIndent: {
      1: '0.25rem',
      2: '0.5rem',
    },
    extend: {
      colors: {
        neutral: {
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        primary: {
          100: '#C7DFB4',
          200: '#98D294',
          300: '#76C370',
          400: '#54B44C',
          500: '#4CA244',
          600: '#43903D',
          700: '#3B7E35',
          800: '#326C2E',
          900: '#2A5A26',
        },
        secondary: {
          100: '#FEEB9B',
          200: '#fde06a',
          300: '#fdd638',
          400: '#fccc06',
          500: '#e3b805',
          600: '#caa305',
          700: '#b08f04',
          800: '#977a04',
          900: '#7e6603',
        },
        tertiary: {
          100: '#a174a3',
          200: '#936095',
          300: '#864c88',
          400: '#78387b',
          500: '#6c326f',
          600: '#602d62',
          700: '#542756',
          800: '#48224a',
          900: '#3c1c3e',
        },
        admin: {
          100: '#050505',
          200: '#202232',
          300: '#141422',
          400: '#384B67',
        },
        accent: '#8143B0',
        success: '#4BB543',
        info: '#F0AD4E',
        error: '#BB2124',
        shades: {
          100: '#FFFFFF',
          900: '#000000',
        },
        text: {
          dark: '#2C2C2C',
          gray: '#CCCCCC',
        },
        ground: '#674422',
        bglight: '#f2f2ff',
        bgheader: '#000033',
      },
      boxShadow: {
        card: '0 5px 8px 0 rgba(0,0,0,0.5)',
        card1: '0 2px 3px 0 rgba(0,0,0,0.3)',
        inside: 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        btn: 'inset 0 0 4px 2px #73B043',
      },
    },
  },
  plugins: [],
};
