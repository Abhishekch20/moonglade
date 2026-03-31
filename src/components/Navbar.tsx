import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

const services = [
  { name: "Concept Art", href: "/Services/Art" },
  { name: "Game Art", href: "/Services/Animation" },
  { name: "Animation", href: "/Services/PlayerEngagement" },
  { name: "Creative Support", href: "/Services/SlotGameArt" },
  { name: "Porting / Migration", href: "/Services/SlotGameDevelopment" },
];

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-3 left-3 right-3 lg:left-10 lg:right-10 z-50 overflow-visible rounded-2xl glass">
      <div className="container mx-auto px-6 lg:px-12 " >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenus}>
            <img 
              src={logo} 
              alt="Moonglade Atelier" 
              className="h-16 lg:h-16 sm:h-8 lg:w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-lg">
            <Link to="/" className="nav-link py-2 font-heading">Home</Link>
            <Link to="/about" className="nav-link py-2 font-heading">About Us</Link>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="font-heading flex items-center gap-1 py-2">
                <Link to="/services" className="nav-link py-2 font-heading">Services</Link>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </div>
              
              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-300",
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                )}
              >
                <div className="glass rounded-lg p-2 min-w-[200px] shadow-lg">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2.5 my-1 text-sm text-foreground font-heading nav-link hover:text-foreground bg-muted rounded-md transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="nav-link py-2 font-heading">Portfolio</Link>
            <Link to="/blog" className="nav-link py-2 font-heading">Blogs</Link>
            
            <Link to="/careers" className="nav-link py-2 font-heading">Careers</Link>
            
            <Button variant="slanted" size="default" className="px-6 font-heading">
              <Link to="/contact" className="tracking-widest text-base">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden glass border-t border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-4 space-y-4 text-xl">
          <div className="space-y-2">
            <Link to="/" className="block nav-link py-2 font-heading" onClick={closeMenus}>Home</Link>
            <div className="rounded-xl  py-3">
              <div className="flex items-center justify-between gap-4">
                <Link
                  to="/services"
                  className="nav-link py-1 font-heading text-lg tracking-wide text-foreground"
                  onClick={closeMenus}
                >
                  Services
                </Link>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md p-2 text-foreground"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-label="Toggle services menu"
                >
                  <ChevronDown className={cn("w-5 h-5 transition-transform", isServicesOpen && "rotate-180")} />
                </button>
              </div>
            {isServicesOpen && (
              <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMenus}
                    className="block rounded-lg bg-black/20 px-3 py-2 font-heading text-sm tracking-wide text-foreground/90 transition hover:bg-white/10 hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            </div>
          </div>
          <Link to="/portfolio" className="block py-2 nav-link font-heading" onClick={closeMenus}>Portfolio</Link>
          <Link to="/blog" className="block py-2 nav-link font-heading" onClick={closeMenus}>Blogs</Link>
          <Link to="/about" className="block nav-link py-2 font-heading" onClick={closeMenus}>About Us</Link>
          <Link to="/careers" className="block nav-link py-2 font-heading" onClick={closeMenus}>Careers</Link>
          <Button variant="slanted" className="w-full mt-4 ">
            <Link to="/contact" className="tracking-widest font-heading text-lg" onClick={closeMenus}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
