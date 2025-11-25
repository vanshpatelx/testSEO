// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";
// import { VitePWA } from 'vite-plugin-pwa';
// import { exec } from "child_process";
// import { promisify } from "util";

// const execAsync = promisify(exec);

// // Plugin to generate sitemaps before build
// const sitemapPlugin = () => ({
//   name: 'generate-sitemap',
//   async buildStart() {
//     console.log('🗺️  Generating sitemaps...');
//     try {
//       await execAsync('tsx scripts/generate-sitemap.ts');
//       console.log('✅ Sitemaps generated successfully');
//     } catch (error) {
//       console.error('❌ Error generating sitemaps:', error);
//     }
//   }
// });

// // Plugin to pre-render routes after build
// const prerenderPlugin = () => ({
//   name: 'prerender-routes',
//   async closeBundle() {
//     console.log('🎨 Starting pre-rendering...');
//     try {
//       await execAsync('tsx scripts/prerender.ts');
//       console.log('✅ Pre-rendering completed successfully');
//     } catch (error) {
//       console.error('❌ Failed to pre-render routes:', error);
//       // Don't throw - allow build to succeed even if pre-rendering fails
//     }
//   }
// });

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     headers: {
//       'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
//       'X-Frame-Options': 'SAMEORIGIN',
//       'X-Content-Type-Options': 'nosniff',
//       'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' wss: ws:; frame-ancestors 'self'",
//     },
//   },
//   plugins: [
//     react(),
//     sitemapPlugin(),
//     // prerenderPlugin(), // Disabled - run manually with: npm run build && tsx scripts/prerender.ts
//     mode === "development" && componentTagger(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: ['favicon.png', 'logo.png', 'robots.txt'],
//       manifest: {
//         name: 'HighRiskHomeowners.com',
//         short_name: 'HighRiskHomeowners',
//         description: 'Connect with licensed insurance specialists for high-risk properties',
//         theme_color: '#2563eb',
//         background_color: '#ffffff',
//         display: 'standalone',
//         icons: [
//           {
//             src: '/logo.png',
//             sizes: '512x512',
//             type: 'image/png',
//             purpose: 'any maskable'
//           }
//         ]
//       },
//       workbox: {
//         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
//         globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}'],
//         runtimeCaching: [
//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'google-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               }
//             }
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'gstatic-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               }
//             }
//           },
//           {
//             urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'images-cache',
//               expiration: {
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
//               }
//             }
//           }
//         ]
//       }
//     })
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'react-vendor': ['react', 'react-dom', 'react-router-dom'],
//           'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-accordion', '@radix-ui/react-select'],
//         },
//       },
//     },
//     cssCodeSplit: true,
//   },
//   preview: {
//     headers: {
//       'Cache-Control': 'public, max-age=31536000, immutable',
//       'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
//       'X-Frame-Options': 'SAMEORIGIN',
//       'X-Content-Type-Options': 'nosniff',
//       'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
//     },
//   },
// }));


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";
// import { VitePWA } from 'vite-plugin-pwa';
// import { exec } from "child_process";
// import { promisify } from "util";

// const execAsync = promisify(exec);

// // Plugin to generate sitemaps before build
// const sitemapPlugin = () => ({
//   name: 'generate-sitemap',
//   async buildStart() {
//     console.log('🗺️  Generating sitemaps...');
//     try {
//       await execAsync('tsx scripts/generate-sitemap.ts');
//       console.log('✅ Sitemaps generated successfully');
//     } catch (error) {
//       console.error('❌ Error generating sitemaps:', error);
//     }
//   }
// });

// // Plugin to pre-render routes after build
// const prerenderPlugin = () => ({
//   name: 'prerender-routes',
//   async closeBundle() {
//     console.log('🎨 Starting pre-rendering...');
//     try {
//       await execAsync('tsx scripts/prerender.ts');
//       console.log('✅ Pre-rendering completed successfully');
//     } catch (error) {
//       console.error('❌ Failed to pre-render routes:', error);
//       // Don't throw - allow build to succeed even if pre-rendering fails
//     }
//   }
// });

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     headers: {
//       'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
//       'X-Frame-Options': 'SAMEORIGIN',
//       'X-Content-Type-Options': 'nosniff',
//       'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' wss: ws:; frame-ancestors 'self'",
//     },
//   },
//   plugins: [
//     react(),
//     sitemapPlugin(),
//     // prerenderPlugin(), // Disabled - run manually with: npm run build && tsx scripts/prerender.ts
//     mode === "development" && componentTagger(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: ['favicon.png', 'logo.png', 'robots.txt'],
//       manifest: {
//         name: 'HighRiskHomeowners.com',
//         short_name: 'HighRiskHomeowners',
//         description: 'Connect with licensed insurance specialists for high-risk properties',
//         theme_color: '#2563eb',
//         background_color: '#ffffff',
//         display: 'standalone',
//         icons: [
//           {
//             src: '/logo.png',
//             sizes: '512x512',
//             type: 'image/png',
//             purpose: 'any maskable'
//           }
//         ]
//       },
//       workbox: {
//         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
//         globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}'],
//         runtimeCaching: [
//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'google-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               }
//             }
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'gstatic-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               }
//             }
//           },
//           {
//             urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'images-cache',
//               expiration: {
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
//               }
//             }
//           }
//         ]
//       }
//     })
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'react-vendor': ['react', 'react-dom', 'react-router-dom'],
//           'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-accordion', '@radix-ui/react-select'],
//         },
//       },
//     },
//     cssCodeSplit: true,
//   },
//   preview: {
//     headers: {
//       'Cache-Control': 'public, max-age=31536000, immutable',
//       'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
//       'X-Frame-Options': 'SAMEORIGIN',
//       'X-Content-Type-Options': 'nosniff',
//       'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
//     },
//   },
// }));


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";
// import { VitePWA } from "vite-plugin-pwa";
// import { exec } from "child_process";
// import { promisify } from "util";

// const execAsync = promisify(exec);

// // Plugin to generate sitemaps before build
// const sitemapPlugin = () => ({
//   name: "generate-sitemap",
//   async buildStart() {
//     console.log("🗺️  Generating sitemaps...");
//     try {
//       await execAsync("tsx scripts/generate-sitemap.ts");
//       console.log("✅ Sitemaps generated successfully");
//     } catch (error) {
//       console.error("❌ Error generating sitemaps:", error);
//     }
//   },
// });

// // Plugin to pre-render routes after build (disabled by default in plugins list)
// const prerenderPlugin = () => ({
//   name: "prerender-routes",
//   async closeBundle() {
//     console.log("🎨 Starting pre-rendering...");
//     try {
//       await execAsync("tsx scripts/prerender.ts");
//       console.log("✅ Pre-rendering completed successfully");
//     } catch (error) {
//       console.error("❌ Failed to pre-render routes:", error);
//       // Don't throw - allow build to succeed even if pre-rendering fails
//     }
//   },
// });

// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     headers: {
//       "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
//       "X-Frame-Options": "SAMEORIGIN",
//       "X-Content-Type-Options": "nosniff",
//       "Content-Security-Policy":
//         "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' wss: ws:; frame-ancestors 'self'",
//     },
//   },

//   plugins: [
//     react(),
//     sitemapPlugin(),
//     // prerenderPlugin(), // leave commented — run manually with: npm run build && tsx scripts/prerender.ts
//     mode === "development" && componentTagger(),
//     VitePWA({
//       registerType: "autoUpdate",
//       includeAssets: ["favicon.png", "logo.png", "robots.txt"],
//       manifest: {
//         name: "HighRiskHomeowners.com",
//         short_name: "HighRiskHomeowners",
//         description: "Connect with licensed insurance specialists for high-risk properties",
//         theme_color: "#2563eb",
//         background_color: "#ffffff",
//         display: "standalone",
//         icons: [
//           {
//             src: "/logo.png",
//             sizes: "512x512",
//             type: "image/png",
//             purpose: "any maskable",
//           },
//         ],
//       },
//       workbox: {
//         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
//         globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,woff2}"],
//         runtimeCaching: [
//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "google-fonts-cache",
//               expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
//               cacheableResponse: { statuses: [0, 200] },
//             },
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "gstatic-fonts-cache",
//               expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
//               cacheableResponse: { statuses: [0, 200] },
//             },
//           },
//           {
//             urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
//             handler: "CacheFirst",
//             options: {
//               cacheName: "images-cache",
//               expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
//             },
//           },
//         ],
//       },
//     }),
//   ].filter(Boolean),

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },

//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           "react-vendor": ["react", "react-dom", "react-router-dom"],
//           "ui-vendor": [
//             "@radix-ui/react-dialog",
//             "@radix-ui/react-accordion",
//             "@radix-ui/react-select",
//           ],
//         },
//       },
//     },
//     cssCodeSplit: true,
//   },

//   preview: {
//     headers: {
//       "Cache-Control": "public, max-age=31536000, immutable",
//       "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
//       "X-Frame-Options": "SAMEORIGIN",
//       "X-Content-Type-Options": "nosniff",
//       "Content-Security-Policy":
//         "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
//     },
//   },
// }));

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";
// import { VitePWA } from "vite-plugin-pwa";
// import { exec } from "child_process";
// import { promisify } from "util";

// const execAsync = promisify(exec);

// // Plugin to generate sitemaps before build
// const sitemapPlugin = () => ({
//   name: "generate-sitemap",
//   async buildStart() {
//     console.log("🗺️  Generating sitemaps...");
//     try {
//       await execAsync("tsx scripts/generate-sitemap.ts");
//       console.log("✅ Sitemaps generated successfully");
//     } catch (error) {
//       console.error("❌ Error generating sitemaps:", error);
//     }
//   },
// });

// // Plugin to pre-render routes after build (optional)
// const prerenderPlugin = () => ({
//   name: "prerender-routes",
//   async closeBundle() {
//     console.log("🎨 Starting pre-rendering...");
//     try {
//       await execAsync("tsx scripts/prerender.ts");
//       console.log("✅ Pre-rendering completed successfully");
//     } catch (error) {
//       console.error("❌ Failed to pre-render routes:", error);
//     }
//   },
// });

// export default defineConfig(({ mode, ssrBuild }) => {
//   const plugins = [
//     react(),
//     sitemapPlugin(),
//     // componentTagger only for client-side development
//     mode === "development" && !ssrBuild && componentTagger(),
//     // VitePWA is client-only; disable it during SSR builds
//     !ssrBuild &&
//       VitePWA({
//         registerType: "autoUpdate",
//         includeAssets: ["favicon.png", "logo.png", "robots.txt"],
//         manifest: {
//           name: "HighRiskHomeowners.com",
//           short_name: "HighRiskHomeowners",
//           description: "Connect with licensed insurance specialists for high-risk properties",
//           theme_color: "#2563eb",
//           background_color: "#ffffff",
//           display: "standalone",
//           icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }],
//         },
//         workbox: {
//           maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
//           globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,woff2}"],
//         },
//       }),
//   ].filter(Boolean);

//   return {
//     // server is only used during dev; keep as-is
//     server: {
//       host: "::",
//       port: 8080,
//       headers: {
//         "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
//         "X-Frame-Options": "SAMEORIGIN",
//         "X-Content-Type-Options": "nosniff",
//         "Content-Security-Policy":
//           "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' wss: ws:; frame-ancestors 'self'",
//       },
//     },

//     plugins,

//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "./src"),
//       },
//     },

//     // IMPORTANT: When building for SSR we will bundle certain deps (noExternal),
//     // so manualChunks can reference them without Rollup complaining.
//     ssr: {
//       // Add packages you need bundled into the SSR output.
//       // This will increase SSR bundle size but avoids "external" manualChunks errors.
//       noExternal: [
//         // core React libs
//         // UI libs you reference in manualChunks or import directly
//         "@radix-ui/react-dialog",
//         "@radix-ui/react-accordion",
//         "@radix-ui/react-select",
//         // sonner (you imported 'toast' from it)
//         "sonner",
//         "react-helmet-async"
//       ],
//     },

//     build: {
//       rollupOptions: {
//         output: {
//           // Keep manualChunks for client builds; for SSR the modules above are bundled,
//           // so including manualChunks will not error. But we still avoid changing chunks for SSR-specific outputs.
//           manualChunks: ssrBuild
//             ? undefined
//             : {
//                 "react-vendor": ["react", "react-dom", "react-router-dom"],
//                 "ui-vendor": [
//                   "@radix-ui/react-dialog",
//                   "@radix-ui/react-accordion",
//                   "@radix-ui/react-select",
//                 ],
//               },
//         },
//       },
//       cssCodeSplit: true,
//     },

//     preview: {
//       headers: {
//         "Cache-Control": "public, max-age=31536000, immutable",
//         "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
//         "X-Frame-Options": "SAMEORIGIN",
//         "X-Content-Type-Options": "nosniff",
//         "Content-Security-Policy":
//           "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
//       },
//     },
//   };
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const sitemapPlugin = () => ({
  name: "generate-sitemap",
  async buildStart() {
    console.log("🗺️  Generating sitemaps...");
    try {
      await execAsync("tsx scripts/generate-sitemap.ts");
      console.log("✅ Sitemaps generated successfully");
    } catch (error) {
      console.error("❌ Error generating sitemaps:", error);
    }
  },
});

export default defineConfig(({ mode, ssrBuild }) => {
  const plugins = [
    react(),
    sitemapPlugin(),
    // dev-time client-only plugin
    mode === "development" && !ssrBuild && componentTagger(),
    // client-only PWA
    !ssrBuild &&
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "logo.png", "robots.txt"],
      manifest: {
        name: "HighRiskHomeowners.com",
        short_name: "HighRiskHomeowners",
        description: "Connect with licensed insurance specialists for high-risk properties",
        theme_color: "#2563eb",
        background_color: "#ffffff",
        display: "standalone",
        icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,woff2}"],
      },
    }),
  ].filter(Boolean);

  return {
    server: {
      host: "::",
      port: 8080,
    },

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // Optional: force single react resolution if you had duplicate copies
        // react: path.resolve(__dirname, 'node_modules/react'),
        // 'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      },
    },

    // Only bundle specific problematic CJS libs for SSR; DO NOT include react/react-dom here.
    ssr: {
      noExternal: [
        // keep minimal; add only packages that fail as CJS at runtime like react-helmet-async, sonner, etc.
        "react-helmet-async",
        "sonner",
      ],
    },
    // inside your defineConfig return -> build
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id) return;

            // If Rollup resolved the module as an external specifier (e.g. "react"),
            // its id can be exactly 'react' (no path). Skip these to avoid the error.
            if (id === 'react' || id === 'react-dom' || id === 'react-router-dom') {
              return; // leave external modules alone
            }

            // Only chunk modules coming from node_modules paths (bundled ones).
            // Vite will give full fs paths for resolved modules.
            if (id.includes('node_modules')) {
              // react-related code that has a real path (rare) -> react-vendor
              if (id.includes(`${path.sep}react${path.sep}`) || id.includes(`${path.sep}react-dom${path.sep}`) || id.includes(`${path.sep}react-router-dom${path.sep}`)) {
                return 'react-vendor';
              }

              // radix/ui and similar grouped under ui-vendor
              if (id.includes(`${path.sep}@radix-ui${path.sep}`) || id.includes(`${path.sep}@radix-ui`)) {
                return 'ui-vendor';
              }

              // sonner or other specific libs you want split
              if (id.includes(`${path.sep}sonner${path.sep}`) || id.includes(`${path.sep}sonner`)) {
                return 'sonner-vendor';
              }

              // fallback: vendor chunk for everything else in node_modules
              return 'vendor';
            }

            // everything else stays in the same chunk (no manual chunk)
            return;
          },
        },
      },
      cssCodeSplit: true,
    },


    preview: {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  };
});
