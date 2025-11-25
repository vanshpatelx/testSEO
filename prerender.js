// import fs from 'node:fs'
// import path from 'node:path'
// import url from 'node:url'

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
// const toAbsolute = (p) => path.resolve(__dirname, p)

// const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
// const { render } = await import('./dist/server/entry-server.js')

// const routesToPrerender = fs
//   .readdirSync(toAbsolute('src/pages'))
//   .map((file) => {
//     const name = file.replace(/\.tsx$/, '').toLowerCase()
//     return name === 'index' ? '/' : `/${name}`
//   })

// ;(async () => {
//   for (const url of routesToPrerender) {
//     const appHtml = render(url);
//     const html = template.replace('<!--app-html-->', appHtml)

//     const filePath = `dist${url === '/' ? '/index' : url}.html`
//     fs.writeFileSync(toAbsolute(filePath), html)
//     console.log('pre-rendered:', filePath)
//   }
// })()


// // prerender.js (replace whole file with this)
// import fs from 'node:fs';
// import path from 'node:path';
// import url from 'node:url';

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
// const toAbsolute = (p) => path.resolve(__dirname, p);

// // --- Temporary polyfills (run BEFORE importing the server bundle) ---
// if (typeof globalThis.localStorage === 'undefined') {
//   globalThis.localStorage = (() => {
//     const store = new Map();
//     return {
//       getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
//       setItem(k, v) { store.set(String(k), String(v)); },
//       removeItem(k) { store.delete(String(k)); },
//       clear() { store.clear(); },
//     };
//   })();
//   console.log('[prerender] polyfilled localStorage');
// }

// if (typeof globalThis.sessionStorage === 'undefined') {
//   globalThis.sessionStorage = (() => {
//     const store = new Map();
//     return {
//       getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
//       setItem(k, v) { store.set(String(k), String(v)); },
//       removeItem(k) { store.delete(String(k)); },
//       clear() { store.clear(); },
//     };
//   })();
//   console.log('[prerender] polyfilled sessionStorage');
// }

// // Minimal window/document stubs (some libs read window/document during SSR)
// if (typeof globalThis.window === 'undefined') {
//   globalThis.window = {
//     location: { pathname: '/' },
//     addEventListener: () => {},
//     removeEventListener: () => {},
//     document: {},
//     navigator: { userAgent: 'node' },
//   };
// }
// if (typeof globalThis.document === 'undefined') {
//   globalThis.document = {
//     createElement: () => ({ style: {} }),
//     createElementNS: () => ({ style: {} }),
//     getElementById: () => null,
//     querySelector: () => null,
//   };
// }

// // --- load template ---
// const templatePath = toAbsolute('dist/index.html');
// if (!fs.existsSync(templatePath)) {
//   console.error(`[prerender] ERROR: template not found at ${templatePath}`);
//   process.exit(1);
// }
// const template = fs.readFileSync(templatePath, 'utf-8');

// // --- import server bundle AFTER polyfills ---
// let renderFn;
// try {
//   const mod = await import('./dist/server/entry-server.js');
//   // support: export { render }, export default, or module exports shape
//   renderFn = mod.render ?? mod.default ?? mod;
//   if (typeof renderFn !== 'function') {
//     console.warn('[prerender] Warning: render export is not a function; attempting to call module directly.');
//   }
// } catch (err) {
//   console.error('[prerender] Failed to import server bundle:', err);
//   process.exit(1);
// }

// // --- build routes list ---
// const pagesDir = toAbsolute('src/pages');
// if (!fs.existsSync(pagesDir)) {
//   console.error(`[prerender] ERROR: pages directory not found at ${pagesDir}`);
//   process.exit(1);
// }

// const routesToPrerender = fs
//   .readdirSync(pagesDir)
//   .filter((f) => /\.(tsx|ts|jsx|js)$/.test(f))
//   .map((file) => {
//     const name = file.replace(/\.(tsx|ts|jsx|js)$/, '').toLowerCase();
//     return name === 'index' ? '/' : `/${name}`;
//   });

// (async () => {
//   for (const routeUrl of routesToPrerender) {
//     try {
//       const appHtml = await (typeof renderFn === 'function' ? renderFn(routeUrl) : renderFn);
//       const html = template.replace('<!--app-html-->', String(appHtml ?? ''));

