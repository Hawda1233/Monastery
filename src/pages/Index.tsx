import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <VideoHero />
      <Footer />
    </div>
  );
};

export default Index;
