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
        'main': 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'earth': 'url("https://www.solarsystemscope.com/textures/download/8k_earth_daymap.jpg")'
      },
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
