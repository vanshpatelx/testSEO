import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[hsl(var(--gray-50))] flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card rounded-2xl shadow-lg p-8 text-center border border-border">
            <div className="w-16 h-16 bg-[hsl(var(--destructive)_/_0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-[hsl(var(--destructive))]" />
            </div>
            <h1 className="text-2xl font-bold text-card-foreground mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => (window.location.href = '/')}
                className="w-full bg-[hsl(var(--primary))] text-primary-foreground py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Go to Homepage
              </button>
              <button
                onClick={async () => {
                  try {
                    if ('serviceWorker' in navigator) {
                      const regs = await navigator.serviceWorker.getRegistrations();
                      await Promise.all(regs.map((r) => r.unregister()));
                    }
                    if ('caches' in window) {
                      const keys = await caches.keys();
                      await Promise.all(keys.map((k) => caches.delete(k)));
                    }
                    // Clear local/session storage as a last resort
                    try { localStorage.clear(); } catch {}
                    try { sessionStorage.clear(); } catch {}
                  } catch (e) {
                    console.error('Failed to clear caches/service workers', e);
                  } finally {
                    window.location.reload();
                  }
                }}
                className="w-full bg-background text-foreground py-3 px-6 rounded-lg border border-border hover:opacity-90 transition-opacity font-semibold"
                aria-label="Clear cached files and reload the app to fix potential offline cache issues"
              >
                Reset & Reload (fix blank screen)
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
