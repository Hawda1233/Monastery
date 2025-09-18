import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Full Coverage */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          minWidth: '100%',
          minHeight: '100%',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover'
        }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span 
              className="bg-gradient-text bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer"
              style={{ backgroundSize: "200% auto" }}
            >
              Cinematic
            </span>
            <br />
            <span className="text-foreground">Experience</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            Immerse yourself in stunning visuals that bring your imagination to life
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            <Button variant="hero" size="lg" className="group">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Experience
            </Button>
            <Button variant="heroSecondary" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4K</div>
              <div className="text-muted-foreground">Ultra HD Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">60fps</div>
              <div className="text-muted-foreground">Smooth Motion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">∞</div>
              <div className="text-muted-foreground">Endless Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-glow-pulse [animation-delay:1.5s]" />
    </section>
  );
};

export default VideoHero;