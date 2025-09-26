import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
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
  Globe,
  ShoppingBag
} from "lucide-react";
import pemayangtseMonastery from "@/assets/pemayangtse-monastery.png";
import encheyMonastery from "@/assets/enchey-monastery.png";
import pawanChamling from "@/assets/pawan-chamling.png";
import drKarmaGyatso from "@/assets/dr-karma-gyatso.png";
import tenzinLepcha from "@/assets/tenzin-lepcha.png";

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

  const personalityOpinions = [
    {
      name: "Pawan Chamling",
      title: "Former Chief Minister of Sikkim",
      opinion: "This digital initiative beautifully preserves our sacred heritage for future generations.",
      image: pawanChamling
    },
    {
      name: "Dr. Karma Gyatso",
      title: "Buddhist Scholar & Author",
      opinion: "A remarkable fusion of spirituality and technology that makes our monasteries accessible worldwide.",
      image: drKarmaGyatso
    },
    {
      name: "Tenzin Lepcha",
      title: "Cultural Ambassador",
      opinion: "This platform helps share the profound wisdom and beauty of Sikkim's monastic traditions globally.",
      image: tenzinLepcha
    }
  ];

  const touristReviews = [
    {
      name: "Sarah Johnson",
      country: "USA",
      rating: 5,
      review: "The virtual tours are absolutely stunning! Felt like I was actually walking through the monasteries. The audio guides made it so informative.",
      tour: "Rumtek Virtual Experience"
    },
    {
      name: "Raj Patel",
      country: "India", 
      rating: 5,
      review: "Excellent service! The homestay booking was seamless and the local guides were incredibly knowledgeable about Buddhist culture.",
      tour: "Heritage Walk Package"
    },
    {
      name: "Emma Chen",
      country: "Singapore",
      rating: 4,
      review: "Amazing cultural immersion. The local handicrafts section helped me buy authentic Sikkimese items. Highly recommend!",
      tour: "Cultural Discovery Tour"
    }
  ];

  const tourPackages = [
    {
      name: "Monastery Circuit Tour",
      duration: "7 Days",
      price: "₹25,000",
      includes: ["Accommodation", "Meals", "Guide", "Transport"],
      highlights: ["Rumtek", "Pemayangtse", "Enchey", "Tashiding"]
    },
    {
      name: "Spiritual Retreat Package",
      duration: "3 Days",
      price: "₹12,000",
      includes: ["Meditation Sessions", "Organic Meals", "Yoga", "Guide"],
      highlights: ["Morning Prayers", "Meditation", "Spiritual Talks"]
    },
    {
      name: "Photography Expedition",
      duration: "5 Days",
      price: "₹18,000",
      includes: ["Professional Guide", "Equipment", "Transport", "Meals"],
      highlights: ["Golden Hour Shots", "Architecture", "Cultural Events"]
    }
  ];

  const handicrafts = [
    {
      name: "Traditional Thangka Paintings",
      price: "₹2,500 - ₹15,000",
      description: "Handpainted religious artworks by local artisans",
      artisan: "Tashi Art Center"
    },
    {
      name: "Handwoven Carpets",
      price: "₹8,000 - ₹25,000", 
      description: "Pure wool carpets with traditional Tibetan designs",
      artisan: "Sikkim Handicrafts Emporium"
    },
    {
      name: "Prayer Wheels & Bowls",
      price: "₹500 - ₹5,000",
      description: "Authentic copper and brass spiritual items",
      artisan: "Local Monastery Craftsmen"
    }
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

      {/* Famous Personalities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Leaders Say</h2>
            <p className="text-lg text-muted-foreground">
              Voices from Sikkim's cultural and spiritual leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalityOpinions.map((person, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <CardTitle className="text-xl">{person.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{person.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{person.opinion}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Tour Packages</h2>
            <p className="text-lg text-muted-foreground">
              Carefully curated experiences with expert local guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.duration}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.includes.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{highlight}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
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
              <Link to="/store">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
