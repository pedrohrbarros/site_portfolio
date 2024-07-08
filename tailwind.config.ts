import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move_bg: {
          from: { backgroundPosition: 'right' },
          to: { backgroundPosition: 'left' },
        },
      },
      animation: {
        spin_planet: 'move_bg 60s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
