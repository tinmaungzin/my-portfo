import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-card': 'var(--bg-card)',

        // Theme-aware text colors
        'text': {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },

        // Accent colors (syntax-inspired) - also theme-aware
        'accent': {
          cyan: 'var(--accent-cyan)',
          green: 'var(--accent-green)',
          purple: 'var(--accent-purple)',
          orange: 'var(--accent-orange)',
          pink: 'var(--accent-pink)',
          blue: 'var(--accent-blue)',
        },

        // Terminal colors
        'terminal': {
          bg: 'var(--terminal-bg)',
          border: 'var(--terminal-border)',
          header: 'var(--terminal-header)',
        },

        // Glass colors
        'glass': {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 1s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.1)',
        'glow-purple': '0 0 20px rgba(167, 139, 250, 0.3), 0 0 40px rgba(167, 139, 250, 0.1)',
        'glow-orange': '0 0 20px rgba(251, 146, 60, 0.3), 0 0 40px rgba(251, 146, 60, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
