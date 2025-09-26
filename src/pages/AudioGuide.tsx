import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, MapPin, Volume2, Wifi, Languages, Star, Play, Headphones, Bluetooth } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import pemayangtseMonastery from "@/assets/pemayangtse-monastery.png";
import tashidingMonastery from "@/assets/tashiding-monastery.png";

const AudioGuide = () => {
  const features = [
    {
      icon: MapPin,
      title: "GPS Location-Based",
      description: "Automatically triggers relevant content based on your precise location within monastery grounds."
    },
    {
      icon: Bluetooth,
      title: "Bluetooth Beacon Support",
      description: "Enhanced accuracy with Bluetooth beacons placed at key locations for seamless experience."
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Available in English, Hindi, Nepali, Tibetan, and local Sikkimese dialects."
    },
    {
      icon: Wifi,
      title: "Offline Mode",
      description: "Download content for offline use in areas with limited connectivity."
    },
    {
      icon: Volume2,
      title: "Professional Narration",
      description: "Expert historians and monks provide authentic insights and stories."
    },
    {
      icon: Star,
      title: "Interactive Elements",
      description: "AR features, photo opportunities, and interactive monastery maps."
    }
  ];

  const monasteryGuides = [
    {
      name: "Rumtek Monastery",
      description: "Complete audio tour covering the golden stupa, main prayer hall, and monk quarters.",
      duration: "45 minutes",
      languages: ["English", "Hindi", "Tibetan"],
      highlights: 8,
      downloaded: "12.5k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300"
    },
    {
      name: "Pemayangtse Monastery",
      description: "Detailed exploration of the three-story structure and ancient artifacts.",
      duration: "35 minutes",
      languages: ["English", "Hindi", "Nepali"],
      highlights: 6,
      downloaded: "8.2k",
      rating: 4.8,
      image: pemayangtseMonastery
    },
    {
      name: "Tashiding Monastery",
      description: "Sacred hilltop monastery with stories of its founding and spiritual significance.",
      duration: "30 minutes",
      languages: ["English", "Hindi"],
      highlights: 5,
      downloaded: "6.8k",
      rating: 4.7,
      image: tashidingMonastery
    }
  ];

  const appStats = [
    { label: "Total Downloads", value: "50,000+", icon: Download },
    { label: "Average Rating", value: "4.8/5", icon: Star },
    { label: "Monasteries Covered", value: "200+", icon: MapPin },
    { label: "Languages", value: "8", icon: Languages }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Smart Audio
                </span>
                <br />
                <span className="text-foreground">Guide App</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Experience Sikkim's monasteries like never before with our intelligent audio guide app. 
                Get location-based narration, historical insights, and spiritual guidance directly on your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="group">
                  <Download className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Download className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                  Download for Android
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>50,000+ downloads</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-background rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold">Monastery 360 Guide</h3>
                      <p className="text-sm text-muted-foreground">Now Playing: Rumtek Overview</p>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Golden Stupa History</span>
                      <span className="text-xs text-muted-foreground">3:24 / 8:15</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="ghost" size="icon">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="rounded-full">
                      <Play className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Headphones className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-pulse">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse animation-delay-1000">
                  <Bluetooth className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <Icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our app uses cutting-edge technology to provide a seamless and immersive monastery experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Guides */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Audio Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of professionally narrated guides for major monasteries across Sikkim.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monasteryGuides.map((guide, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                      {guide.duration}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{guide.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{guide.name}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Languages:</span>
                      <span>{guide.languages.length} available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Key Points:</span>
                      <span>{guide.highlights} highlights</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Downloads:</span>
                      <span>{guide.downloaded}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <Smartphone className="h-16 w-16 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Experience the Demo</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our location-based audio guide system right from your browser. 
              Get a taste of what awaits you at Sikkim's monasteries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="group">
                <Play className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Try Web Demo
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Bluetooth className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Learn How It Works
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>📱 Works on all modern smartphones | 🎧 Best with headphones | 📍 GPS required</p>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AudioGuide;