import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import dragonflyImage from '@/assets/dragonfly-loading.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => onLoadingComplete(), 150);
          return 100;
        }
        const increment = Math.random() * 25 + 15;
        return Math.min(prev + increment, 100);
      });
    };

    const scheduleUpdate = () => {
      animationFrame = requestAnimationFrame(() => {
        updateProgress();
        if (progress < 100) {
          setTimeout(scheduleUpdate, 80);
        }
      });
    };

    scheduleUpdate();
    return () => cancelAnimationFrame(animationFrame);
  }, [onLoadingComplete, progress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/20">
      <div className="text-center space-y-8">
        {/* Dragonfly Animation */}
        <div className="relative">
          <img
            src={dragonflyImage}
            alt="Loading dragonfly"
            className="w-24 h-24 mx-auto animate-[float_3s_ease-in-out_infinite] filter drop-shadow-lg"
          />
          <div className="absolute inset-0 animate-pulse">
            <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground animate-[glow-pulse_2s_ease-in-out_infinite]">
            Discovering Serenity
          </h2>
          <p className="text-muted-foreground animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            Preparing your spiritual journey...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-2 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          <Progress 
            value={progress} 
            className="h-2 bg-muted/30 overflow-hidden"
          />
          <div className="text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-[float_4s_ease-in-out_infinite]"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;