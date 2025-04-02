import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages";
import PortfolioPage from "./pages/portfolio";
import ServicesPage from "./pages/services";
import SkillsTimelinePage from "./pages/skillstimeline";
import PricingPage from "./pages/pricing";
import HostingPlans from "./pages/hosting-plans.tsx";
import ContactPage from "./pages/contact.tsx";


const App = () => (
  <HelmetProvider>
  <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/skills-timeline" element={<SkillsTimelinePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/hosting-plans" element={<HostingPlans />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
  </ThemeProvider>
  </HelmetProvider>
);

export default App;
  