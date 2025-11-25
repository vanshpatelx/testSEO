import { spawn, exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data to get all routes
import { STATES } from '../src/data/states';
import { BLOG_POSTS } from '../src/data/blogPosts';
import { GLOSSARY_TERMS } from '../src/data/glossaryTerms';
import { VIDEO_PAGES } from '../src/data/videoPages';
import { COASTAL_STATES } from '../src/data/coastalStates';
import { WILDFIRE_STATES } from '../src/data/wildfireStates';

const BASE_URL = 'http://localhost:4173';
const DIST_DIR = path.resolve(__dirname, '../dist');

// Generate all routes to pre-render
function getAllRoutes(): string[] {
  const routes = [
    '/',
    '/about',
    '/how-it-works',
    '/faq',
    '/blog',
    '/glossary',
    '/videos',
    '/states',
    '/high-risk-specialists',
    '/free-referrals',
    '/coastal-insurance',
    '/wildfire-insurance',
    '/licensed-agents',
    '/terms',
    '/privacy',
    '/sitemap',
  ];

  // Add state pages
  STATES.forEach(state => {
    routes.push(`/state/${state.slug}`);
  });

  // Add coastal insurance pages
  COASTAL_STATES.forEach(state => {
    routes.push(`/state/${state.slug}/coastal-insurance`);
  });

  // Add wildfire insurance pages
  WILDFIRE_STATES.forEach(state => {
    routes.push(`/state/${state.slug}/wildfire-insurance`);
  });

  // Add blog posts
  BLOG_POSTS.forEach(post => {
    routes.push(`/blog/${post.slug}`);
  });

  // Add glossary terms
  GLOSSARY_TERMS.forEach(term => {
    routes.push(`/glossary/${term.slug}`);
  });

  // Add video pages
  VIDEO_PAGES.forEach(video => {
    routes.push(`/videos/${video.slug}`);
  });

  return routes;
}

async function prerenderRoutes() {
  console.log('🚀 Starting pre-rendering process...');

  // Start preview server in background
  console.log('📦 Starting preview server...');
  const serverProcess = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    detached: true,
    stdio: 'ignore'
  });

  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 5000));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const routes = getAllRoutes();
  console.log(`📄 Pre-rendering ${routes.length} routes...`);

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({ width: 1920, height: 1080 });

      const url = `${BASE_URL}${route}`;
      console.log(`  ⏳ Rendering: ${route}`);

      // Navigate and wait for content
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });

      // Wait a bit more for React Helmet to update meta tags
      await page.waitForTimeout(1000);

      // Get the rendered HTML
      const html = await page.content();

      // Determine file path
      let filePath: string;
      if (route === '/') {
        filePath = path.join(DIST_DIR, 'index.html');
      } else {
        const routePath = route.endsWith('/') ? route.slice(0, -1) : route;
        const dir = path.join(DIST_DIR, routePath);
        fs.mkdirSync(dir, { recursive: true });
        filePath = path.join(dir, 'index.html');
      }

      // Write the HTML file
      fs.writeFileSync(filePath, html, 'utf-8');
      
      successCount++;
      console.log(`  ✅ Saved: ${filePath}`);

      await page.close();
    } catch (error) {
      errorCount++;
      console.error(`  ❌ Error rendering ${route}:`, error.message);
    }
  }

  await browser.close();

  // Kill preview server
  try {
    if (serverProcess && !serverProcess.killed) {
      serverProcess.kill();
    }
    // Also try to kill by port as fallback
    exec('npx kill-port 4173', { stdio: 'ignore' });
  } catch (e) {
    // Ignore errors
  }

  console.log('\n✨ Pre-rendering complete!');
  console.log(`  ✅ Success: ${successCount} routes`);
  console.log(`  ❌ Errors: ${errorCount} routes`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerenderRoutes().catch(error => {
  console.error('Fatal error during pre-rendering:', error);
  process.exit(1);
});
