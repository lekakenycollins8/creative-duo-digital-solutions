import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

const Index = lazy(() => import("./pages"));
const PortfolioPage = lazy(() => import("./pages/portfolio"));
const ServicesPage = lazy(() => import("./pages/services"));
// const SkillsTimelinePage = lazy(() => import("./pages/skillstimeline"));
const PricingPage = lazy(() => import("./pages/pricing"));
const HostingPlans = lazy(() => import("./pages/hosting-plans"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/not-found"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" aria-label="Loading page" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/skills-timeline" element={<SkillsTimelinePage />} /> */}
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/hosting-plans" element={<HostingPlans />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;