import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import monasteryHero from "@/assets/monastery-hero.jpg";
import Index from "./pages/Index";
import ExploreMonasteries from "./pages/ExploreMonasteries";
import DigitalArchives from "./pages/DigitalArchives";
import Events from "./pages/Events";
import TravelServices from "./pages/TravelServices";
import AudioGuide from "./pages/AudioGuide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/videos/hero-video.mp4', as: 'video' },
      { href: monasteryHero, as: 'image' }
    ];

    const links = preloadLinks.map(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
      return link;
    });

    // Ultra-fast loading with performance optimization
    const timer = requestAnimationFrame(() => {
      setIsLoading(false);
    });

    return () => {
      cancelAnimationFrame(timer);
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ExploreMonasteries />} />
          <Route path="/archives" element={<DigitalArchives />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel" element={<TravelServices />} />
          <Route path="/audio-guide" element={<AudioGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
