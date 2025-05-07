/** @type {import('tailwindcss').Config} */
export default {
  // This is like a treasure map that tells Tailwind where to look for classes 🗺️
  // It scans all our HTML and JS/TS files for Tailwind classes
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  // Theme customization - This is where we make Tailwind our own! 🎨
  theme: {
    extend: {
      // Our custom color palette - Like a digital paint box 🎨
      colors: {
        // Main brand colors
        primary: {
          DEFAULT: '#3b82f6',  // Blue
          light: '#60a5fa',
          dark: '#2563eb',
        },
        secondary: {
          DEFAULT: '#10b981',  // Green
          light: '#34d399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#8b5cf6',  // Purple
          light: '#a78bfa',
          dark: '#6d28d9',
        },
        
        // UI colors
        surface: {
          DEFAULT: '#1e1e1e',
          variant: '#292929',
        },
        background: '#121212',
        
        // Status colors
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
        info: '#3b82f6',
        
        // Text colors
        'on-surface': '#e2e8f0',
        'on-surface-variant': '#94a3b8',
      },
      
      // Custom animations - Making things move smoothly 🎬
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      
      // Keyframe definitions - The choreography of our animations 💃
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(10px)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1' 
          },
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-10px)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1' 
          },
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1' 
          },
        },
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      // Custom border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  
  // No additional plugins currently used - but we're ready for more! 
  plugins: [],
};