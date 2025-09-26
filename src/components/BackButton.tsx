import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

interface BackButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const BackButton = ({ className = "", variant = "ghost", size = "default" }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleBack = async () => {
    // Prevent multiple clicks while navigating
    if (isNavigating) {
      console.log("BackButton: Already navigating, ignoring click");
      return;
    }

    setIsNavigating(true);
    
    try {
      // Use a more reliable method to check if we can go back
      const canGoBack = window.history.state?.idx > 0;
      
      console.log("BackButton: Current location:", location.pathname);
      console.log("BackButton: Can go back:", canGoBack);
      console.log("BackButton: History state:", window.history.state);

      if (canGoBack) {
        console.log("BackButton: Navigating back");
        navigate(-1);
      } else {
        console.log("BackButton: No history, navigating to home");
        navigate("/");
      }
    } catch (error) {
      console.error("BackButton: Navigation error:", error);
      // Fallback to home if navigation fails
      navigate("/");
    } finally {
      // Reset navigation state after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 500);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      disabled={isNavigating}
      className={`flex items-center gap-2 ${className} ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <ChevronLeft className="h-4 w-4" />
      {isNavigating ? 'Going back...' : 'Back'}
    </Button>
  );
};

export default BackButton;