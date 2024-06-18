import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "rgb(255, 70, 85)",
        color2: "rgb(15, 25, 35)",
        color3: "rgb(236, 232, 225)"
      },
      fontFamily: {
        valorant: ["VALORANT", 'sans-serif'],
        next: ["DINNextW1G-Regular", 'sans-serif'],
        tugsten: ["Tungsten-Bold", 'sans-serif']
      }
    },
    
  },
  plugins: [],
};
export default config;
