# Pre-rendering System

**Status: Disabled during build** - Pre-rendering is currently disabled in the automatic build process to prevent build timeouts. The project uses React Helmet for SEO meta tags instead.

## Current Setup

- **Sitemaps**: Generated automatically during every build ✅
- **Pre-rendering**: Disabled (optional, run manually) ⚠️
- **SEO Meta Tags**: React Helmet on all pages ✅

## Manual Pre-rendering (Optional)

To pre-render HTML files manually:

```bash
# 1. Build the project
npm run build

# 2. Start preview server in one terminal
npm run preview

# 3. Run pre-render script in another terminal
npx tsx scripts/prerender.ts
```

## How It Works

1. **Build Process**: When you run `npm run build`, the build process includes:
   - Standard Vite build creating the React bundle
   - Sitemap generation (via `generate-sitemap.ts`)
   - **Pre-rendering** (via `prerender.ts`) - runs after build completes

2. **Pre-rendering Flow**:
   - Starts a local preview server with the built app
   - Uses Puppeteer (headless Chrome) to visit each route
   - Waits for React to render and React Helmet to inject meta tags
   - Captures the fully-rendered HTML
   - Saves static HTML files to the `dist` folder

3. **Route Discovery**: The script automatically generates HTML for:
   - All static pages (home, about, FAQ, etc.)
   - All state pages (50+ states)
   - All coastal insurance pages
   - All wildfire insurance pages
   - All blog posts
   - All glossary terms
   - All video pages

## Benefits of Pre-rendering (When Enabled)

✅ **Instant Content for Crawlers**: Search engines see fully-rendered HTML immediately
✅ **Better SEO**: No waiting for JavaScript execution  
✅ **Social Media**: Open Graph and Twitter cards work perfectly
✅ **Performance**: Faster First Contentful Paint (FCP)

**Note**: Even without pre-rendering, React Helmet ensures proper SEO meta tags are present.

## Files

- `scripts/prerender.ts` - Pre-rendering script (run manually)
- `vite.config.ts` - Pre-rendering plugin is commented out
- `scripts/generate-sitemap.ts` - Runs automatically during build

## Re-enabling Automatic Pre-rendering

To enable pre-rendering during build (⚠️ may cause timeouts):

1. Edit `vite.config.ts`
2. Uncomment `prerenderPlugin()` in the plugins array
3. Test that build completes successfully

```typescript
plugins: [
  react(),
  sitemapPlugin(),
  prerenderPlugin(), // ← Uncomment this line
  mode === "development" && componentTagger(),
```

## Configuration

### Adding New Routes

Routes are automatically discovered from data files:
- `src/data/states.ts` - State pages
- `src/data/coastalStates.ts` - Coastal insurance pages
- `src/data/wildfireStates.ts` - Wildfire insurance pages
- `src/data/blogPosts.ts` - Blog posts
- `src/data/glossaryTerms.ts` - Glossary terms
- `src/data/videoPages.ts` - Video pages

Add entries to these files and they'll automatically be pre-rendered on next build.

### Manual Routes

Static routes are hard-coded in `getAllRoutes()` function in `prerender.ts`:
```typescript
const routes = [
  '/',
  '/about',
  '/how-it-works',
  // ... add more here
];
```

## Build Commands

```bash
# Build with pre-rendering (production)
npm run build

# Preview the pre-rendered site locally
npm run preview
```

## Troubleshooting

### Pre-rendering Fails
- Check if all data imports in `prerender.ts` are valid
- Ensure no routes have syntax errors
- Check console for specific route errors

### Routes Not Found (404)
- Verify the route exists in React Router (`App.tsx`)
- Ensure the route is included in `getAllRoutes()`

### Missing Meta Tags
- Check `SEOHead` component is used on the page
- Verify React Helmet Async is properly configured
- Increase wait time in `page.waitForTimeout()` if needed

## How This Differs from SSR

- **SSR (Server-Side Rendering)**: Server generates HTML on every request (requires Node.js server)
- **Pre-rendering**: HTML generated once at build time (static files, works anywhere)

Pre-rendering is perfect for content that doesn't change frequently and doesn't require per-request personalization.

## Performance Impact

- **Build Time**: Adds ~1-3 minutes depending on number of routes
- **Bundle Size**: No impact on bundle size
- **Runtime**: Zero impact - users still get the fast SPA experience

## Future Enhancements

Potential improvements:
- Incremental pre-rendering (only changed routes)
- Parallel rendering (multiple routes at once)
- Pre-render on-demand (webhook triggers)
- Cache pre-rendered HTML at CDN edge
