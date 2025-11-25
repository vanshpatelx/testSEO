import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL and current date
const BASE_URL = 'https://highriskhomeowners.com';
const TODAY = new Date().toISOString().split('T')[0];

// Static pages data
const STATIC_PAGES = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/how-it-works', priority: '0.9', changefreq: 'monthly' },
  { url: '/high-risk-specialists', priority: '0.8', changefreq: 'monthly' },
  { url: '/licensed-agents', priority: '0.8', changefreq: 'monthly' },
  { url: '/free-referrals', priority: '0.8', changefreq: 'monthly' },
  { url: '/states', priority: '0.9', changefreq: 'weekly' },
  { url: '/coastal-insurance', priority: '0.9', changefreq: 'weekly' },
  { url: '/wildfire-insurance', priority: '0.9', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/glossary', priority: '0.6', changefreq: 'monthly' },
  { url: '/video-library', priority: '0.7', changefreq: 'monthly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
];

// Import data dynamically
const getDataFromFile = async (filePath: string) => {
  try {
    const module = await import(filePath);
    return module;
  } catch (error) {
    console.error(`Error importing ${filePath}:`, error);
    return null;
  }
};

// Generate sitemap index
const generateSitemapIndex = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const sitemaps = [
    'sitemap-main.xml',
    'sitemap-states.xml',
    'sitemap-blog.xml',
    'sitemap-glossary.xml',
    'sitemap-videos.xml',
    'sitemap-specialty.xml'
  ];

  sitemaps.forEach(sitemap => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${BASE_URL}/${sitemap}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>';
  return xml;
};

// Generate main sitemap
const generateMainSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  STATIC_PAGES.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Generate states sitemap
const generateStatesSitemap = (states: any[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  states.forEach(state => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/${state.slug}-high-risk-home-insurance</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Generate blog sitemap
const generateBlogSitemap = (posts: any[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  posts.filter(post => post.published).forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.updatedAt || TODAY}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Generate glossary sitemap
const generateGlossarySitemap = (terms: any[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  terms.forEach(term => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/glossary/${term.slug}</loc>\n`;
    xml += `    <lastmod>${term.updatedAt || TODAY}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.5</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Generate videos sitemap
const generateVideosSitemap = (videos: any[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  videos.forEach(video => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/videos/${video.slug}</loc>\n`;
    xml += `    <lastmod>${video.publishedAt || TODAY}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Generate specialty sitemap (coastal and wildfire)
const generateSpecialtySitemap = (coastalStates: any[], wildfireStates: any[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  coastalStates.forEach(state => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/coastal-insurance/${state.slug}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += '  </url>\n';
  });

  wildfireStates.forEach(state => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/wildfire-insurance/${state.slug}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Main function
const generateAllSitemaps = async () => {
  console.log('🚀 Starting sitemap generation...');
  
  const publicDir = path.join(__dirname, '..', 'public');

  try {
    // Import data from source files
    const statesModule = await getDataFromFile('../src/data/states.ts');
    const blogModule = await getDataFromFile('../src/data/blogPosts.ts');
    const glossaryModule = await getDataFromFile('../src/data/glossaryTerms.ts');
    const videosModule = await getDataFromFile('../src/data/videoPages.ts');
    const coastalModule = await getDataFromFile('../src/data/coastalStates.ts');
    const wildfireModule = await getDataFromFile('../src/data/wildfireStates.ts');

    const states = statesModule?.STATES || [];
    const blogPosts = blogModule?.BLOG_POSTS || [];
    const glossaryTerms = glossaryModule?.GLOSSARY_TERMS || [];
    const videoPages = videosModule?.VIDEO_PAGES || [];
    const coastalStates = coastalModule?.COASTAL_STATES || [];
    const wildfireStates = wildfireModule?.WILDFIRE_STATES || [];

    // Generate all sitemaps
    const sitemaps = {
      'sitemap_index.xml': generateSitemapIndex(),
      'sitemap-main.xml': generateMainSitemap(),
      'sitemap-states.xml': generateStatesSitemap(states),
      'sitemap-blog.xml': generateBlogSitemap(blogPosts),
      'sitemap-glossary.xml': generateGlossarySitemap(glossaryTerms),
      'sitemap-videos.xml': generateVideosSitemap(videoPages),
      'sitemap-specialty.xml': generateSpecialtySitemap(coastalStates, wildfireStates),
    };

    // Write all sitemap files
    Object.entries(sitemaps).forEach(([filename, content]) => {
      const filepath = path.join(publicDir, filename);
      fs.writeFileSync(filepath, content, 'utf-8');
      console.log(`✅ Generated ${filename}`);
    });

    // Also write the main sitemap.xml as a copy of sitemap_index.xml for compatibility
    fs.writeFileSync(
      path.join(publicDir, 'sitemap.xml'),
      sitemaps['sitemap_index.xml'],
      'utf-8'
    );
    console.log('✅ Generated sitemap.xml (index)');

    console.log('\n🎉 All sitemaps generated successfully!');
    console.log(`📅 Generated on: ${TODAY}`);
    console.log(`📊 Statistics:`);
    console.log(`   - States: ${states.length}`);
    console.log(`   - Blog Posts: ${blogPosts.filter((p: any) => p.published).length}`);
    console.log(`   - Glossary Terms: ${glossaryTerms.length}`);
    console.log(`   - Video Pages: ${videoPages.length}`);
    console.log(`   - Coastal States: ${coastalStates.length}`);
    console.log(`   - Wildfire States: ${wildfireStates.length}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
};

// Run the generator
generateAllSitemaps();
