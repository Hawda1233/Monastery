import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Eye, 
  Archive, 
  Calendar, 
  Map, 
  Headphones, 
  Users, 
  Download, 
  Star,
  ChevronRight,
  Play,
  BookOpen,
  Camera,
  Globe
} from "lucide-react";
import pemayangtseMonastery from "@/assets/pemayangtse-monastery.png";
import encheyMonastery from "@/assets/enchey-monastery.png";

const Index = () => {
  const features = [
    {
      icon: Eye,
      title: "360° Virtual Tours",
      description: "Immersive virtual tours of Sikkim's sacred monasteries with interactive hotspots and detailed information.",
      link: "/explore"
    },
    {
      icon: Archive,
      title: "Digital Archives",
      description: "Access thousands of digitized manuscripts, murals, and historical documents with AI-powered search.",
      link: "/archives"
    },
    {
      icon: Calendar,
      title: "Events & Festivals",
      description: "Stay updated with monastery events, festivals, and cultural celebrations throughout the year.",
      link: "/events"
    },
    {
      icon: Headphones,
      title: "Audio Guide App",
      description: "Smart location-based audio guides for on-site monastery visits with offline capabilities.",
      link: "/audio-guide"
    }
  ];

  const featuredMonasteries = [
    {
      name: "Rumtek Monastery",
      location: "East Sikkim",
      description: "The largest monastery in Sikkim and seat of the Karmapa",
      image: pemayangtseMonastery,
      features: ["360° Tour", "Audio Guide", "Historical Archives"]
    },
    {
      name: "Pemayangtse Monastery",
      location: "West Sikkim", 
      description: "One of the oldest and premier monasteries in Sikkim",
      image: pemayangtseMonastery,
      features: ["Virtual Tour", "Manuscripts", "Event Calendar"]
    },
    {
      name: "Enchey Monastery",
      location: "Gangtok",
      description: "Beautiful monastery with stunning views of Kanchenjunga",
      image: encheyMonastery,
      features: ["360° Experience", "Digital Archive", "Cultural Events"]
    }
  ];

  const stats = [
    { number: "200+", label: "Monasteries Covered" },
    { number: "5,000+", label: "Digital Archives" },
    { number: "50,000+", label: "Virtual Visitors" },
    { number: "4.8/5", label: "User Rating" }
  ];

  const recentEvents = [
    {
      title: "Losar Festival",
      monastery: "Rumtek Monastery",
      date: "Feb 15, 2025",
      type: "Cultural Festival"
    },
    {
      title: "Meditation Retreat",
      monastery: "Pemayangtse",
      date: "Mar 2, 2025", 
      type: "Spiritual Event"
    },
    {
      title: "Heritage Walk",
      monastery: "Enchey Monastery",
      date: "Mar 10, 2025",
      type: "Educational Tour"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <Navbar />
      <VideoHero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Explore Sikkim's Monastic Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the rich spiritual and cultural heritage of Sikkim through cutting-edge 
              digital experiences and comprehensive archives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                    <Link to={feature.link}>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Explore <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Monasteries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Monasteries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your spiritual journey with these remarkable monasteries, each offering 
              unique insights into Buddhist culture and history.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMonasteries.map((monastery, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                   <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 text-foreground border">
                      {monastery.location}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{monastery.name}</CardTitle>
                  <CardDescription>{monastery.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {monastery.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Virtual Tour
                    </Button>
                    <Button size="sm" variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/explore">
              <Button size="lg">
                Explore All Monasteries
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Preserving heritage and connecting communities worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">
                Join us for these special monastery events and celebrations
              </p>
            </div>
            <Link to="/events" className="mt-4 md:mt-0">
              <Button variant="outline">
                View All Events
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Map className="h-4 w-4 mr-2" />
                    {event.monastery}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <h2 className="text-4xl font-bold mb-6">
              Begin Your Spiritual Journey Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Discover the profound wisdom and breathtaking beauty of Sikkim's monasteries. 
              Whether you're planning a visit or exploring from afar, start your journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Camera className="mr-2 h-5 w-5" />
                  Start Virtual Tour
                </Button>
              </Link>
              <Link to="/audio-guide">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
