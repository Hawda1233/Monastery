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
import himalayanRidesBike from "@/assets/himalayan-rides-bike.png";
import nssBikeRental from "@/assets/nss-bike-rental.png";
import northeastRetreatTour from "@/assets/northeast-retreat-tour.png";

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
      provider: "Travel Gangtok Rental Services",
      description: "Self-drive motorcycle rentals for adventurous travelers.",
      price: "₹800/day",
      capacity: "2 passengers",
      features: ["Helmets included", "GPS navigation", "24/7 support"],
      rating: 4.6,
      contact: "+91 98765 43212",
      image: himalayanRidesBike
    },
    {
      id: 4,
      type: "Bike & Scooty Rental",
      provider: "NSS Bike and Scooty Rental",
      description: "Affordable bike and scooty rentals perfect for exploring monastery routes at your own pace.",
      price: "₹750/day",
      capacity: "2 passengers",
      features: ["Multiple bike options", "Competitive rates", "Local pickup/drop"],
      rating: 4.4,
      contact: "+91 98765 43213",
      image: nssBikeRental
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
      name: "North East Retreat - Book Now Pay Later",
      duration: "4N/5D",
      price: "₹21,273",
      totalPrice: "₹42,546",
      emiPrice: "₹6,612",
      group: "2 people",
      destinations: ["2N Gangtok", "2N Darjeeling"],
      hotelType: "4 Star, 3 Star Hotels",
      includes: ["Airport Pickup & Drop", "4 Activities", "Selected Meals"],
      highlights: [
        "Complimentary 1 Lunch or refreshment on Day 1",
        "Visit to Changu Lake, New Baba Mandir, Do Drul Chorten Stupa", 
        "Visit to cottage industry, Flower Exhibition Centre, Enchey Monastery"
      ],
      difficulty: "Easy",
      image: northeastRetreatTour,
      guides: [
        { name: "Pema Bhutia", experience: "8 years", specialty: "Buddhist Culture", phone: "+91 94341 12345" },
        { name: "Tenzin Norbu", experience: "12 years", specialty: "Mountain Heritage", phone: "+91 94341 12346" },
        { name: "Karma Lepcha", experience: "6 years", specialty: "Local History", phone: "+91 94341 12347" }
      ]
    }
  ];

  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    travelers: 2,
    travelDate: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

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
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="packages">Tour Packages</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
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

              {bookingStep === 1 ? (
                <div className="grid grid-cols-1 gap-6">
                  {tourPackages.map((pkg) => (
                    <Card key={pkg.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                            {pkg.duration}
                          </Badge>
                          <Badge className="bg-green-500/80 backdrop-blur-sm text-white">
                            Book Now Pay Later
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-3xl font-bold">{pkg.price}</div>
                          <div className="text-sm opacity-90">/Person</div>
                          <div className="text-lg font-semibold mt-1">Total Price {pkg.totalPrice}</div>
                          <div className="text-sm bg-blue-500/80 px-2 py-1 rounded mt-2">
                            No Cost EMI at ₹{pkg.emiPrice}/month
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            Up to {pkg.group}
                          </span>
                          <span className="flex items-center gap-1">
                            <Hotel className="h-3 w-3" />
                            {pkg.hotelType}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-sm mb-2">Destinations:</h4>
                              <div className="flex flex-wrap gap-2">
                                {pkg.destinations.map((dest, index) => (
                                  <Badge key={index} variant="outline" className="text-sm">
                                    {dest}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm mb-2">Package Includes:</h4>
                              <div className="space-y-1">
                                {pkg.includes.map((item, index) => (
                                  <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                            <div className="space-y-2">
                              {pkg.highlights.map((highlight, index) => (
                                <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-6 group text-lg py-6"
                          onClick={() => setBookingStep(2)}
                        >
                          <Package className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                          Book Package - Select Your Guide
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : bookingStep === 2 ? (
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Select Your Local Sikkim Guide</h3>
                    <p className="text-muted-foreground">Choose from our certified local guides for an authentic experience</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {tourPackages[0].guides.map((guide, index) => (
                      <Card 
                        key={index} 
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedGuide?.name === guide.name ? 'ring-2 ring-primary shadow-lg' : ''
                        }`}
                        onClick={() => setSelectedGuide(guide)}
                      >
                        <CardHeader>
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">{guide.name.charAt(0)}</span>
                          </div>
                          <CardTitle className="text-center">{guide.name}</CardTitle>
                          <CardDescription className="text-center">
                            <div className="space-y-1">
                              <div>{guide.experience} experience</div>
                              <div className="text-primary font-medium">{guide.specialty}</div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            <Phone className="h-4 w-4 mr-2" />
                            {guide.phone}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={() => setBookingStep(1)}>
                      Back to Package
                    </Button>
                    <Button 
                      onClick={() => setBookingStep(3)}
                      disabled={!selectedGuide}
                      className="min-w-48"
                    >
                      Continue with {selectedGuide?.name || 'Selected Guide'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Complete Your Booking</h3>
                    <p className="text-muted-foreground">Fill in your details to confirm the reservation</p>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Summary</CardTitle>
                      <CardDescription>
                        Package: North East Retreat with {selectedGuide?.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Number of Travelers</label>
                          <Select onValueChange={(value) => setBookingDetails({...bookingDetails, travelers: parseInt(value)})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select travelers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Person</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3">3 People</SelectItem>
                              <SelectItem value="4">4 People</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Travel Date</label>
                          <Input 
                            type="date" 
                            onChange={(e) => setBookingDetails({...bookingDetails, travelDate: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Contact Name</label>
                          <Input 
                            placeholder="Your full name"
                            onChange={(e) => setBookingDetails({...bookingDetails, contactName: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone Number</label>
                          <Input 
                            placeholder="+91 XXXXX XXXXX"
                            onChange={(e) => setBookingDetails({...bookingDetails, contactPhone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email Address</label>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com"
                          onChange={(e) => setBookingDetails({...bookingDetails, contactEmail: e.target.value})}
                        />
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span>Package Cost ({bookingDetails.travelers} person{bookingDetails.travelers > 1 ? 's' : ''})</span>
                          <span className="font-medium">₹{(21273 * bookingDetails.travelers).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Total Amount</span>
                          <span>₹{(21273 * bookingDetails.travelers).toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          EMI: ₹{Math.round(6612 * bookingDetails.travelers).toLocaleString()}/month
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setBookingStep(2)} className="flex-1">
                          Back to Guides
                        </Button>
                        <Button className="flex-1">
                          Confirm Booking & Pay
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
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