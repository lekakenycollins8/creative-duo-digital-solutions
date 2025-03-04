import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages";
import PortfolioPage from "./pages/portfolio";
import ServicesPage from "./pages/services";
import SkillsTimelinePage from "./pages/skillstimeline";
import PricingPage from "./pages/pricing";
import AboutPage from "./pages/about";
import DomainRegistration from "./pages/domain-registration.tsx";
import HostingPlans from "./pages/hosting-plans.tsx";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <ThemeProvider defaultTheme="system" storageKey="app-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/PortfolioPage" element={<PortfolioPage />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/SkillsTimelinePage" element={<SkillsTimelinePage />} />
            <Route path="/PricingPage" element={<PricingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/DomainRegistration" element={<DomainRegistration />} />
            <Route path="/HostingPlans" element={<HostingPlans />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
  </HelmetProvider>
);

export default App;
  