import breakPoints from './src/constants/breakPoints';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: { },
    },
    screens: {
      base: `${breakPoints.BASE}px`,
      sm: `${breakPoints.SM}px`,
      md: `${breakPoints.MD}px`,
      lg: `${breakPoints.LG}px`,
      xl: `${breakPoints.XL}px`,
      '2xl': `${breakPoints.XL_2}px`,
    },
  },
  plugins: [],
};
