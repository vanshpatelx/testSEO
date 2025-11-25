# Dynamic Sitemap Generation

This project uses an automated sitemap generation system that updates dates and pulls content dynamically from source files.

## How It Works

### Automatic Generation
The sitemap generation runs automatically during the build process via a Vite plugin. Every time you build the project, fresh sitemaps are generated with the current date.

### Generated Files
The script generates the following sitemap files in the `public/` directory:

- `sitemap.xml` - Main sitemap index (copy of sitemap_index.xml)
- `sitemap_index.xml` - Sitemap index pointing to all other sitemaps
- `sitemap-main.xml` - Static pages (home, about, FAQ, etc.)
- `sitemap-states.xml` - All state-specific insurance pages
- `sitemap-blog.xml` - Published blog posts
- `sitemap-glossary.xml` - Insurance glossary terms
- `sitemap-videos.xml` - Video library pages
- `sitemap-specialty.xml` - Coastal and wildfire insurance pages

### Data Sources
The script dynamically imports data from:

- `src/data/states.ts` - State pages
- `src/data/blogPosts.ts` - Blog content
- `src/data/glossaryTerms.ts` - Glossary definitions
- `src/data/videoPages.ts` - Video pages
- `src/data/coastalStates.ts` - Coastal insurance states
- `src/data/wildfireStates.ts` - Wildfire insurance states

### Features

✅ **Auto-updating dates** - Uses current date for lastmod tags
✅ **Dynamic content** - Pulls real data from source files
✅ **SEO-optimized** - Proper priorities and change frequencies
✅ **Build integration** - Runs automatically on every build
✅ **Statistics logging** - Shows content counts during generation

## Manual Generation

To manually generate sitemaps:

```bash
tsx scripts/generate-sitemap.ts
```

## Configuration

Edit `scripts/generate-sitemap.ts` to modify:

- Base URL (currently: https://highriskhomeowners.com)
- Priority values
- Change frequency settings
- Sitemap structure

## Adding New Content

When you add new pages or content to the project:

1. **Blog posts** - Add to `src/data/blogPosts.ts` with `published: true`
2. **Glossary terms** - Add to `src/data/glossaryTerms.ts`
3. **Video pages** - Add to `src/data/videoPages.ts`
4. **States** - Add to appropriate state data files

The sitemap will automatically include the new content on the next build.

## SEO Best Practices

The sitemap follows these SEO best practices:

- Uses ISO 8601 date format (YYYY-MM-DD)
- Includes proper priority values (0.3 to 1.0)
- Sets appropriate change frequencies
- Filters to only published content
- Uses clean, semantic URLs
- Splits content into logical sitemap files

## Deployment

The sitemaps are automatically generated during the build process and deployed with your site. No manual intervention needed!
