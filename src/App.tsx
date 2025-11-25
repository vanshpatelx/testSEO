// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from 'react-helmet-async';
// import { lazy, Suspense } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import ErrorBoundary from './components/ErrorBoundary';
// import SkipLink from './components/SkipLink';
// import { PageLoader } from './components/LoadingSpinner';
// import IntakeForm from './components/IntakeForm';
// import { IntakeFormProvider, useIntakeFormContext } from './contexts/IntakeFormContext';
// import HomePage from './pages/HomePage';

// // Lazy load pages for code splitting
// const AboutPage = lazy(() => import('./pages/AboutPage'));
// const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
// const HighRiskSpecialistsPage = lazy(() => import('./pages/HighRiskSpecialistsPage'));
// const LicensedAgentsPage = lazy(() => import('./pages/LicensedAgentsPage'));
// const FreeReferralsPage = lazy(() => import('./pages/FreeReferralsPage'));
// const StatesPage = lazy(() => import('./pages/StatesPage'));
// const StatePage = lazy(() => import('./pages/StatePage'));
// const FAQPage = lazy(() => import('./pages/FAQPage'));
// const BlogPage = lazy(() => import('./pages/BlogPage'));
// const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
// const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
// const GlossaryTermPage = lazy(() => import('./pages/GlossaryTermPage'));
// const VideoLibraryPage = lazy(() => import('./pages/VideoLibraryPage'));
// const VideoPage = lazy(() => import('./pages/VideoPage'));
// const SitemapPage = lazy(() => import('./pages/SitemapPage'));
// const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
// const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
// const WildfireInsurancePage = lazy(() => import('./pages/WildfireInsurancePage'));
// const CoastalInsurancePage = lazy(() => import('./pages/CoastalInsurancePage'));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const queryClient = new QueryClient();

// function AppContent() {
//   const { isFormOpen, closeForm, selectedState } = useIntakeFormContext();
  
//   return (
//     <>
//       <SkipLink />
//       <ScrollToTop />
      
//       <div className="min-h-screen bg-background flex flex-col">
//         <Header />
//         <main id="main-content" className="flex-1" tabIndex={-1}>
//           <Suspense fallback={<PageLoader />}>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/how-it-works" element={<HowItWorksPage />} />
//               <Route path="/high-risk-specialists" element={<HighRiskSpecialistsPage />} />
//               <Route path="/licensed-agents" element={<LicensedAgentsPage />} />
//               <Route path="/free-referrals" element={<FreeReferralsPage />} />
//               <Route path="/states" element={<StatesPage />} />
//               <Route path="/faq" element={<FAQPage />} />
//               <Route path="/blog" element={<BlogPage />} />
//               <Route path="/blog/:slug" element={<BlogPostPage />} />
//               <Route path="/glossary" element={<GlossaryPage />} />
//               <Route path="/glossary/:slug" element={<GlossaryTermPage />} />
//               <Route path="/video-library" element={<VideoLibraryPage />} />
//               <Route path="/video-library/:slug" element={<VideoPage />} />
//               <Route path="/sitemap" element={<SitemapPage />} />
//               <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//               <Route path="/terms-conditions" element={<TermsConditionsPage />} />
//               <Route path="/wildfire-insurance/:slug" element={<WildfireInsurancePage />} />
//               <Route path="/coastal-insurance/:slug" element={<CoastalInsurancePage />} />
//               <Route path="/:slug" element={<StatePage />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Suspense>
//         </main>
//         <Footer />
//       </div>
//       <IntakeForm 
//         isOpen={isFormOpen}
//         onClose={closeForm}
//         initialState={selectedState}
//       />
//     </>
//   );
// }

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <HelmetProvider>
//         <ErrorBoundary>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <IntakeFormProvider>
//               <AppContent />
//             </IntakeFormProvider>
//           </BrowserRouter>
//         </ErrorBoundary>
//       </HelmetProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// src/App.tsx
import React, { useEffect, useState } from "react";
import { Toaster as LocalToaster } from "@/components/ui/toaster"; // named so we don't confuse with client-only wrapper
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import { PageLoader } from './components/LoadingSpinner';
import IntakeForm from './components/IntakeForm';
import { IntakeFormProvider, useIntakeFormContext } from './contexts/IntakeFormContext';
import HomePage from './pages/HomePage';

// Lazy pages (same as you had)
const AboutPage = lazy(() => import('./pages/AboutPage'));
// ... other lazy imports unchanged
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AppContent() {
  const { isFormOpen, closeForm, selectedState } = useIntakeFormContext();

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            {/* routes unchanged */}
            {/* ... Routes and Route list from your original AppContent */}
          </Suspense>
        </main>
        <Footer />
      </div>

      <IntakeForm
        isOpen={isFormOpen}
        onClose={closeForm}
        initialState={selectedState}
      />
    </>
  );
}

/** ClientOnly: prevents rendering of children during SSR.
 *  Good for toast libraries, notifications, or anything that uses document/window.
 */
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <ErrorBoundary>
          {/* Render DOM-only UI inside ClientOnly */}
          <ClientOnly>
            <LocalToaster />
            <SonnerToaster />
          </ClientOnly>

          {/* NOTE: BrowserRouter is *not* inside App - the entry file should provide it */}
          <IntakeFormProvider>
            <AppContent />
          </IntakeFormProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