//       const outFile = routeUrl === '/' ? '/index.html' : `${routeUrl}.html`;
//       const filePath = `dist${outFile}`;
//       const absPath = toAbsolute(filePath);
//       fs.mkdirSync(path.dirname(absPath), { recursive: true });
//       fs.writeFileSync(absPath, html, 'utf-8');

//       console.log('pre-rendered:', filePath);
//     } catch (err) {
//       console.error(`pre-render failed for route "${routeUrl}":`, err);
//     }
//   }
//   console.log('[prerender] done');
// })();


// // prerender.js
// import fs from 'node:fs';
// import path from 'node:path';
// import url from 'node:url';

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
// const toAbsolute = (p) => path.resolve(__dirname, p);

// // --------- Storage polyfills ----------
// if (typeof globalThis.localStorage === 'undefined') {
//   globalThis.localStorage = (() => {
//     const store = new Map();
//     return {
//       getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
//       setItem(k, v) { store.set(String(k), String(v)); },
//       removeItem(k) { store.delete(String(k)); },
//       clear() { store.clear(); },
//     };
//   })();
//   console.log('[prerender] polyfilled localStorage');
// }
// if (typeof globalThis.sessionStorage === 'undefined') {
//   globalThis.sessionStorage = (() => {
//     const store = new Map();
//     return {
//       getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
//       setItem(k, v) { store.set(String(k), String(v)); },
//       removeItem(k) { store.delete(String(k)); },
//       clear() { store.clear(); },
//     };
//   })();
//   console.log('[prerender] polyfilled sessionStorage');
// }

// // --------- Minimal DOM polyfill (sufficient for many UI libs) ----------
// if (typeof globalThis.document === 'undefined' || typeof globalThis.window === 'undefined') {
//   // simple element factory
//   function makeElement(tagName = 'div') {
//     const attrs = Object.create(null);
//     const children = [];
//     const listeners = Object.create(null);
//     const el = {
//       tagName: tagName.toUpperCase(),
//       children,
//       attributes: attrs,
//       style: {},
//       innerHTML: '',
//       textContent: '',
//       className: '',
//       setAttribute(name, value) { attrs[name] = String(value); },
//       getAttribute(name) { return attrs[name] ?? null; },
//       removeAttribute(name) { delete attrs[name]; },
//       appendChild(child) {
//         children.push(child);
//         return child;
//       },
//       removeChild(child) {
//         const idx = children.indexOf(child);
//         if (idx >= 0) children.splice(idx, 1);
//       },
//       replaceChild(newChild, oldChild) {
//         const idx = children.indexOf(oldChild);
//         if (idx >= 0) children[idx] = newChild;
//       },
//       addEventListener(name, cb) {
//         (listeners[name] ||= []).push(cb);
//       },
//       removeEventListener(name, cb) {
//         if (!listeners[name]) return;
//         const i = listeners[name].indexOf(cb);
//         if (i >= 0) listeners[name].splice(i, 1);
//       },
//       dispatchEvent(event) {
//         const fns = listeners[event.type] || [];
//         for (const fn of fns) fn(event);
//       },
//       querySelector() { return null; },
//       querySelectorAll() { return []; },
//       classList: {
//         _list: new Set(),
//         add(c) { this._list.add(c); el.className = Array.from(this._list).join(' '); },
//         remove(c) { this._list.delete(c); el.className = Array.from(this._list).join(' '); },
//         contains(c) { return this._list.has(c); },
//       },
//     };
//     return el;
//   }

//   // document stub with head/body & getElementsByTagName
//   const head = makeElement('head');
//   const body = makeElement('body');
//   const documentStub = {
//     head,
//     body,
//     createElement(tag) {
//       return makeElement(tag);
//     },
//     createElementNS(ns, tag) {
//       return makeElement(tag);
//     },
//     createTextNode(text) {
//       return { nodeType: 3, textContent: String(text), toString() { return String(text); } };
//     },
//     getElementsByTagName(name) {
//       // support 'head' and 'body' queries which many libs use
//       const tag = String(name).toLowerCase();
//       if (tag === 'head') return [head];
//       if (tag === 'body') return [body];
//       return [];
//     },
//     getElementById() { return null; },
//     querySelector() { return null; },
//     querySelectorAll() { return []; },
//     addEventListener() {},
//     removeEventListener() {},
//     documentElement: {
//       appendChild(el) { /* noop */ },
//     },
//   };

