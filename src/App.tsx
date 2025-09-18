import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExploreMonasteries from "./pages/ExploreMonasteries";
import DigitalArchives from "./pages/DigitalArchives";
import Events from "./pages/Events";
import TravelServices from "./pages/TravelServices";
import AudioGuide from "./pages/AudioGuide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
