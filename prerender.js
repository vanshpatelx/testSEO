import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Mock browser globals for SSR
global.localStorage = {
  getItem: () => null,
  setItem: () => { },
  removeItem: () => { },
  clear: () => { }
};
global.sessionStorage = {
  getItem: () => null,
  setItem: () => { },
  removeItem: () => { },
  clear: () => { }
};
global.window = {};

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Import data from source files (these are bundled into server build)
let blogPosts = []
let glossaryTerms = []
let videoPages = []

try {
  // Try to import from the server build
  const blogModule = await import('./src/data/blogPosts.ts')
  blogPosts = blogModule.BLOG_POSTS || []

  const glossaryModule = await import('./src/data/glossaryTerms.ts')
  glossaryTerms = glossaryModule.GLOSSARY_TERMS || []

  const videoModule = await import('./src/data/videoPages.ts')
  videoPages = videoModule.VIDEO_PAGES || []
} catch (error) {
  console.warn('Warning: Could not import data files:', error.message)
}

// Static page routes from src/pages
const staticRoutes = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? `/` : `/${name}`
  })

// Dynamic blog post routes
const blogRoutes = blogPosts
  .filter(post => post.published)
  .map(post => `/blog/${post.slug}`)

// Dynamic glossary routes
const glossaryRoutes = glossaryTerms
  .map(term => `/glossary/${term.slug}`)

// Dynamic video routes
const videoRoutes = videoPages
  .map(video => `/video-library/${video.slug}`)

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...blogRoutes,
  ...glossaryRoutes,
  ...videoRoutes
]

console.log(`\n🎨 Pre-rendering ${allRoutes.length} routes...`)
console.log(`   - ${staticRoutes.length} static pages`)
console.log(`   - ${blogRoutes.length} blog posts`)
console.log(`   - ${glossaryRoutes.length} glossary terms`)
console.log(`   - ${videoRoutes.length} video pages\n`)

  ; (async () => {
    let successCount = 0
    let errorCount = 0

    for (const url of allRoutes) {
      try {
        const appHtml = render(url);
        const html = template.replace(`<!--app-html-->`, appHtml)

        const filePath = `dist${url === '/' ? '/index' : url}.html`

        // Create directory if it doesn't exist
        const dir = path.dirname(toAbsolute(filePath))
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('✓', filePath)
        successCount++
      } catch (error) {
        console.error('✗ Failed:', url, '-', error.message)
        errorCount++
      }
    }

    console.log(`\n✅ Pre-rendering complete: ${successCount} successful, ${errorCount} failed\n`)
  })()
