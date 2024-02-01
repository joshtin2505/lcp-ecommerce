import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#209BAF',
          400: '#108295',
          500: '#00697A',
          600: '#005462',
          700: '#003F49'
        },
        secondary: {
          300: '#A9D3CF',
          400: '#90C6C0',
          500: '#76B9B2',
          600: '#66A29C',
          700: '#568C86'
        },
        tertiary: {
          300: '#CEE8EC',
          400: '#BEE0E5',
          500: '#AED8DF',
          600: '#97C8D0',
          700: '#80B8C1'
        },
        light: {
          Background: {
            primary: '#FBF8F4',
            secondary: '#A3F2FF',
            tertiary: '#E4F1F0',
            quaternary: '#EFF7F9',
          },
          Text: {
            primary: '#181818',
            secondary: '#213A3D',
            tertiary: '#424242',
            quaternary: '#67676767',
          },
          Status: {
            success: '#00c851',
            warning: '#ffbb33',
            danger: '#ff4444',
            info: '#2573e8',
            normal: '#969696'
          },
        },
        dark: {
          Background: {
            primary: '#3C494A',
            secondary: '#001518',
            tertiary: '#192928',
            quaternary: '#213A3D',
          },
          Text: {
            primary: '#F4F4F4',
            secondary: '#E0E0E0',
            tertiary: '#BDBDBD',
            quaternary: '#9E9E9E',
          },
          Status: {
            success: '#007e33',
            warning: '#ff8800',
            danger: '#cc0000',
            info: '#0344a6',
            normal: '#787878'
          },
        }
      },
      screens: {
        'xs': '480px',
        'xxs': '320px',
      }
    },
  },
  plugins: [],
};
export default config;
