/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        card: '#18181B',
        text: '#FAFAFA',
        'neon-cyan': '#54D6FF',
        'neon-purple': '#A78BFA',
        'gray-800': '#1F2937',
        'gray-700': '#374151',
        'gray-600': '#4B5563',
        'gray-500': '#6B7280',
        'gray-400': '#9CA3AF',
        'gray-300': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(84, 214, 255, 0.5), 0 0 40px rgba(84, 214, 255, 0.3), 0 0 60px rgba(84, 214, 255, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(84, 214, 255, 0.8), 0 0 60px rgba(84, 214, 255, 0.5), 0 0 90px rgba(84, 214, 255, 0.3)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(45deg, #54D6FF, #A78BFA)',
        'card-gradient': 'linear-gradient(135deg, rgba(24, 24, 27, 0.8), rgba(24, 24, 27, 0.4))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

