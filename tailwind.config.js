module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-light': `
          radial-gradient(circle at 15% 50%, rgba(64, 64, 64, 0.1), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(32, 32, 32, 0.1), transparent 25%)
        `,
        'gradient-radial-dark': `
          radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.1), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.05), transparent 25%)
        `,
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
} 