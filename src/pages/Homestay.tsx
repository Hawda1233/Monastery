import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Mountain,
  CalendarIcon,
  CheckCircle,
  Clock,
  Heart
} from "lucide-react";

const Homestay = () => {
  const [selectedHomestay, setSelectedHomestay] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  const homestays = [
    {
      id: 1,
      name: "Traditional Sikkimese Family Homestay",
      location: "Gangtok, East Sikkim",
      description: "Experience authentic Sikkimese culture with a warm local family. Learn traditional cooking, participate in daily rituals, and enjoy stunning mountain views.",
      price: "₹2,500",
      rating: 4.8,
      reviews: 126,
      amenities: ["Free WiFi", "Traditional Meals", "Cultural Activities", "Mountain Views", "Parking"],
      maxGuests: 4,
      rooms: 2,
      phone: "+91 98324 56789",
      email: "family@homestay.com",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      host: "Pemba & Dolma Sherpa",
      hostExperience: "5 years hosting experience",
      specialties: ["Traditional Cuisine", "Local Festivals", "Trekking Guide"]
    },
    {
      id: 2, 
      name: "Monastery View Heritage House",
      location: "Pelling, West Sikkim",
      description: "Stay in a heritage home with direct views of Pemayangtse Monastery. Perfect for spiritual seekers and culture enthusiasts.",
      price: "₹3,200",
      rating: 4.9,
      reviews: 89,
      amenities: ["Monastery Views", "Organic Garden", "Meditation Space", "Library", "Hot Water"],
      maxGuests: 6,
      rooms: 3,
      phone: "+91 97482 33445",
      email: "heritage@monastery-view.com",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      host: "Tenzin Norbu",
      hostExperience: "8 years hosting experience",
      specialties: ["Buddhist Philosophy", "Organic Farming", "Photography"]
    },
    {
      id: 3,
      name: "Alpine Village Homestay",
      location: "Lachen, North Sikkim",
      description: "High-altitude homestay offering panoramic Himalayan views. Perfect base for exploring Gurudongmar Lake and alpine meadows.",
      price: "₹1,800",
      rating: 4.7,
      reviews: 67,
      amenities: ["Himalayan Views", "Local Guide", "Bonfire Evenings", "Yak Cheese Tasting", "Trekking Equipment"],
      maxGuests: 8,
      rooms: 4,
      phone: "+91 95935 77688",
      email: "alpine@lachen-stay.com",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      host: "Karma Lepcha",
      hostExperience: "6 years hosting experience",
      specialties: ["High Altitude Trekking", "Wildlife Spotting", "Local Folklore"]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <Navbar />
      <BackButton />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Homestay
            </span>
            <br />
            <span className="text-foreground">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay with local families and experience authentic Sikkimese culture, traditional cuisine, 
            and warm hospitality in the heart of the Himalayas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {bookingStep === 1 ? (
            <>
              {/* Search Filters */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Guests</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-end">
                      <Button className="w-full">
                        Search Homestays
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Homestay Listings */}
              <div className="grid gap-6">
                {homestays.map((homestay) => (
                  <Card key={homestay.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img
                          src={homestay.images[0]}
                          alt={homestay.name}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500/90 backdrop-blur-sm text-white">
                            Available
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-4 right-4 text-white hover:bg-white/20"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{homestay.name}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4" />
                              <span>{homestay.location}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="font-medium">{homestay.rating}</span>
                              <span className="text-muted-foreground">({homestay.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold">{homestay.price}</div>
                            <div className="text-sm text-muted-foreground">per night</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{homestay.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium mb-2">Host Details:</h4>
                            <div className="text-sm space-y-1">
                              <div className="flex items-center gap-2">
                                <Users className="h-3 w-3" />
                                <span>{homestay.host}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3" />
                                <span>{homestay.hostExperience}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Amenities:</h4>
                            <div className="flex flex-wrap gap-1">
                              {homestay.amenities.slice(0, 3).map((amenity, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {amenity}
                                </Badge>
                              ))}
                              {homestay.amenities.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{homestay.amenities.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            variant="outline"
                            className="flex-1"
                          >
                            View Details
                          </Button>
                          <Button 
                            className="flex-1"
                            onClick={() => {
                              setSelectedHomestay(homestay);
                              setBookingStep(2);
                            }}
                          >
                            <Home className="h-4 w-4 mr-2" />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          ) : bookingStep === 2 ? (
            /* Booking Form */
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Complete Your Booking</h2>
                <p className="text-muted-foreground">
                  You're booking: <span className="font-medium">{selectedHomestay?.name}</span>
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                  <CardDescription>
                    Please fill in your information to confirm the homestay reservation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Guests</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Special Requests</Label>
                    <Textarea 
                      placeholder="Any dietary requirements, accessibility needs, or special requests..."
                      rows={3}
                    />
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center text-lg font-semibold mb-4">
                      <span>Total Amount:</span>
                      <span>{selectedHomestay?.price} x 3 nights = ₹7,500</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setBookingStep(1)}
                    >
                      Back to Listings
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => setBookingStep(3)}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Confirmation */
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground text-lg">
                  Your homestay reservation has been successfully submitted. 
                  The host will contact you within 24 hours to confirm availability and provide check-in details.
                </p>
              </div>

              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Homestay:</span>
                    <span className="font-medium">{selectedHomestay?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Host:</span>
                    <span className="font-medium">{selectedHomestay?.host}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{selectedHomestay?.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Cost:</span>
                    <span className="font-medium text-lg">₹7,500</span>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                      Booking ID: #HS2024{Math.random().toString(36).substr(2, 6).toUpperCase()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-4">
                <Button 
                  className="w-full"
                  onClick={() => {
                    setBookingStep(1);
                    setSelectedHomestay(null);
                  }}
                >
                  Book Another Homestay
                </Button>
                <Button variant="outline" className="w-full">
                  Download Booking Confirmation
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homestay;