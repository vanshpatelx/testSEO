import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const params = new URLSearchParams(window.location.search);
if (params.has("reset-cache")) {
  (async () => {
    try {
      if ("serviceWorker" in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      }
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
      try { localStorage.clear(); } catch { }
      try { sessionStorage.clear(); } catch { }
    } catch (e) {
      console.error("Failed to reset cache", e);
    } finally {
      const url = new URL(window.location.href);
      url.searchParams.delete("reset-cache");
      const searchStr = url.searchParams.toString();
      const newUrl = url.pathname + (searchStr ? `?${searchStr}` : "");
      window.history.replaceState({}, "", newUrl);
      window.location.reload();
    }
  })();
} else {
  const root = document.getElementById("root")!;
  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Use hydration for SSG in production
  if (import.meta.env.PROD) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}

