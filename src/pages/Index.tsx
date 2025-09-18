import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen w-screen bg-background overflow-x-hidden">
      <Navbar />
      <VideoHero />
    </div>
  );
};

export default Index;
