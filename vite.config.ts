/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

/**
 * Vite configuration for the Mindora application
 * This configuration includes:
 * - React plugin for JSX/TSX support
 * - PWA plugin for progressive web app features
 * - PostCSS configuration for Tailwind CSS
 * - Optimized dependencies configuration
 */
export default defineConfig({
  // Plugins configuration
  plugins: [
    // React plugin for JSX/TSX support
    react(),
    
    // PWA plugin configuration
    VitePWA({
      // Auto-update service worker
      registerType: 'autoUpdate',
      
      // Include static assets
      includeAssets: [
        'favicon.svg',
        'apple-touch-icon.png',
        'masked-icon.svg'
      ],
      
      // PWA manifest configuration
      manifest: {
        name: 'TaskMaster',
        short_name: 'TaskMaster',
        description: 'Personal task management with AI assistance',
        theme_color: '#121212',
        
        // App icons for different sizes
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  
  // Dependencies optimization
  optimizeDeps: {
    // Exclude lucide-react from optimization
    // This is because it's already optimized and doesn't need to be processed
    exclude: ['lucide-react'],
  },

  // PostCSS configuration
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },

  // Resolve configuration - Helping Vite find its way around our project 🗺️
  resolve: {
    // Aliases - Shortcuts to make imports cleaner and more readable ✨
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),  // '@' now points to our src directory - like a GPS shortcut! 🧭
      '@components': resolve(dirname(fileURLToPath(import.meta.url)), './src/components'),
      '@contexts': resolve(dirname(fileURLToPath(import.meta.url)), './src/contexts'),
      '@services': resolve(dirname(fileURLToPath(import.meta.url)), './src/services'),
    },
  },
  
  // Server configuration - How our development server behaves 🎮
  server: {
    // Port configuration - Where our app lives during development
    port: 5173,  // Our app's home address - like a digital house number! 🏠
    
    // Host configuration - Who can visit our app
    host: true,  // Let's be social - allow connections from other devices! 🌐
    open: true, // Auto-open browser on start
  },
  
  // Build configuration - How our app gets packaged for production 🏗️
  build: {
    // Output directory - Where our built files will live
    outDir: 'dist',  // The final resting place for our production code - like a digital museum! 🏛️
    
    // Source maps - Helping us debug in production
    sourcemap: true,  // Like a treasure map for finding bugs! 🗺️
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});