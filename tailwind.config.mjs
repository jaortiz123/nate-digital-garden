// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // Mathematical 8pt spacing scale - foundation for sophisticated layouts
    spacing: {
      'px': '1px',
      '0': '0px',
      '0.5': '2px',   // 0.25 * 8px
      '1': '4px',     // 0.5 * 8px
      '1.5': '6px',   // 0.75 * 8px
      '2': '8px',     // Base unit
      '2.5': '10px',  // 1.25 * 8px
      '3': '12px',    // 1.5 * 8px
      '3.5': '14px',  // 1.75 * 8px
      '4': '16px',    // 2 * 8px
      '5': '20px',    // 2.5 * 8px
      '6': '24px',    // 3 * 8px
      '7': '28px',    // 3.5 * 8px
      '8': '32px',    // 4 * 8px
      '9': '36px',    // 4.5 * 8px
      '10': '40px',   // 5 * 8px
      '11': '44px',   // 5.5 * 8px
      '12': '48px',   // 6 * 8px
      '14': '56px',   // 7 * 8px
      '16': '64px',   // 8 * 8px
      '20': '80px',   // 10 * 8px
      '24': '96px',   // 12 * 8px
      '28': '112px',  // 14 * 8px
      '32': '128px',  // 16 * 8px
      '36': '144px',  // 18 * 8px
      '40': '160px',  // 20 * 8px
      '44': '176px',  // 22 * 8px
      '48': '192px',  // 24 * 8px
      '52': '208px',  // 26 * 8px
      '56': '224px',  // 28 * 8px
      '60': '240px',  // 30 * 8px
      '64': '256px',  // 32 * 8px
      '72': '288px',  // 36 * 8px
      '80': '320px',  // 40 * 8px
      '96': '384px',  // 48 * 8px
    },
    
    // Sophisticated typography scale using Major Third (1.25) ratio
    fontSize: {
      'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
      'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
      'base': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
      'lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
      'xl': ['20px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
      '2xl': ['24px', { lineHeight: '36px', letterSpacing: '-0.015em' }],
      '3xl': ['30px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.025em' }],
      '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em' }],
      '6xl': ['60px', { lineHeight: '68px', letterSpacing: '-0.035em' }],
      '7xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.04em' }],
      '8xl': ['96px', { lineHeight: '104px', letterSpacing: '-0.045em' }],
      '9xl': ['128px', { lineHeight: '136px', letterSpacing: '-0.05em' }],
      
      // Semantic typography hierarchy
      'display': ['72px', { lineHeight: '80px', letterSpacing: '-0.04em', fontWeight: '800' }],
      'hero': ['60px', { lineHeight: '68px', letterSpacing: '-0.035em', fontWeight: '700' }],
      'headline': ['36px', { lineHeight: '44px', letterSpacing: '-0.025em', fontWeight: '600' }],
      'title': ['24px', { lineHeight: '32px', letterSpacing: '-0.015em', fontWeight: '600' }],
      'body': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
      'caption': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
      'overline': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '500', textTransform: 'uppercase' }],
    },
    
    extend: {
      colors: {
        // Premium dark palette
        navy: '#0A0E1A',           // Deeper, richer background
        'card-navy': '#0F1419',     // Elevated surface color
        'card-dark': '#141B26',     // Secondary surface
        
        // Sophisticated text hierarchy
        fg: '#F8FAFC',             // Primary text - pure white with warmth
        'fg-muted': '#CBD5E1',     // Secondary text - refined gray
        secondary: '#94A3B8',       // Tertiary text - sophisticated muted
        'text-muted': '#64748B',   // Quaternary text
        
        // Refined accent system
        'cyan': {
          300: '#7DD3FC',          // Light accent
          400: '#38BDF8',          // Primary accent - more sophisticated blue
          500: '#0EA5E9',          // Active state
          600: '#0284C7',          // Pressed state
        },
        
        // Border and glow system
        'border-subtle': '#1E293B', // Subtle borders
        'border-glow': '#0EA5E9',   // Accent borders
        
        // 60-30-10 Color System Architecture
        // 60% - Primary backgrounds and surfaces
        'surface': {
          primary: '#0A0E1A',      // Main background (navy)
          secondary: '#0F1419',    // Card backgrounds
          tertiary: '#141B26',     // Elevated surfaces
        },
        
        // 30% - Secondary colors for contrast and hierarchy
        'content': {
          primary: '#F8FAFC',      // Main text
          secondary: '#CBD5E1',    // Secondary text
          tertiary: '#94A3B8',     // Muted text
          quaternary: '#64748B',   // Subtle text
        },
        
        // 10% - Accent colors for calls-to-action and highlights
        'accent': {
          primary: '#38BDF8',      // Primary accent
          secondary: '#7DD3FC',    // Light accent
          active: '#0EA5E9',       // Active/hover states
          pressed: '#0284C7',      // Pressed states
        },
      },
      
      // Mathematical Typography Scale (1.25 Major Third)
      fontSize: {
        'xs': ['14px', { lineHeight: '1.4', letterSpacing: '0.01em' }],     // 14px - Small caps/UI text
        'sm': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],          // 16px - Small text
        'base': ['18px', { lineHeight: '1.6', letterSpacing: '0' }],        // 18px - Body text (base)
        'lg': ['22px', { lineHeight: '1.5', letterSpacing: '0' }],          // 22px - Large text
        'xl': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],    // 28px - Small headlines
        '2xl': ['35px', { lineHeight: '1.3', letterSpacing: '-0.015em' }],  // 35px - Medium headlines
        '3xl': ['44px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],   // 44px - Large headlines
        '4xl': ['55px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],   // 55px - Extra large
        '5xl': ['69px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],  // 69px - Hero text
        
        // Semantic sizing for consistent usage
        'body': ['18px', { lineHeight: '1.6', letterSpacing: '0' }],
        'ui': ['14px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'caption': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'headline-sm': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'headline-md': ['35px', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'headline-lg': ['44px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline-xl': ['55px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['69px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      
      // Mathematical Spacing System (8pt Grid)
      spacing: {
        'px': '1px',
        '0': '0px',
        '0.5': '2px',   // 0.5 * 4px
        '1': '4px',     // 1 * 4px
        '1.5': '6px',   // 1.5 * 4px
        '2': '8px',     // Base unit (8px)
        '3': '12px',    // 1.5 * 8px
        '4': '16px',    // 2 * 8px
        '5': '20px',    // 2.5 * 8px
        '6': '24px',    // 3 * 8px
        '7': '28px',    // 3.5 * 8px
        '8': '32px',    // 4 * 8px
        '10': '40px',   // 5 * 8px
        '12': '48px',   // 6 * 8px
        '14': '56px',   // 7 * 8px
        '16': '64px',   // 8 * 8px
        '20': '80px',   // 10 * 8px
        '24': '96px',   // 12 * 8px
        '28': '112px',  // 14 * 8px
        '32': '128px',  // 16 * 8px
        '36': '144px',  // 18 * 8px
        '40': '160px',  // 20 * 8px
        '44': '176px',  // 22 * 8px
        '48': '192px',  // 24 * 8px
        '52': '208px',  // 26 * 8px
        '56': '224px',  // 28 * 8px
        '60': '240px',  // 30 * 8px
        '64': '256px',  // 32 * 8px
        '72': '288px',  // 36 * 8px
        '80': '320px',  // 40 * 8px
        '96': '384px',  // 48 * 8px
      },
      fontFamily: {
        // Primary font system
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Display', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        
        // Available custom fonts
        geograph: ['Geograph', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'monospace'],
      },
      boxShadow: {
        // Sophisticated shadow system for premium feel
        'none': '0 0 #0000',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        
        // Premium card shadows
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)', // Sophisticated lift effect
        'card-elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        
        // Accent glow effects
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.15)',
        'glow-cyan-sm': '0 0 10px rgba(56, 189, 248, 0.1)',
        'glow-cyan-lg': '0 10px 25px -3px rgba(56, 189, 248, 0.1), 0 4px 6px -2px rgba(56, 189, 248, 0.05)',
        'glow-cyan-xl': '0 20px 50px -12px rgba(56, 189, 248, 0.15), 0 8px 16px -4px rgba(56, 189, 248, 0.1)',
        
        // Bevel effects for sophisticated components
        'bevel': '0 4px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'bevel-hover': '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      
      borderRadius: {
        'none': '0px',
        'sm': '4px',      // 8px / 2
        'DEFAULT': '8px', // Base unit
        'md': '8px',      // Base unit
        'lg': '12px',     // 1.5 * 8px
        'xl': '16px',     // 2 * 8px
        '2xl': '24px',    // 3 * 8px
        '3xl': '32px',    // 4 * 8px
        'full': '9999px',
        
        // Custom utilities
        'bevel': '22px',  // For sophisticated card bevels
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
