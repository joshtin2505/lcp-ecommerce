import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          300: "#209BAF",
          400: "#108295",
          500: "#00697A",
          600: "#005462",
          700: "#003F49",
        },
        secondary: {
          300: "#A9D3CF",
          400: "#90C6C0",
          500: "#76B9B2",
          600: "#66A29C",
          700: "#568C86",
        },
        tertiary: {
          300: "#CEE8EC",
          400: "#BEE0E5",
          500: "#AED8DF",
          600: "#97C8D0",
          700: "#80B8C1",
        },
        light: {
          Background: {
            primary: "#FBF8F4",
            secondary: "#ecfdff",
            tertiary: "#E4F1F0",
            quaternary: "#EFF7F9",
          },
          Text: {
            primary: "#181818",
            secondary: "#213A3D",
            tertiary: "#424242",
            quaternary: "#67676767",
          },
        },
        dark: {
          Background: {
            primary: "#3C494A",
            secondary: "#001518",
            tertiary: "#192928",
            quaternary: "#213A3D",
          },
          Text: {
            primary: "#F4F4F4",
            secondary: "#E0E0E0",
            tertiary: "#BDBDBD",
            quaternary: "#9E9E9E",
          },
        },
        Status: {
          success: {
            "50": "#ecfff3",
            "100": "#d3ffe5",
            "200": "#aaffcd",
            "300": "#69ffa8",
            "400": "#21ff7b",
            "500": "#00f258",
            "600": "#00ca45",
            "700": "#009e39",
            "800": "#007e33",
            "900": "#02652b",
            "950": "#003915",
          },
          warning: {
            "50": "#fffbec",
            "100": "#fff5d3",
            "200": "#ffe8a5",
            "300": "#ffd66d",
            "400": "#ffb832",
            "500": "#ffa00a",
            "600": "#ff8800",
            "700": "#cc6402",
            "800": "#a14d0b",
            "900": "#82410c",
            "950": "#461f04",
          },
          danger: {
            "50": "#fff1f1",
            "100": "#ffdfdf",
            "200": "#ffc5c5",
            "300": "#ff9d9d",
            "400": "#ff6464",
            "500": "#ff4444",
            "600": "#ed1515",
            "700": "#c80d0d",
            "800": "#a50f0f",
            "900": "#881414",
            "950": "#4b0404",
          },
          info: {
            "50": "#ebf8ff",
            "100": "#d2efff",
            "200": "#afe4ff",
            "300": "#78d6ff",
            "400": "#39bdff",
            "500": "#0c99ff",
            "600": "#0074ff",
            "700": "#005cff",
            "800": "#004ad3",
            "900": "#0344a6",
            "950": "#082a63",
          },
          normal: {
            "50": "#f6f6f6",
            "100": "#e7e7e7",
            "200": "#d1d1d1",
            "300": "#b0b0b0",
            "400": "#888888",
            "500": "#787878",
            "600": "#5d5d5d",
            "700": "#4f4f4f",
            "800": "#454545",
            "900": "#3d3d3d",
            "950": "#262626",
          },
        },
      },
      screens: {
        xs: "480px",
        xxs: "320px",
      },
      zIndex: {
        min10: "-10",
      },
      backgroundSize: {
        "20": "20px 20px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
export default config
