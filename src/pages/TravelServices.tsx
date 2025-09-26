import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, MapPin, Hotel, Package, Star, Clock, Users, Phone, Calendar, Route } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import sikkimTourismBus from "@/assets/sikkim-tourism-bus.png";
import sikkimMountainCabs from "@/assets/sikkim-mountain-cabs.png";

const TravelServices = () => {
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  const transportOptions = [
    {
      id: 1,
      type: "Taxi Service",
      provider: "Sikkim Mountain Cabs",
      description: "Private taxi service with experienced local drivers familiar with monastery routes.",
      price: "₹2,500/day",
      capacity: "4 passengers",
      features: ["English-speaking driver", "AC vehicle", "Flexible timing"],
      rating: 4.8,
      contact: "+91 98765 43210",
      image: sikkimMountainCabs
    },
    {
      id: 2,
      type: "Shared Bus",
      provider: "Sikkim Tourism",
      description: "Government-operated buses connecting major monasteries with fixed schedules.",
      price: "₹150/trip",
      capacity: "25 passengers",
      features: ["Fixed schedule", "Budget-friendly", "Tourist guide"],
      rating: 4.2,
      contact: "+91 98765 43211",
      image: sikkimTourismBus
    },
    {
      id: 3,
      type: "Motorcycle Rental",
      provider: "Himalayan Rides",
      description: "Self-drive motorcycle rentals for adventurous travelers.",
      price: "₹800/day",
      capacity: "2 passengers",
      features: ["Helmets included", "GPS navigation", "24/7 support"],
      rating: 4.6,
      contact: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300"
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: "Monastery Guest House",
      location: "Near Rumtek Monastery",
      type: "Traditional Lodge",
      price: "₹1,200/night",
      rating: 4.7,
      amenities: ["Free WiFi", "Breakfast included", "Mountain view", "Prayer room"],
      description: "Stay within monastery grounds for an authentic spiritual experience.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300"
    },
    {
      id: 2,
      name: "Himalayan Heritage Hotel",
      location: "Gangtok Central",
      type: "Heritage Hotel",
      price: "₹3,500/night",
      rating: 4.9,
      amenities: ["Spa & wellness", "Restaurant", "Tour desk", "Airport transfer"],
      description: "Luxury accommodation with traditional Sikkimese architecture.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300"
    },
    {
      id: 3,
      name: "Backpacker's Haven",
      location: "Pelling",
      type: "Hostel",
      price: "₹600/night",
      rating: 4.3,
      amenities: ["Shared kitchen", "Common area", "Laundry", "Book exchange"],
      description: "Budget-friendly accommodation for young travelers.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=300"
    }
  ];

  const tourPackages = [
    {
      id: 1,
      name: "Sacred Monastery Circuit",
      duration: "5 days",
      price: "₹18,500",
      group: "8-12 people",
      monasteries: ["Rumtek", "Pemayangtse", "Tashiding", "Enchey"],
      includes: ["Transport", "Accommodation", "Meals", "Guide"],
      highlights: ["Special prayer sessions", "Meet monks", "Cultural performances"],
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300"
    },
    {
      id: 2,
      name: "Spiritual Retreat Journey",
      duration: "7 days",
      price: "₹25,000",
      group: "6-10 people",
      monasteries: ["Rumtek", "Pemayangtse", "Tashiding"],
      includes: ["Luxury stay", "Meditation sessions", "Organic meals", "Personal guide"],
      highlights: ["Silent retreat", "Sunrise meditation", "Cooking classes"],
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300"
    },
    {
      id: 3,
      name: "Adventure Monastery Trek",
      duration: "10 days",
      price: "₹35,000",
      group: "4-8 people",
      monasteries: ["Remote mountain monasteries", "Hidden caves", "Ancient sites"],
      includes: ["Trekking gear", "Camping", "Local cuisine", "Expert guide"],
      highlights: ["High altitude monasteries", "Camping under stars", "Local village stays"],
      difficulty: "Challenging",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300"
    }
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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Travel &
            </span>
            <br />
            <span className="text-foreground">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Plan your perfect monastery journey with our integrated transport, accommodation, 
            and curated tour packages designed for spiritual and cultural exploration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="packages" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="packages">Tour Packages</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
              <TabsTrigger value="accommodation">Stay</TabsTrigger>
              <TabsTrigger value="planner">Trip Planner</TabsTrigger>
            </TabsList>

            {/* Tour Packages Tab */}
            <TabsContent value="packages" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Curated Tour Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover Sikkim's monasteries with our expertly crafted packages, 
                  each designed to provide unique spiritual and cultural experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourPackages.map((pkg) => (
                  <Card key={pkg.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                          {pkg.duration}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`backdrop-blur-sm ${
                            pkg.difficulty === 'Easy' ? 'bg-green-500/80 text-white' :
                            pkg.difficulty === 'Moderate' ? 'bg-yellow-500/80 text-white' :
                            'bg-red-500/80 text-white'
                          }`}
                        >
                          {pkg.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl font-bold">{pkg.price}</div>
                        <div className="text-sm opacity-90">per person</div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{pkg.name}</span>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {pkg.group}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-1">Monasteries Covered:</h4>
                          <div className="flex flex-wrap gap-1">
                            {pkg.monasteries.slice(0, 2).map((monastery) => (
                              <Badge key={monastery} variant="outline" className="text-xs">
                                {monastery}
                              </Badge>
                            ))}
                            {pkg.monasteries.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{pkg.monasteries.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-1">Includes:</h4>
                          <p className="text-xs text-muted-foreground">
                            {pkg.includes.join(", ")}
                          </p>
                        </div>
                      </div>
                      <Button className="w-full group">
                        <Package className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                        Book Package
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Transport Tab */}
            <TabsContent value="transport" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Transportation Options</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from various transport options to reach and explore monasteries across Sikkim.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transportOptions.map((option) => (
                  <Card key={option.id} className="hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.type}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                          {option.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{option.rating}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{option.provider}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="font-medium text-primary">{option.price}</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {option.capacity}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {option.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {option.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Car className="h-4 w-4 mr-2" />
                          Book Now
                        </Button>
                        <Button variant="outline" size="icon">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Accommodation Tab */}
            <TabsContent value="accommodation" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Accommodation Options</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From traditional monastery guest houses to luxury hotels, find the perfect stay for your journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations.map((hotel) => (
                  <Card key={hotel.id} className="hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                          {hotel.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{hotel.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {hotel.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-primary mb-1">{hotel.price}</div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {hotel.description}
                        </p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Amenities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {hotel.amenities.map((amenity) => (
                            <Badge key={amenity} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">
                        <Hotel className="h-4 w-4 mr-2" />
                        Check Availability
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Trip Planner Tab */}
            <TabsContent value="planner" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <Route className="h-16 w-16 mx-auto text-primary mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Smart Trip Planner</h2>
                  <p className="text-muted-foreground">
                    Let our AI create a personalized itinerary based on your preferences, 
                    time, and interests for the perfect monastery experience.
                  </p>
                </div>

                <Card className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Duration</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 days</SelectItem>
                          <SelectItem value="3-5">3-5 days</SelectItem>
                          <SelectItem value="6-10">6-10 days</SelectItem>
                          <SelectItem value="10+">10+ days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget (₹5,000-15,000)</SelectItem>
                          <SelectItem value="mid">Mid-range (₹15,000-30,000)</SelectItem>
                          <SelectItem value="luxury">Luxury (₹30,000+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Group Size</label>
                      <Input placeholder="Number of travelers" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Travel Style</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spiritual">Spiritual Focus</SelectItem>
                          <SelectItem value="cultural">Cultural Exploration</SelectItem>
                          <SelectItem value="adventure">Adventure & Trekking</SelectItem>
                          <SelectItem value="photography">Photography Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Special Interests (Optional)</label>
                    <Input placeholder="e.g., meditation, architecture, history, festivals" />
                  </div>

                  <Button className="w-full group text-lg py-6">
                    <Route className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                    Generate My Perfect Itinerary
                  </Button>

                  <div className="mt-8 p-6 bg-muted/30 rounded-2xl">
                    <h3 className="font-bold mb-4 text-center">What You'll Get:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <Calendar className="h-8 w-8 mx-auto text-primary mb-2" />
                      <h4 className="font-medium">Day-by-Day Schedule</h4>
                      <p className="text-sm text-muted-foreground">Optimized timing and routes</p>
                    </div>
                      <div>
                        <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                        <h4 className="font-medium">Location Details</h4>
                        <p className="text-sm text-muted-foreground">Monastery info and directions</p>
                      </div>
                      <div>
                        <Package className="h-8 w-8 mx-auto text-primary mb-2" />
                        <h4 className="font-medium">Booking Links</h4>
                        <p className="text-sm text-muted-foreground">Direct booking for hotels & transport</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TravelServices;