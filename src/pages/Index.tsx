import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <Navbar />
      <VideoHero />
    </div>
  );
};

export default Index;
