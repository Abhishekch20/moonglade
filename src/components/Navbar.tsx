import { useState } from "react";

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

  return (
    <nav className="fixed top-3 left-3 right-3 lg:left-10 lg:right-10 z-50 overflow-visible rounded-2xl glass">
      <div className="container mx-auto px-6 lg:px-12 " >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Moonglade Atelier" 
              className="h-16 lg:h-16 sm:h-8 lg:w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-lg">
            <a href="/" className="nav-link py-2 font-heading">Home</a>
            <a href="/about" className="nav-link py-2 font-heading">About Us</a>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className=" font-heading flex items-center gap-1 py-2">
                <a href="/services" className="nav-link py-2 font-heading">Services</a>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 pt-2 transition-all duration-300",
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                )}
              >
                <div className="glass rounded-lg p-2 min-w-[200px] shadow-lg">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2.5 my-1 text-sm text-foreground font-heading nav-link hover:text-foreground bg-muted rounded-md transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/portfolio" className="nav-link py-2 font-heading">Portfolio</a>
            <a href="/blog" className="nav-link py-2 font-heading">Blogs</a>
            
            <a href="/careers" className="nav-link py-2 font-heading">Careers</a>
            
            <Button variant="slanted" size="default" className="px-6 font-heading">
              <a href="/contact" className="tracking-widest text-base">Contact Us</a>
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
            <a href="/" className="block nav-link py-2 font-heading">Home</a>
            <button
              className="flex items-center justify-between w-full py-2 text-muted-foreground"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/portfolio" className="block py-2 nav-link font-heading">Portfolio</a>
          <a href="/blog" className="block py-2 nav-link  font-heading">Blogs</a>
          <a href="/about" className="block nav-link py-2 font-heading">About Us</a>
          <a href="/careers" className="block nav-link py-2 font-heading">Careers</a>
          <Button variant="slanted" className="w-full mt-4 ">
            <a href="/contact" className="tracking-widest font-heading text-lg">Contact Us</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
