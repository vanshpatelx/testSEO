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
let states = []
let coastalStates = []
let wildfireStates = []

try {
  // Try to import from the server build
  const blogModule = await import('./src/data/blogPosts.ts')
  blogPosts = blogModule.BLOG_POSTS || []

  const glossaryModule = await import('./src/data/glossaryTerms.ts')
  glossaryTerms = glossaryModule.GLOSSARY_TERMS || []

  const videoModule = await import('./src/data/videoPages.ts')
  videoPages = videoModule.VIDEO_PAGES || []

  const statesModule = await import('./src/data/states.ts')
  states = statesModule.STATES || []

  const coastalModule = await import('./src/data/coastalStates.ts')
  coastalStates = coastalModule.COASTAL_STATES || []

  const wildfireModule = await import('./src/data/wildfireStates.ts')
  wildfireStates = wildfireModule.WILDFIRE_STATES || []
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

// State-specific routes
const stateRoutes = states
  .map(state => `/${state.slug}-high-risk-home-insurance`)

// Coastal insurance state routes
const coastalRoutes = coastalStates
  .map(state => `/coastal-insurance/${state.slug}`)

// Wildfire insurance state routes
const wildfireRoutes = wildfireStates
  .map(state => `/wildfire-insurance/${state.slug}`)

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...blogRoutes,
  ...glossaryRoutes,
  ...videoRoutes,
  ...stateRoutes,
  ...coastalRoutes,
  ...wildfireRoutes
]

console.log(`\n🎨 Pre-rendering ${allRoutes.length} routes...`)
console.log(`   - ${staticRoutes.length} static pages`)
console.log(`   - ${blogRoutes.length} blog posts`)
console.log(`   - ${glossaryRoutes.length} glossary terms`)
console.log(`   - ${videoRoutes.length} video pages`)
console.log(`   - ${stateRoutes.length} state pages`)
console.log(`   - ${coastalRoutes.length} coastal insurance pages`)
console.log(`   - ${wildfireRoutes.length} wildfire insurance pages\n`)

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
