import { STATES } from '../data/states';
import { BLOG_POSTS } from '../data/blogPosts';
import { GLOSSARY_TERMS } from '../data/glossaryTerms';
import { VIDEO_PAGES } from '../data/videoPages';
import { COASTAL_STATES } from '../data/coastalStates';
import { WILDFIRE_STATES } from '../data/wildfireStates';

const BASE_URL = 'https://highriskhomeowners.com';

// Generate main sitemap index
export function generateSitemap(): string {
  const now = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-main.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-states.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-glossary.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-videos.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-specialty.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Generate main pages sitemap
export function generateMainSitemap(): string {
  const now = new Date().toISOString();
  
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about/', priority: '0.9', changefreq: 'monthly' },
    { url: '/how-it-works/', priority: '0.9', changefreq: 'monthly' },
    { url: '/high-risk-specialists/', priority: '0.9', changefreq: 'monthly' },
    { url: '/licensed-agents/', priority: '0.9', changefreq: 'monthly' },
    { url: '/free-referrals/', priority: '0.9', changefreq: 'monthly' },
    { url: '/faq/', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/', priority: '0.8', changefreq: 'weekly' },
    { url: '/glossary/', priority: '0.7', changefreq: 'monthly' },
    { url: '/states/', priority: '0.8', changefreq: 'weekly' },
    { url: '/high-risk/', priority: '0.7', changefreq: 'monthly' },
    { url: '/sitemap/', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-conditions/', priority: '0.3', changefreq: 'yearly' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  mainPages.forEach(page => {
    xml += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate states sitemap
export function generateStatesSitemap(): string {
  const now = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/${state.slug}-high-risk-home-insurance/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate blog sitemap
export function generateBlogSitemap(): string {
  const publishedPosts = BLOG_POSTS.filter(post => post.published);
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  publishedPosts.forEach(post => {
    xml += `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}/</loc>
    <lastmod>${post.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate glossary sitemap
export function generateGlossarySitemap(): string {
  const now = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  GLOSSARY_TERMS.forEach(term => {
    xml += `
  <url>
    <loc>${BASE_URL}/glossary/${term.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate videos sitemap
export function generateVideosSitemap(): string {
  const now = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  VIDEO_PAGES.forEach(video => {
    xml += `
  <url>
    <loc>${BASE_URL}/high-risk/${video.slug}/</loc>
    <lastmod>${video.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate specialty pages sitemap
export function generateSpecialtySitemap(): string {
  const now = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add wildfire insurance pages
  WILDFIRE_STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/wildfire-insurance/${state.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add coastal insurance pages
  COASTAL_STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/coastal-insurance/${state.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generate complete sitemap with all pages
export function generateCompleteSitemap(): string {
  const now = new Date().toISOString();
  const publishedPosts = BLOG_POSTS.filter(post => post.published);
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about/', priority: '0.9', changefreq: 'monthly' },
    { url: '/how-it-works/', priority: '0.9', changefreq: 'monthly' },
    { url: '/high-risk-specialists/', priority: '0.9', changefreq: 'monthly' },
    { url: '/licensed-agents/', priority: '0.9', changefreq: 'monthly' },
    { url: '/free-referrals/', priority: '0.9', changefreq: 'monthly' },
    { url: '/faq/', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/', priority: '0.8', changefreq: 'weekly' },
    { url: '/glossary/', priority: '0.7', changefreq: 'monthly' },
    { url: '/states/', priority: '0.8', changefreq: 'weekly' },
    { url: '/high-risk/', priority: '0.7', changefreq: 'monthly' },
    { url: '/sitemap/', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms-conditions/', priority: '0.3', changefreq: 'yearly' }
  ];

  mainPages.forEach(page => {
    xml += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // State pages
  STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/${state.slug}-high-risk-home-insurance/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Blog posts
  publishedPosts.forEach(post => {
    xml += `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}/</loc>
    <lastmod>${post.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Glossary terms
  GLOSSARY_TERMS.forEach(term => {
    xml += `
  <url>
    <loc>${BASE_URL}/glossary/${term.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  // Video pages
  VIDEO_PAGES.forEach(video => {
    xml += `
  <url>
    <loc>${BASE_URL}/high-risk/${video.slug}/</loc>
    <lastmod>${video.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Wildfire insurance pages
  WILDFIRE_STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/wildfire-insurance/${state.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Coastal insurance pages
  COASTAL_STATES.forEach(state => {
    xml += `
  <url>
    <loc>${BASE_URL}/coastal-insurance/${state.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Download main sitemap
export function downloadSitemap(): void {
  const sitemap = generateCompleteSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-complete.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Download individual sitemaps
export function downloadMainSitemap(): void {
  const sitemap = generateMainSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-main.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadStatesSitemap(): void {
  const sitemap = generateStatesSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-states.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadBlogSitemap(): void {
  const sitemap = generateBlogSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-blog.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadGlossarySitemap(): void {
  const sitemap = generateGlossarySitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-glossary.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadVideosSitemap(): void {
  const sitemap = generateVideosSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-videos.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSpecialtySitemap(): void {
  const sitemap = generateSpecialtySitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap-specialty.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}