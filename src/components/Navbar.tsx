import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Play, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-gradient-to-b from-background/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Cinema
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="heroSecondary" size="sm" className="group">
              <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Experience
            </Button>
            <Button variant="hero" size="sm" className="group">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Watch Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary p-2 rounded-lg transition-colors duration-300 hover:bg-background/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground block px-3 py-3 text-base font-medium transition-all duration-300 hover:bg-primary/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "fade-in-up 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="px-3 pt-4 pb-2 space-y-3">
              <Button
                variant="heroSecondary"
                className="w-full group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Experience
              </Button>
              <Button
                variant="hero"
                className="w-full group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;