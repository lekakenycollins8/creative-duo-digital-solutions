import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4 hover:scale-105 transition-transform">
            {/* Logo */}
            <img src="/duo.svg" alt="Logo" className="h-12 w-12" />

            {/* Text next to the logo */}
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-['Playfair_Display'] gradient-text">
                CreativeDuo
              </span>
              <span className="text-sm text-muted-foreground font-['Inter']">
                Digital Solutions
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/skills-timeline" className="text-muted-foreground hover:text-primary transition-colors">Skills & Timeline</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/hosting-plans" className="text-muted-foreground hover:text-primary transition-colors">Hosting Plans</Link>
            <ThemeToggle />
            <Link
              to="/contact"
              className="custom-gradient text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-up">
            <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors py-2">Home</Link>
            <Link to="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors py-2">Portfolio</Link>
            <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors py-2">Services</Link>
            <Link to="/skills-timeline" className="block text-muted-foreground hover:text-primary transition-colors py-2">Skills & Timeline</Link>
            <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors py-2">Pricing</Link>
            <Link to="/hosting-plans" className="block text-muted-foreground hover:text-primary transition-colors py-2">Hosting Plans</Link>
            <Link
              to="/contact"
              className="block custom-gradient text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