//   const windowStub = {
//     document: documentStub,
//     location: { pathname: '/', href: '/', origin: '' },
//     navigator: { userAgent: 'node' },
//     addEventListener() {},
//     removeEventListener() {},
//     getComputedStyle() { return { getPropertyValue: () => '' }; },
//     requestAnimationFrame(cb) { return setTimeout(cb, 0); },
//     cancelAnimationFrame(id) { clearTimeout(id); },
//     matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
//   };

//   globalThis.window = windowStub;
//   globalThis.document = documentStub;
//   globalThis.HTMLElement = function HTMLElement() {}; // basic constructor
//   globalThis.Node = function Node() {};
//   console.log('[prerender] polyfilled minimal window/document');
// }

// // --------- Template ----------
// const templatePath = toAbsolute('dist/index.html');
// if (!fs.existsSync(templatePath)) {
//   console.error(`[prerender] ERROR: template not found at ${templatePath}`);
//   process.exit(1);
// }
// const template = fs.readFileSync(templatePath, 'utf-8');

// // --------- Import server bundle AFTER polyfills ----------
// let renderFn;
// try {
//   const mod = await import('./dist/server/entry-server.js');
//   renderFn = mod.render ?? mod.default ?? mod;
//   if (typeof renderFn !== 'function') {
//     console.warn('[prerender] Warning: render export is not a function; attempting to call module directly.');
//   }
// } catch (err) {
//   console.error('[prerender] Failed to import server bundle:', err);
//   process.exit(1);
// }

// // --------- Routes ----------
// const pagesDir = toAbsolute('src/pages');
// if (!fs.existsSync(pagesDir)) {
//   console.error(`[prerender] ERROR: pages directory not found at ${pagesDir}`);
//   process.exit(1);
// }
// const routesToPrerender = fs
//   .readdirSync(pagesDir)
//   .filter((f) => /\.(tsx|ts|jsx|js)$/.test(f))
//   .map((file) => {
//     const name = file.replace(/\.(tsx|ts|jsx|js)$/, '').toLowerCase();
//     return name === 'index' ? '/' : `/${name}`;
//   });

// (async () => {
//   for (const routeUrl of routesToPrerender) {
//     try {
//       const appHtml = await (typeof renderFn === 'function' ? renderFn(routeUrl) : renderFn);
//       const html = template.replace('<!--app-html-->', String(appHtml ?? ''));
//       const outFile = routeUrl === '/' ? '/index.html' : `${routeUrl}.html`;
//       const filePath = `dist${outFile}`;
//       const absPath = toAbsolute(filePath);
//       fs.mkdirSync(path.dirname(absPath), { recursive: true });
//       fs.writeFileSync(absPath, html, 'utf-8');
//       console.log('pre-rendered:', filePath);
//     } catch (err) {
//       console.error(`pre-render failed for route "${routeUrl}":`, err);
//     }
//   }
//   console.log('[prerender] done');
// })();




// prerender.js
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);
// ---------- AUTO-TERMINATE (NEW) ----------
/**
 * Auto-terminate the prerender process if it runs longer than the limit.
 * Default: 60000 ms (1 minute). Override with PRERENDER_TIMEOUT_MS env var.
 */
const AUTO_TERMINATE_MS = Number(process.env.PRERENDER_TIMEOUT_MS ?? 60000);
let _autoKillTimer = setTimeout(() => {
  console.error(`[prerender] auto-terminate: time limit reached (${AUTO_TERMINATE_MS}ms). Forcing exit.`);
  // Use non-zero exit code to indicate timeout failure
  process.exit(1);
}, AUTO_TERMINATE_MS);

// keep a helper to cancel the timer when work completes
function clearAutoTerminate() {
  if (_autoKillTimer) {
    clearTimeout(_autoKillTimer);
    _autoKillTimer = null;
    console.log('[prerender] auto-terminate cleared');
  }
}
// -----------------------------------------

// --------- Storage polyfills ----------
if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = (() => {
    const store = new Map();
    return {
      getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
      setItem(k, v) { store.set(String(k), String(v)); },
      removeItem(k) { store.delete(String(k)); },
      clear() { store.clear(); },
    };
  })();
  console.log('[prerender] polyfilled localStorage');
}
if (typeof globalThis.sessionStorage === 'undefined') {
  globalThis.sessionStorage = (() => {
    const store = new Map();
    return {
      getItem(k) { return store.has(String(k)) ? store.get(String(k)) : null; },
      setItem(k, v) { store.set(String(k), String(v)); },
      removeItem(k) { store.delete(String(k)); },
      clear() { store.clear(); },
    };
  })();
  console.log('[prerender] polyfilled sessionStorage');
}


