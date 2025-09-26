import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, X, Maximize2, RotateCcw } from "lucide-react";

interface VirtualTour360Props {
  monasteryName: string;
  embedUrl: string;
  children: React.ReactNode;
}

const VirtualTour360 = ({ monasteryName, embedUrl, children }: VirtualTour360Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-background border-2 border-primary/20">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-full">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              360° Virtual Tour - {monasteryName}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset View
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Maximize2 className="h-4 w-4" />
                Fullscreen
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground">
            Use your mouse or touch to navigate the 360° view. Click and drag to look around, scroll to zoom.
          </p>
        </DialogHeader>
        
        <div className="flex-1 p-6 pt-2">
          <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src={embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title={`360° Virtual Tour of ${monasteryName}`}
            />
            
            {/* Overlay for loading */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="tour-loading">
              <div className="text-center">
                <Camera className="h-12 w-12 mx-auto text-primary animate-pulse mb-4" />
                <p className="text-lg font-medium">Loading Virtual Tour...</p>
              </div>
            </div>
          </div>
          
          {/* Tour Controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live 360° View</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Powered by Google Street View
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4 mr-2" />
                Close Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTour360;