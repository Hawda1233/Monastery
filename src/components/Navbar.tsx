import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X, Play, Sparkles, ChevronDown, Map, Camera, Archive, Calendar, Car, Smartphone, Info, MessageCircle, Home, ShoppingBag, Star, CloudSun, Newspaper, Package, LucideIcon, User, LogOut, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

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
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

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
        { name: "Homestay Booking", href: "/homestay", icon: Home },
        { name: "Tour Packages", href: "/travel#packages", icon: Package },
        { name: "Tourism Services", href: "/travel#services", icon: Sparkles }
      ]
    },
    { name: "Store", href: "/store", icon: ShoppingBag },
    { name: "Tourist Reviews", href: "/reviews", icon: Star },
    { name: "Weather Info", href: "/weather", icon: CloudSun },
    { name: "Newsletter", href: "/newsletter", icon: Newspaper },
    { name: "Audio Guide App", href: "/audio-guide", icon: Smartphone },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] p-2 lg:p-4">
      {/* Glassmorphic Capsule Container */}
      <div
        className={`mx-auto max-w-[90rem] transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-background/10 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-primary/5"
            : "bg-white/5 backdrop-blur-md border border-white/5 shadow-xl shadow-black/10"
        } rounded-full px-4 lg:px-8`}
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
                      <DropdownMenuContent 
                        className="z-[100] bg-background/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl min-w-48 mt-2"
                        sideOffset={8}
                        align="start"
                      >
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

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm border border-white/10 rounded-full p-1 hover:bg-background/20 transition-all duration-300">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3 mr-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="z-[100] bg-background/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl min-w-48 mt-2"
                  sideOffset={8}
                  align="end"
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-medium truncate">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Welcome back!</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-primary/10 rounded-xl cursor-pointer">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-red-500/10 text-red-500 rounded-xl cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-background/10 backdrop-blur-sm border-white/20 hover:bg-background/20 text-foreground hover:text-primary rounded-full"
                >
                  <LogIn className="h-3 w-3 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0 flex items-center space-x-2">
            {loading ? (
              <div className="w-6 h-6 rounded-full bg-muted animate-pulse" />
            ) : user ? (
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {user.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : null}
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
                {user ? (
                  <>
                    <div className="flex items-center gap-3 p-3 bg-background/10 rounded-2xl border border-white/10">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-sm bg-primary text-primary-foreground">
                          {user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Signed in</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group"
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full group"
                    >
                      <LogIn className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Sign In
                    </Button>
                  </Link>
                )}
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