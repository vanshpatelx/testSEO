// import { createRoot, hydrateRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// const params = new URLSearchParams(window.location.search);
// if (params.has("reset-cache")) {
//   (async () => {
//     try {
//       if ("serviceWorker" in navigator) {
//         const regs = await navigator.serviceWorker.getRegistrations();
//         await Promise.all(regs.map((r) => r.unregister()));
//       }
//       if ("caches" in window) {
//         const keys = await caches.keys();
//         await Promise.all(keys.map((k) => caches.delete(k)));
//       }
//       try { localStorage.clear(); } catch {}
//       try { sessionStorage.clear(); } catch {}
//     } catch (e) {
//       console.error("Failed to reset cache", e);
//     } finally {
//       const url = new URL(window.location.href);
//       url.searchParams.delete("reset-cache");
//       const searchStr = url.searchParams.toString();
//       const newUrl = url.pathname + (searchStr ? `?${searchStr}` : "");
//       window.history.replaceState({}, "", newUrl);
//       window.location.reload();
//     }
//   })();
// } else {
//   createRoot(document.getElementById("root")!).render(<App />);
// }



// src/main.tsx
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('No root element found. Expected an element with id="root" in the HTML.');
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const params = new URLSearchParams(window.location.search);

async function resetAndReload() {
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    try { localStorage.clear(); } catch (e) { /* ignore */ }
    try { sessionStorage.clear(); } catch (e) { /* ignore */ }
  } catch (e) {
    console.error("Failed to reset cache", e);
  } finally {
    const url = new URL(window.location.href);
    url.searchParams.delete("reset-cache");
    const searchStr = url.searchParams.toString();
    const newUrl = url.pathname + (searchStr ? `?${searchStr}` : "");
    // Replace state so users don't keep the flag in history
    window.history.replaceState({}, "", newUrl);
    // Force reload to ensure a fresh page load (no cache, no SW)
    window.location.reload();
  }
}

if (params.has("reset-cache")) {
  // run reset logic and reload before mounting the app
  void resetAndReload();
} else {
  // SSR-aware mount: hydrate in production builds, createRoot in dev
  if (import.meta.env.PROD) {
    // hydrateRoot takes the container and the app element
    hydrateRoot(rootEl, app);
  } else {
    createRoot(rootEl).render(app);
  }
}
