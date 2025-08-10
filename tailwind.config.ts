import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.75rem',    // 12px
        'xs': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.75rem',    // 28px
        '2xl': '2.5rem',    // 40px
        '3xl': '4rem',      // 64px
      },
      spacing: {
        '1': '0.25rem',     // 4px
        '2': '0.5rem',      // 8px
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px
        '6': '1.5rem',      // 24px
        '9': '2.25rem',     // 36px
        '14': '3.5rem',     // 56px
      },
      borderRadius: {
        DEFAULT: '1rem', // 16px
        'lg': '1rem', // 16px
        'md': '0.5rem',
        'sm': '0.25rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      animation: {
        'underline': 'underline 140ms ease-in-out',
      },
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