// --------- Minimal DOM factory ----------
function makeElement(tagName = 'div') {
  const attrs = new Map();
  const children = [];
  const listeners = {};
  const el = {
    tagName: String(tagName).toUpperCase(),
    children,
    attributes: attrs,
    style: {},
    innerHTML: '',
    textContent: '',
    className: '',
    setAttribute(name, value) { attrs.set(String(name), String(value)); },
    getAttribute(name) { return attrs.has(String(name)) ? attrs.get(String(name)) : null; },
    hasAttribute(name) { return attrs.has(String(name)); },
    removeAttribute(name) { attrs.delete(String(name)); },
    appendChild(child) { children.push(child); return child; },
    removeChild(child) { const i = children.indexOf(child); if (i >= 0) children.splice(i, 1); },
    replaceChild(newChild, oldChild) { const i = children.indexOf(oldChild); if (i >= 0) children[i] = newChild; },
    addEventListener(name, cb) { (listeners[name] ||= []).push(cb); },
    removeEventListener(name, cb) { if (!listeners[name]) return; const i = listeners[name].indexOf(cb); if (i >= 0) listeners[name].splice(i, 1); },
    dispatchEvent(event) { (listeners[event.type] || []).forEach(fn => fn(event)); },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getElementsByTagName() { return []; },
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); el.className = Array.from(this._set).join(' '); },
      remove(c) { this._set.delete(c); el.className = Array.from(this._set).join(' '); },
      contains(c) { return this._set.has(c); },
    },
  };
  return el;
}

// --------- document/window polyfill (improved) ----------
if (typeof globalThis.document === 'undefined' || typeof globalThis.window === 'undefined') {
  const head = makeElement('head');
  const body = makeElement('body');

  const documentStub = {
    head,
    body,
    // documentElement should emulate an <html> element
    documentElement: makeElement('html'),
    createElement(tag) { return makeElement(tag); },
    createElementNS(ns, tag) { return makeElement(tag); },
    createTextNode(text) { return { nodeType: 3, textContent: String(text), toString() { return String(text); } }; },
    getElementsByTagName(name) {
      const tag = String(name).toLowerCase();
      if (tag === 'head') return [head];
      if (tag === 'body') return [body];
      if (tag === 'html') return [documentStub.documentElement];
      return [];
    },
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener() { },
    removeEventListener() { },
  };

  // ensure documentElement has attribute methods (sonner checks getAttribute)
  // makeElement already provides getAttribute/setAttribute - set the prototype to reuse it:
  const htmlEl = documentStub.documentElement;
  // ensure getAttribute exists
  if (typeof htmlEl.getAttribute !== 'function') {
    htmlEl.getAttribute = function (name) { return this.getAttribute ? this.getAttribute(name) : null; };
    htmlEl.setAttribute = function (name, value) { if (this.setAttribute) this.setAttribute(name, value); };
    htmlEl.hasAttribute = function (name) { return this.hasAttribute ? this.hasAttribute(name) : false; };
  }

  const windowStub = {
    document: documentStub,
    location: { pathname: '/', href: '/', origin: '' },
    navigator: { userAgent: 'node' },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() { return { getPropertyValue: () => '' }; },
    requestAnimationFrame(cb) { return setTimeout(cb, 0); },
    cancelAnimationFrame(id) { clearTimeout(id); },
    matchMedia: () => ({ matches: false, addEventListener() { }, removeEventListener() { } }),
  };

  globalThis.window = windowStub;
  globalThis.document = documentStub;
  globalThis.HTMLElement = function HTMLElement() { };
  globalThis.Node = function Node() { };
  console.log('[prerender] polyfilled minimal window/document (improved)');
}
// minimal history shim for createBrowserHistory / BrowserRouter
if (!globalThis.window.history) {
  let _state = null;
  const listeners = [];

  const historyShim = {
    length: 1,
    scrollRestoration: 'auto',
    state: _state,
    pushState(state, title, url) {
      _state = state ?? null;
      this.state = _state;
      // update location.href and pathname similarly so router sees it
      try { globalThis.window.location.href = url; } catch { }
      try { globalThis.window.location.pathname = new URL(url, 'http://localhost').pathname; } catch { }
      listeners.forEach((fn) => fn({ state: _state }));
    },
    replaceState(state, title, url) {
      _state = state ?? null;
      this.state = _state;
      try { globalThis.window.location.href = url; } catch { }
      try { globalThis.window.location.pathname = new URL(url, 'http://localhost').pathname; } catch { }
      listeners.forEach((fn) => fn({ state: _state }));
    },
    back() { },
    forward() { },
    go() { },
    addEventListener(name, cb) {
      if (name === 'popstate') listeners.push(cb);
    },
    removeEventListener(name, cb) {
      if (name === 'popstate') {
        const i = listeners.indexOf(cb);
        if (i >= 0) listeners.splice(i, 1);
      }
    },
  };

  globalThis.window.history = historyShim;
  // ensure location exists & consistent
  globalThis.window.location = globalThis.window.location || { pathname: '/', href: '/', origin: 'http://localhost' };
  console.log('[prerender] polyfilled window.history');
}

// --------- load template ----------
const templatePath = toAbsolute('dist/index.html');
if (!fs.existsSync(templatePath)) {
  console.error(`[prerender] ERROR: template not found at ${templatePath}`);
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf-8');

// --------- import server bundle after polyfills ----------
let renderFn;
try {
  const mod = await import('./dist/server/entry-server.js');
  renderFn = mod.render ?? mod.default ?? mod;
  if (typeof renderFn !== 'function') {
    console.warn('[prerender] Warning: render export is not a function; attempting to call module directly.');
  }
} catch (err) {
  console.error('[prerender] Failed to import server bundle:', err);
  process.exit(1);
}

// --------- build routes list ----------
const pagesDir = toAbsolute('src/pages');
if (!fs.existsSync(pagesDir)) {
  console.error(`[prerender] ERROR: pages directory not found at ${pagesDir}`);
  process.exit(1);
}
const routesToPrerender = fs
  .readdirSync(pagesDir)
  .filter((f) => /\.(tsx|ts|jsx|js)$/.test(f))
  .map((file) => {
    const name = file.replace(/\.(tsx|ts|jsx|js)$/, '').toLowerCase();
    return name === 'index' ? '/' : `/${name}`;
  });

// // --------- prerender loop ----------
// (async () => {
//   for (const routeUrl of routesToPrerender) {
//     try {
//       const appHtml = await (typeof renderFn === 'function' ? renderFn(routeUrl) : renderFn);
//       const html = template.replace('<!--app-html-->', String(appHtml ?? ''));
//       const outFile = routeUrl === '/' ? '/index.html' : `${routeUrl}.html`;
//       const filePath = `dist${outFile}`;
//       const absPath = toAbsolute(filePath);
//       fs.mkdirSync(path.dirname(absPath), { recursive: true });
//       fs.writeFileSync(absPath, html, 'utf-8');
//       console.log('pre-rendered:', filePath);
//     } catch (err) {
//       console.error(`pre-render failed for route "${routeUrl}":`, err);
//     }
//   }
//   console.log('[prerender] done');
// })()



// --------- prerender loop ----------
(async () => {
  try {
    for (const routeUrl of routesToPrerender) {
      try {
        const appHtml = await (typeof renderFn === 'function' ? renderFn(routeUrl) : renderFn);
        const html = template.replace('<!--app-html-->', String(appHtml ?? ''));
        const outFile = routeUrl === '/' ? '/index.html' : `${routeUrl}.html`;
        const filePath = `dist${outFile}`;
        const absPath = toAbsolute(filePath);
        fs.mkdirSync(path.dirname(absPath), { recursive: true });
        fs.writeFileSync(absPath, html, 'utf-8');
        console.log('pre-rendered:', filePath);
      } catch (err) {
        console.error(`pre-render failed for route "${routeUrl}":`, err);
      }
    }
    console.log('[prerender] done');

    // finished successfully — cancel auto-terminate and exit cleanly
    clearAutoTerminate();
    process.exit(0);
  } catch (err) {
    console.error('[prerender] Unexpected error in prerender loop:', err);
    clearAutoTerminate();
    process.exit(1);
  }
})();
