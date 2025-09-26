import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import VirtualTour360 from "@/components/VirtualTour360";
import { Camera, MapPin, Clock, Users, Star } from "lucide-react";

// Import monastery images
import encheyMonastery from "@/assets/enchey-monastery.png";
import pemayangtseMonastery from "@/assets/pemayangtse-monastery.png";
import tashidingMonastery from "@/assets/tashiding-monastery.png";

const VirtualTour = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const virtualTours = [
    {
      id: 1,
      name: "Enchey Monastery",
      location: "Gangtok",
      description: "Experience the serene beauty of this 200-year-old monastery with panoramic views of Kanchenjunga",
      image: encheyMonastery,
      embedUrl: "https://www.google.com/maps/embed?pb=!4v1579000000000!6m8!1m7!1sCAoSLEFGMVFpcE9fUExGLVF4dXhQakRFd0p0QkNxTjNtcC1KVWs4clJfaEdIUk9M!2m2!1d27.3314865!2d88.6138396!3f0!4f0!5f0.7820865974627469",
      duration: "15-20 min",
      highlights: ["Main prayer hall", "Ancient murals", "Mountain views", "Prayer wheels"],
      difficulty: "Easy",
      rating: 4.8,
      reviews: 142,
      category: "historic"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "Pelling",
      description: "Explore one of Sikkim's oldest monasteries, perfect monastery for Nyingma sect with intricate woodwork",
      image: pemayangtseMonastery,
      embedUrl: "https://www.google.com/maps/embed?pb=!4v1579000000000!6m8!1m7!1sCAoSLEFGMVFpcE9fUExGLVF4dXhQakRFd0p0QkNxTjNtcC1KVWs4clJfaEdIUk9M!2m2!1d27.2984!2d88.2436!3f0!4f0!5f0.7820865974627469",
      duration: "20-25 min",
      highlights: ["Seven-tiered wooden structure", "Guru Rinpoche statue", "Ancient scriptures", "Sacred artifacts"],
      difficulty: "Moderate",
      rating: 4.9,
      reviews: 89,
      category: "cultural"
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      description: "Visit the heart of Sikkim where Lepchas, Bhutias and Nepalis come together in spiritual harmony",
      image: tashidingMonastery,
      embedUrl: "https://www.google.com/maps/embed?pb=!4v1579000000000!6m8!1m7!1sCAoSLEFGMVFpcE9fUExGLVF4dXhQakRFd0p0QkNxTjNtcC1KVWs4clJfaEdIUk9M!2m2!1d27.3481!2d88.2725!3f0!4f0!5f0.7820865974627469",
      duration: "18-22 min",
      highlights: ["Sacred chorten", "Festival grounds", "River confluence", "Prayer flags"],
      difficulty: "Easy",
      rating: 4.7,
      reviews: 126,
      category: "spiritual"
    }
  ];

  const categories = [
    { value: "all", label: "All Tours" },
    { value: "historic", label: "Historic" },
    { value: "cultural", label: "Cultural" },
    { value: "spiritual", label: "Spiritual" }
  ];

  const filteredTours = selectedCategory === "all" 
    ? virtualTours 
    : virtualTours.filter(tour => tour.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />
          
          <div className="text-center max-w-4xl mx-auto text-white mt-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Camera className="h-8 w-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                360° Virtual Tours
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in the sacred spaces of Sikkim's monasteries from anywhere in the world
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{virtualTours.length}+</div>
                <div className="text-sm sm:text-base text-white/80">Interactive Tours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">HD</div>
                <div className="text-sm sm:text-base text-white/80">Quality Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-glow mb-2">Free</div>
                <div className="text-sm sm:text-base text-white/80">Access Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getDifficultyColor(tour.difficulty)}>
                      {tour.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      <Camera className="h-3 w-3 mr-1" />
                      360°
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="text-lg">{tour.name}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                      <span className="text-muted-foreground">({tour.reviews})</span>
                    </div>
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {tour.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                  </div>
                  
                  <CardDescription className="text-sm leading-relaxed">
                    {tour.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <VirtualTour360 
                    monasteryName={tour.name}
                    embedUrl={tour.embedUrl}
                  >
                    <Button className="w-full group" size="lg">
                      <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Start Virtual Tour
                    </Button>
                  </VirtualTour360>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Experience More Than Just Tours
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Ready to visit these sacred places in person? Explore our travel services and plan your spiritual journey to Sikkim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <Users className="mr-2 h-5 w-5" />
                Plan Your Visit
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Explore More Monasteries
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualTour;