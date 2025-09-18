import { Button } from "@/components/ui/button";
import { Play, ChevronDown, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import monasteryHero from "@/assets/monastery-hero.jpg";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Fallback */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${monasteryHero})` }}
      />
      
      {/* Video Background - Perfect Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={monasteryHero}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Video Loading Indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-foreground">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="text-sm">Loading experience...</span>
            </div>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span 
              className="bg-gradient-text bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer"
              style={{ backgroundSize: "200% auto" }}
            >
              Experience Peace
            </span>
            <br />
            <span className="text-foreground">· Explore Heritage</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Discover the spiritual essence of Sikkim's monasteries through peace, heritage, and exploration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Start Virtual Tour
            </Button>
            <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
              Explore Monasteries
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Sacred Monasteries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">360°</div>
              <div className="text-sm sm:text-base text-muted-foreground">Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-glow mb-2">∞</div>
              <div className="text-sm sm:text-base text-muted-foreground">Spiritual Journey</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-accent/20 rounded-full blur-3xl animate-glow-pulse [animation-delay:1.5s]" />
    </section>
  );
};

export default VideoHero;