/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
 
  presets: [tailwindConfig],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@storefront-ui/react/**/*.{js,mjs}'],
  theme: {

    screens: {
      xs: '400px',
      sm: '600px',
      md: '900px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {
      
    },
  },
  variants: {},
  plugins: [],
};



