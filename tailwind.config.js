// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'animate-glanceOnce',
    'animate-blinkOnce',
    'animate-glassesDrop',
    'animate-noseLift',
    'animate-mouthShift',
  ],
  theme: {
    extend: {
      animation: {
        glanceOnce: 'glance 1.6s ease-in-out forwards',
        blinkOnce: 'blink 0.6s ease 2.6s forwards',
        glassesDrop: 'glassesDrop 0.6s ease-out 1.8s forwards',
        noseLift: 'noseLift 0.6s ease 2.4s forwards',
        mouthShift: 'mouthShift 1.2s ease-in-out forwards',
        pulseSlow: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 🔥 added
      },
      keyframes: {
        glance: {
          '0%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-6px)' },
          '35%': { transform: 'translateX(6px)' },
          '55%': { transform: 'translateX(-3px)' },
          '75%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
        glassesDrop: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        noseLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        mouthShift: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(6px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
