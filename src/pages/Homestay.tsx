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
  Heart,
  Utensils,
  TreePine,
  Bath,
  Bed,
  Camera,
  Shield
} from "lucide-react";

// Import homestay images
import ronglyangBedroom1 from "@/assets/ronglyang-bedroom-1.png";
import ronglyangKitchen from "@/assets/ronglyang-kitchen.png";
import ronglyangBedroom2 from "@/assets/ronglyang-bedroom-2.png";
import ronglyangExterior from "@/assets/ronglyang-exterior.png";
import ronglyangLiving from "@/assets/ronglyang-living.png";
import ronglyangBathroom from "@/assets/ronglyang-bathroom.png";
import ronglyangVilla from "@/assets/ronglyang-villa.png";

const Homestay = () => {
  const [selectedHomestay, setSelectedHomestay] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  const homestays = [
    {
      id: 1,
      name: "Ronglyang Villa Homestay Near MG Road",
      location: "Ronglyang Lotus Homestay, 737102 Gangtok, India",
      description: "Comfortable accommodation in Gangtok offering family rooms with private bathrooms, balconies, and garden views. Each room includes a work desk, free toiletries, and a wardrobe. Namgyal Institute of Tibetology is a 13-minute walk away, while Do Drul Chorten Monastery lies 1.3 km from the property.",
      price: "₹3,500",
      rating: 4.7,
      reviews: 94,
      amenities: ["Airport Shuttle", "Non-smoking Rooms", "Good Free WiFi (46 Mbps)", "Family Rooms", "Vegetarian Breakfast", "Mountain View", "Sun Terrace", "Garden", "Outdoor Fireplace", "Indoor Play Area", "Coffee Shop", "Picnic Spots"],
      maxGuests: 6,
      rooms: 3,
      phone: "+91 98765 43210",
      email: "ronglyang@homestay.com",
      images: [ronglyangVilla, ronglyangBedroom1, ronglyangBedroom2, ronglyangKitchen, ronglyangLiving, ronglyangBathroom, ronglyangExterior],
      host: "Ronglyang Family",
      hostExperience: "7 years hosting experience",
      specialties: ["Vegetarian Cuisine", "Local Culture", "Monastery Tours"],
      highlights: [
        "Genius discounts available for selected dates",
        "Vegetarian breakfast served daily with warm dishes, juice, and cheese",
        "13-minute walk to Namgyal Institute of Tibetology",
        "1.3 km from Do Drul Chorten Monastery", 
        "24 km from Pakyong Airport",
        "Sun terrace and garden for relaxation",
        "Outdoor fireplace and indoor play area",
        "Free WiFi throughout the property"
      ]
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
                    {/* Image Gallery */}
                    <div className="grid md:grid-cols-3 gap-2 p-4">
                      <div className="md:col-span-2 relative">
                        <img
                          src={homestay.images[0]}
                          alt={homestay.name}
                          className="w-full h-64 md:h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-green-500/90 backdrop-blur-sm text-white">
                            Available
                          </Badge>
                          <Badge className="bg-blue-500/90 backdrop-blur-sm text-white">
                            <Shield className="h-3 w-3 mr-1" />
                            Genius Discount
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
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                        {homestay.images.slice(1, 5).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${homestay.name} ${index + 2}`}
                            className="w-full h-20 md:h-[75px] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        ))}
                        {homestay.images.length > 5 && (
                          <div className="relative">
                            <img
                              src={homestay.images[5]}
                              alt={homestay.name}
                              className="w-full h-20 md:h-[75px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                <Camera className="h-4 w-4 inline mr-1" />
                                +{homestay.images.length - 5}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{homestay.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{homestay.location}</span>
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

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Property Highlights:</h4>
                        <div className="space-y-1 max-h-32 overflow-y-auto">
                          {homestay.highlights.slice(0, 4).map((highlight, index) => (
                            <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                          {homestay.highlights.length > 4 && (
                            <div className="text-sm text-primary cursor-pointer">
                              +{homestay.highlights.length - 4} more highlights
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Host Details:
                          </h4>
                          <div className="text-sm space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{homestay.host}</span>
                            </div>
                            <div className="text-muted-foreground">{homestay.hostExperience}</div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Most Popular Facilities:</h4>
                          <div className="flex flex-wrap gap-1">
                            {homestay.amenities.slice(0, 4).map((amenity, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                            {homestay.amenities.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{homestay.amenities.length - 4} more
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
                          <Camera className="h-4 w-4 mr-2" />
                          View Photos
                        </Button>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => {
                            setSelectedHomestay(homestay);
                            setBookingStep(2);
                          }}
                        >
                          <Home className="h-4 w-4 mr-2" />
                          Check Availability
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          ) : bookingStep === 2 ? (
            /* Availability Check Form */
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Check Availability</h2>
                <p className="text-muted-foreground">
                  {selectedHomestay?.name}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Information</CardTitle>
                  <CardDescription>
                    Please fill in your details and we'll check availability for your dates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>

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
                          <SelectItem value="6">6 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Special Requests or Questions</Label>
                    <Textarea 
                      placeholder="Any dietary requirements, accessibility needs, special occasions, or questions about the property..."
                      rows={3}
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">What happens next?</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                      <li>• We'll check availability for your selected dates</li>
                      <li>• The host will contact you within 24 hours</li>
                      <li>• You'll receive booking confirmation and payment details</li>
                      <li>• No payment required until availability is confirmed</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setBookingStep(1)}
                    >
                      Back to Property
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => setBookingStep(3)}
                    >
                      Check Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Thank You Confirmation with Animation */
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                {/* Animated Success Icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <CheckCircle className="h-16 w-16 text-white animate-bounce" />
                  </div>
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                </div>
                
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                    Thank You!
                  </h2>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Availability Request Submitted Successfully
                  </h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Your request for <span className="font-semibold text-foreground">{selectedHomestay?.name}</span> has been received. 
                      Our team will contact you within <span className="font-semibold text-green-600">24 hours</span> to confirm availability 
                      and provide you with detailed booking information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <Card className="text-left mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Availability Check</p>
                        <p className="text-sm text-muted-foreground">We'll verify availability for your selected dates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Host Contact</p>
                        <p className="text-sm text-muted-foreground">The host will reach out via phone or email within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Booking Confirmation</p>
                        <p className="text-sm text-muted-foreground">Complete your reservation with payment and check-in details</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Request ID: #RV2024{Math.random().toString(36).substr(2, 6).toUpperCase()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  className="w-full text-lg py-6"
                  onClick={() => {
                    setBookingStep(1);
                    setSelectedHomestay(null);
                    setCheckIn(undefined);
                    setCheckOut(undefined);
                  }}
                >
                  <Home className="h-5 w-5 mr-2" />
                  Explore More Homestays
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </div>
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