import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// Plugin to generate sitemaps before build
const sitemapPlugin = () => ({
  name: 'generate-sitemap',
  async buildStart() {
    console.log('🗺️  Generating sitemaps...');
    try {
      await execAsync('tsx scripts/generate-sitemap.ts');
      console.log('✅ Sitemaps generated successfully');
    } catch (error) {
      console.error('❌ Error generating sitemaps:', error);
    }
  }
});

// Plugin to pre-render routes after build
const prerenderPlugin = () => ({
  name: 'prerender-routes',
  async closeBundle() {
    console.log('🎨 Starting pre-rendering...');
    try {
      await execAsync('tsx scripts/prerender.ts');
      console.log('✅ Pre-rendering completed successfully');
    } catch (error) {
      console.error('❌ Failed to pre-render routes:', error);
      // Don't throw - allow build to succeed even if pre-rendering fails
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' wss: ws:; frame-ancestors 'self'",
    },
  },
  plugins: [
    react(),
    sitemapPlugin(),
    // prerenderPlugin(), // Disabled - run manually with: npm run build && tsx scripts/prerender.ts
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'logo.png', 'robots.txt'],
      manifest: {
        name: 'HighRiskHomeowners.com',
        short_name: 'HighRiskHomeowners',
        description: 'Connect with licensed insurance specialists for high-risk properties',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Only use manualChunks for client builds, not for SSR builds
        ...(isSsrBuild ? {} : {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-accordion', '@radix-ui/react-select'],
          },
        }),
      },
    },
    cssCodeSplit: true,
  },
  ssr: {
    // Bundle these dependencies for SSR to avoid CommonJS/ESM issues
    noExternal: ['react-helmet-async'],
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
    },
  },
}));
