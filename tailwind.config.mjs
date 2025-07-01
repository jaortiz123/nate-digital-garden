// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#050B14',
        'card-navy': '#0A1220',
        'line-cyan': '#23C9FF',
        fg: '#E9F1FF',
        'fg-muted': '#A8B8D9',
        secondary: '#A8B8D9',
        'glow-cyan-100': '#23C9FF44',
        'glow-cyan-300': '#23C9FFAA',
        // Dark theme colors matching the reference
        'card-dark': '#0f172a',     // Very dark navy for card backgrounds
        'card-darker': '#020617',   // Even darker for main background
        'glow-cyan': {
          300: '#67e8f9',           // Light cyan for glows
          400: '#22d3ee',           // Main cyan
          500: '#06b6d4',           // Darker cyan
        },
        'text-muted': '#64748b',    // Muted text color
        'border-glow': '#0891b2',   // Border glow color
      },
      fontFamily: {
        sans: ['Geograph', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        geograph: ['Geograph', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Hanken Grotesk is the new primary display font
        display: ['"Hanken Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        // Custom utility for the inner card bevel
        bevel: 'inset 0 0 0 1px var(--tw-shadow-color)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(34, 211, 238, 0.4)',
      },
      borderRadius: {
        // Custom utility for the outer card bevel
        bevel: '22px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
