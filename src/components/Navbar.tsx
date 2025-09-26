import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Play, Sparkles, ChevronDown, Map, Camera, Archive, Calendar, Car, Smartphone, Info, MessageCircle, Home, ShoppingBag, Star, CloudSun, Newspaper, Package, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  submenu?: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
};

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

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: Home },
    { 
      name: "Explore Monasteries", 
      href: "/explore",
      icon: Map,
      submenu: [
        { name: "Virtual Tours (360°)", href: "/explore#virtual-tours", icon: Camera },
        { name: "Interactive Map", href: "/explore#map", icon: Map },
        { name: "Nearby Attractions", href: "/explore#attractions", icon: Sparkles }
      ]
    },
    { name: "Digital Archives", href: "/archives", icon: Archive },
    { name: "Events & Festivals", href: "/events", icon: Calendar },
    { 
      name: "Travel & Services", 
      href: "/travel",
      icon: Car,
      submenu: [
        { name: "Transportation", href: "/travel#transport", icon: Car },
        { name: "Homestay Booking", href: "/travel#homestay", icon: Home },
        { name: "Tour Packages", href: "/travel#packages", icon: Package },
        { name: "Tourism Services", href: "/travel#services", icon: Sparkles }
      ]
    },
    { 
      name: "Local Business", 
      href: "/business",
      icon: ShoppingBag,
      submenu: [
        { name: "Handicrafts", href: "/business#handicrafts", icon: ShoppingBag },
        { name: "Local Artisans", href: "/business#artisans", icon: Star },
        { name: "Cultural Products", href: "/business#products", icon: Sparkles }
      ]
    },
    { name: "Tourist Reviews", href: "/reviews", icon: Star },
    { name: "Weather Info", href: "/weather", icon: CloudSun },
    { name: "Newsletter", href: "/newsletter", icon: Newspaper },
    { name: "Audio Guide App", href: "/audio-guide", icon: Smartphone },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 lg:p-4">
      {/* Glassmorphic Capsule Container */}
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-background/10 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-primary/5"
            : "bg-white/5 backdrop-blur-md border border-white/5 shadow-xl shadow-black/10"
        } rounded-full px-3 lg:px-6`}
      >
        <div className="flex items-center justify-between h-12 lg:h-14 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link
              to="/"
              className="text-lg lg:text-xl font-bold bg-gradient-text bg-clip-text text-transparent hover:scale-105 transition-all duration-500 hover:rotate-1 whitespace-nowrap"
              title="Monastery 360: A Digital Heritage Platform for Sikkim's Monasteries"
            >
              🏔️ Monastery 360
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-4xl">
            <div className="flex items-center justify-center space-x-1 overflow-x-auto">
              {navItems.map((item) => {
                if (item.submenu) {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger className="text-foreground/80 hover:text-foreground px-1 py-2 text-xs font-medium transition-all duration-300 hover:scale-105 relative group flex items-center gap-1 bg-transparent border-0 hover:bg-transparent focus:bg-transparent whitespace-nowrap">
                        {item.icon && <item.icon className="h-3 w-3" />}
                        <span className="text-xs">{item.name.length > 12 ? item.name.split(' ')[0] + '...' : item.name}</span>
                        <ChevronDown className="h-2 w-2 transition-transform group-hover:rotate-180" />
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="z-50 bg-background/10 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl min-w-48">
                        {item.submenu.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              to={subItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-primary/10 rounded-xl cursor-pointer"
                            >
                              {subItem.icon && <subItem.icon className="h-4 w-4" />}
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-foreground px-1 py-2 text-xs font-medium transition-all duration-300 hover:scale-105 relative group flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.icon && <item.icon className="h-3 w-3" />}
                    <span className="text-xs">{item.name.length > 8 ? item.name.split(' ')[0] : item.name}</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            <Button variant="hero" size="sm" className="group px-3 py-1.5 text-xs">
              <Map className="h-3 w-3 mr-1" />
              Explore
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
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

      {/* Mobile Navigation Menu - Glassmorphic Capsule */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 mx-4">
          <div className="bg-background/10 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                if (item.submenu) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div
                        className="text-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-2xl flex items-center gap-3"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isMobileMenuOpen
                            ? "fade-in-up 0.3s ease-out forwards"
                            : "none",
                        }}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.name}
                      </div>
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-foreground/70 hover:text-foreground block px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/5 rounded-xl flex items-center gap-3"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                              animationDelay: `${(index * 50) + (subIndex * 25)}ms`,
                              animation: isMobileMenuOpen
                                ? "fade-in-up 0.3s ease-out forwards"
                                : "none",
                            }}
                          >
                            {subItem.icon && <subItem.icon className="h-4 w-4" />}
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-foreground block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-white/5 rounded-2xl flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen
                        ? "fade-in-up 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 px-2">
                <Button
                  variant="heroSecondary"
                  className="w-full group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Camera className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Virtual Tour
                </Button>
                <Button
                  variant="hero"
                  className="w-full group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Map className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

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