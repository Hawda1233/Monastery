import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Car, MapPin, Hotel, Package, Star, Clock, Users, Phone, Calendar, Route, CheckCircle, Shield, Mail, Loader2, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import sikkimTourismBus from "@/assets/sikkim-tourism-bus.png";
import sikkimMountainCabs from "@/assets/sikkim-mountain-cabs.png";
import himalayanRidesBike from "@/assets/himalayan-rides-bike.png";
import nssBikeRental from "@/assets/nss-bike-rental.png";
import northeastRetreatTour from "@/assets/northeast-retreat-tour.png";
import sikkimDelightTour from "@/assets/sikkim-delight-tour.png";

const TravelServices = () => {
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [availabilityProgress, setAvailabilityProgress] = useState(0);
  const [dynamicPrice, setDynamicPrice] = useState(21273);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [plannerStep, setPlannerStep] = useState(1);
  const [plannerData, setPlannerData] = useState({
    duration: '',
    budget: '',
    groupSize: '',
    style: '',
    interests: []
  });
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  
  const [bookingDetails, setBookingDetails] = useState({
    travelers: 2,
    travelDate: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

  // Dynamic pricing based on travelers and date
  useEffect(() => {
    const basePricePackage1 = 21273;
    const travelers = bookingDetails.travelers;
    const selectedDate = new Date(bookingDetails.travelDate);
    const isPeakSeason = selectedDate.getMonth() >= 9 || selectedDate.getMonth() <= 3;
    
    let multiplier = 1;
    if (travelers > 2) multiplier = 0.9;
    if (isPeakSeason) multiplier += 0.2;
    
    const newPrice = Math.round(basePricePackage1 * multiplier);
    setDynamicPrice(newPrice);
  }, [bookingDetails.travelers, bookingDetails.travelDate]);

  // Simulate availability checking
  const checkAvailability = async () => {
    setIsLoading(true);
    setAvailabilityProgress(0);
    
    const steps = [
      { progress: 20, message: "Checking tour dates..." },
      { progress: 40, message: "Verifying guide availability..." },
      { progress: 60, message: "Confirming hotel bookings..." },
      { progress: 80, message: "Calculating final pricing..." },
      { progress: 100, message: "Availability confirmed!" }
    ];
    
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setAvailabilityProgress(step.progress);
      toast.info(step.message);
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    setBookingStep(3);
    toast.success("Tour availability confirmed! Booking request submitted.");
  };

  // Generate itinerary based on preferences
  const generateItinerary = (plannerData) => {
    const { duration, budget } = plannerData;
    
    const monasteries = [
      { name: "Rumtek Monastery", time: "Morning", cost: 1500, description: "Explore the golden stupa and main prayer hall" },
      { name: "Enchey Monastery", time: "Afternoon", cost: 1200, description: "Witness traditional Buddhist architecture" },
      { name: "Pemayangtse Monastery", time: "Morning", cost: 1800, description: "Visit the three-story structure" },
      { name: "Tashiding Monastery", time: "Afternoon", cost: 1400, description: "Sacred hilltop monastery" }
    ];

    const numDays = duration === "1-2" ? 2 : duration === "3-5" ? 4 : 7;
    const days = [];
    
    for (let i = 1; i <= numDays; i++) {
      const monastery = monasteries[(i - 1) % monasteries.length];
      days.push({
        day: i,
        title: `Monastery Exploration - Day ${i}`,
        activities: [
          {
            time: monastery.time,
            activity: `Visit ${monastery.name}`,
            description: monastery.description
          },
          {
            time: "Evening",
            activity: "Cultural Experience",
            description: "Traditional tea ceremony and local interaction"
          }
        ],
        cost: monastery.cost + (budget === "luxury" ? 2000 : budget === "mid" ? 1000 : 500)
      });
    }

    const totalCost = days.reduce((sum, day) => sum + day.cost, 0);
    
    return {
      days,
      totalCost,
      monasteries: Math.min(numDays, monasteries.length),
      activities: numDays * 2
    };
  };

  const tourPackages = [
    {
      id: 1,
      name: "North East Retreat - Book Now Pay Later",
      duration: "4N/5D",
      price: "₹21,273",
      destinations: ["2N Gangtok", "2N Darjeeling"],
      hotelType: "4 Star, 3 Star Hotels",
      includes: ["Airport Pickup & Drop", "4 Activities", "Selected Meals"],
      highlights: [
        "Visit to Changu Lake, New Baba Mandir",
        "Visit to Enchey Monastery", 
        "Complimentary refreshment on Day 1"
      ],
      image: northeastRetreatTour
    }
  ];

  const transportOptions = [
    {
      id: 1,
      type: "Taxi Service",
      provider: "Sikkim Mountain Cabs",
      description: "Private taxi service with experienced local drivers.",
      price: "₹2,500/day",
      capacity: "4 passengers",
      features: ["English-speaking driver", "AC vehicle", "Flexible timing"],
      rating: 4.8,
      image: sikkimMountainCabs
    },
    {
      id: 2,
      type: "Shared Bus",
      provider: "Sikkim Tourism",
      description: "Government-operated buses connecting major monasteries.",
      price: "₹150/trip",
      capacity: "25 passengers",
      features: ["Fixed schedule", "Budget-friendly", "Tourist guide"],
      rating: 4.2,
      image: sikkimTourismBus
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
                  Discover Sikkim's monasteries with our expertly crafted packages.
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
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-3xl font-bold">₹{dynamicPrice.toLocaleString()}</div>
                          <div className="text-sm opacity-90">/Person</div>
                          {bookingDetails.travelers > 2 && (
                            <div className="text-xs bg-green-500/80 px-2 py-1 rounded mt-1">
                              <TrendingUp className="h-3 w-3 inline mr-1" />
                              Group discount applied!
                            </div>
                          )}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {pkg.duration}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full mt-6 group text-lg py-6"
                          onClick={() => {
                            setSelectedPackage(pkg);
                            setBookingStep(2);
                            toast.info("Package selected! Please fill in your details.");
                          }}
                        >
                          <Package className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                          Check Availability & Book
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : bookingStep === 2 ? (
                /* Booking Form */
                <div className="max-w-2xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Booking Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Preferred Travel Date</Label>
                          <Input 
                            type="date"
                            onChange={(e) => setBookingDetails({...bookingDetails, travelDate: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Number of Travelers</Label>
                          <Select onValueChange={(value) => setBookingDetails({...bookingDetails, travelers: parseInt(value)})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select travelers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Person</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3">3 People</SelectItem>
                              <SelectItem value="4">4+ People</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Full Name</Label>
                          <Input 
                            placeholder="Enter your full name"
                            onChange={(e) => setBookingDetails({...bookingDetails, contactName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input 
                            type="email"
                            placeholder="your@email.com"
                            onChange={(e) => setBookingDetails({...bookingDetails, contactEmail: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setBookingStep(1)}
                          disabled={isLoading}
                        >
                          Back to Packages
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={checkAvailability}
                          disabled={isLoading || !bookingDetails.contactName || !bookingDetails.contactEmail}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Checking...
                            </>
                          ) : (
                            "Check Availability"
                          )}
                        </Button>
                      </div>
                      
                      {isLoading && (
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>Checking availability...</span>
                            <span>{availabilityProgress}%</span>
                          </div>
                          <Progress value={availabilityProgress} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ) : (
                /* Thank You */
                <div className="max-w-2xl mx-auto text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto animate-pulse mb-6">
                      <CheckCircle className="h-16 w-16 text-white animate-bounce" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                      Thank You!
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4">
                      Your tour availability request has been submitted. We'll contact you within 24 hours.
                    </p>
                  </div>
                  <Button 
                    className="w-full text-lg py-6"
                    onClick={() => {
                      setBookingStep(1);
                      setBookingDetails({travelers: 2, travelDate: '', contactName: '', contactPhone: '', contactEmail: ''});
                    }}
                  >
                    <Package className="h-5 w-5 mr-2" />
                    Explore More Packages
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Transport Tab */}
            <TabsContent value="transport" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Transportation Options</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transportOptions.map((option) => (
                  <Card key={option.id} className="hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.type}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{option.rating}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{option.provider}</CardTitle>
                      <CardDescription>{option.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                      <Button className="w-full">
                        <Car className="h-4 w-4 mr-2" />
                        Book Now
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
                    Create a personalized itinerary based on your preferences.
                  </p>
                </div>

                {plannerStep === 1 ? (
                  <Card className="p-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-base font-medium">Trip Duration</Label>
                          <Select onValueChange={(value) => setPlannerData({...plannerData, duration: value})}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 days</SelectItem>
                              <SelectItem value="3-5">3-5 days</SelectItem>
                              <SelectItem value="6-10">6-10 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-base font-medium">Budget Range</Label>
                          <Select onValueChange={(value) => setPlannerData({...plannerData, budget: value})}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="budget">Budget (₹5,000-15,000)</SelectItem>
                              <SelectItem value="mid">Mid-range (₹15,000-30,000)</SelectItem>
                              <SelectItem value="luxury">Luxury (₹30,000+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        className="w-full py-6 text-lg"
                        onClick={async () => {
                          if (!plannerData.duration || !plannerData.budget) {
                            toast.error("Please fill in all required fields");
                            return;
                          }
                          
                          setIsLoading(true);
                          toast.info("Creating your personalized itinerary...");
                          
                          await new Promise(resolve => setTimeout(resolve, 2000));
                          
                          const itinerary = generateItinerary(plannerData);
                          setGeneratedItinerary(itinerary);
                          setPlannerStep(2);
                          setIsLoading(false);
                          toast.success("Your personalized itinerary is ready!");
                        }}
                        disabled={isLoading || !plannerData.duration || !plannerData.budget}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Creating Your Itinerary...
                          </>
                        ) : (
                          <>
                            <Route className="h-5 w-5 mr-2" />
                            Create My Itinerary
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <div className="space-y-6">
                    <Card className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold">Your Personalized Itinerary</h3>
                          <p className="text-muted-foreground">
                            {plannerData.duration} • {plannerData.budget} budget
                          </p>
                        </div>
                        <Button variant="outline" onClick={() => setPlannerStep(1)}>
                          Modify Plan
                        </Button>
                      </div>

                      {generatedItinerary && (
                        <div className="space-y-6">
                          {generatedItinerary.days.map((day, index) => (
                            <Card key={index} className="p-6 border-l-4 border-l-primary">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-bold">Day {day.day}</span>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                                  <div className="space-y-3">
                                    {day.activities.map((activity, actIndex) => (
                                      <div key={actIndex} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                          <p className="font-medium">{activity.time} - {activity.activity}</p>
                                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                                    <p className="text-sm">
                                      <strong>Estimated Cost:</strong> ₹{day.cost.toLocaleString()} per person
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}

                          <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
                            <div className="text-center space-y-4">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                  <div className="text-2xl font-bold text-primary">
                                    ₹{generatedItinerary.totalCost.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-muted-foreground">Total Cost</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-primary">
                                    {generatedItinerary.monasteries}
                                  </div>
                                  <div className="text-sm text-muted-foreground">Monasteries</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-primary">
                                    {generatedItinerary.days.length}
                                  </div>
                                  <div className="text-sm text-muted-foreground">Days</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-primary">
                                    {generatedItinerary.activities}
                                  </div>
                                  <div className="text-sm text-muted-foreground">Activities</div>
                                </div>
                              </div>
                              
                              <div className="flex gap-4 justify-center">
                                <Button className="flex-1 max-w-sm">
                                  <Package className="h-4 w-4 mr-2" />
                                  Book This Itinerary
                                </Button>
                                <Button variant="outline" className="flex-1 max-w-sm">
                                  <Mail className="h-4 w-4 mr-2" />
                                  Email Itinerary
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      )}
                    </Card>
                  </div>
                )}
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