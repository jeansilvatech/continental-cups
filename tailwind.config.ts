import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "america": "#002E83",
        "euro": "#0C5B9F"
      },
      backgroundColor:{
        "bg-default": "#ffffff",
        "america": "#B7E1FF",
        "america1": "#002E83",
        "euro": "#A7CFFF",
        "euro1": "#0C5B9F"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        enter:{
          '0%':{
            opacity: '0'
          },
          '100%':{
            opacity: '1'
          }
        }
      },
      animation:{
          enter: 'enter 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
export default config;
