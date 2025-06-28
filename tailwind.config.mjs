// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: { 
          blue: '#003087',       // Seahawks '76 primary
          green: '#046A38',      // micro-accent
        },
        canvas: '#F5F5F5',        // ultra-light grey background
        ink:  { DEFAULT: '#000000' },     /* ← for neo-brutalist outlines */
      },
      fontFamily: {
        grotesk: ['"Clash Display"', '"Space Grotesk"', '"Scto Grotesk A"', 'sans-serif'], // fallback chain
      },
      borderWidth: { brutal: '4px' },       /* 4 px outline utility */
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // For truncating card titles
  ],
};
