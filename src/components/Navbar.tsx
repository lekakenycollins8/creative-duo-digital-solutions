import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-4 hover:scale-105 transition-transform">
            {/* Logo */}
            <img src="/duo.svg" alt="Logo" className="h-12 w-12" />

            {/* Text next to the logo */}
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CreativeDuo
              </span>
              <span className="text-sm text-muted-foreground">
                Digital Solutions
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/PortfolioPage" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/ServicesPage" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/SkillsTimelinePage" className="text-muted-foreground hover:text-primary transition-colors">Skills & Timeline</a>
            <a href="/PricingPage" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/AboutPage" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/DomainRegistration" className="text-muted-foreground hover:text-primary transition-colors">Domain Registration</a>
            <a href="/HostingPlans" className="text-muted-foreground hover:text-primary transition-colors">Hosting Plans</a>
            <ThemeToggle />
            <a
              href="/#contact"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/PortfolioPage" className="block text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/ServicesPage" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/SkillsTimelinePage" className="block text-muted-foreground hover:text-primary transition-colors">Skills & Timeline</a>
            <a href="/PricingPage" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/AboutPage" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/DomainRegistration" className="block text-muted-foreground hover:text-primary transition-colors">Domain Registration</a>
            <a href="/HostingPlans" className="block text-muted-foreground hover:text-primary transition-colors">Hosting Plans</a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;