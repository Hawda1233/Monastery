import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Phone, Mail, MapPin, Users, Award, Sparkles } from "lucide-react";

const Business = () => {
  const handicrafts = [
    {
      name: "Traditional Thangka Paintings",
      price: "₹2,500 - ₹15,000",
      description: "Handpainted religious artworks by local artisans depicting Buddhist deities and mandalas",
      artisan: "Tashi Art Center",
      location: "Gangtok",
      phone: "+91 98765 43210",
      image: "/api/placeholder/400/300",
      rating: 4.9,
      orders: 150
    },
    {
      name: "Handwoven Carpets",
      price: "₹8,000 - ₹25,000", 
      description: "Pure wool carpets with traditional Tibetan designs, perfect for meditation spaces",
      artisan: "Sikkim Handicrafts Emporium",
      location: "Pelling",
      phone: "+91 98765 43211",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      orders: 89
    },
    {
      name: "Prayer Wheels & Bowls",
      price: "₹500 - ₹5,000",
      description: "Authentic copper and brass spiritual items crafted by monastery artisans",
      artisan: "Local Monastery Craftsmen",
      location: "Rumtek",
      phone: "+91 98765 43212",
      image: "/api/placeholder/400/300",
      rating: 5.0,
      orders: 234
    },
    {
      name: "Wooden Masks & Sculptures",
      price: "₹1,200 - ₹8,000",
      description: "Intricately carved traditional masks used in Cham dances and Buddhist ceremonies",
      artisan: "Himalayan Wood Crafts",
      location: "Yuksom",
      phone: "+91 98765 43213",
      image: "/api/placeholder/400/300",
      rating: 4.7,
      orders: 67
    },
    {
      name: "Yak Wool Products",
      price: "₹800 - ₹4,500",
      description: "Warm and durable shawls, blankets, and clothing made from pure yak wool",
      artisan: "High Altitude Weavers",
      location: "Lachen",
      phone: "+91 98765 43214",
      image: "/api/placeholder/400/300",
      rating: 4.6,
      orders: 112
    },
    {
      name: "Traditional Jewelry",
      price: "₹1,500 - ₹12,000",
      description: "Silver and turquoise jewelry following ancient Tibetan designs and craftsmanship",
      artisan: "Mountain Jewelers Collective",
      location: "Gangtok",
      phone: "+91 98765 43215",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      orders: 98
    }
  ];

  const businessOpportunities = [
    {
      title: "Become a Partner Artisan",
      description: "Join our network of local craftsmen and sell your authentic handicrafts to global customers",
      benefits: ["Global market access", "Marketing support", "Fair pricing", "Quality certification"],
      icon: Award
    },
    {
      title: "Homestay Partnership",
      description: "Register your homestay and welcome visitors seeking authentic cultural experiences",
      benefits: ["Direct bookings", "Tourist guides", "Cultural workshops", "Steady income"],
      icon: Users
    },
    {
      title: "Tour Guide Network",
      description: "Become a certified cultural guide and share your knowledge with international visitors",
      benefits: ["Professional training", "Tourist connections", "Flexible schedule", "Cultural exchange"],
      icon: Sparkles
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Local Business & Handicrafts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover authentic Sikkimese handicrafts created by local artisans and explore 
              business opportunities that support community development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Handicrafts
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Business Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Handicrafts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Authentic Handicrafts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Support local artisans and bring home genuine pieces of Sikkimese culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handicrafts.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 text-foreground">
                      {item.orders} orders
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({item.orders} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{item.price}</div>
                    </div>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{item.artisan}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{item.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Order Now</Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Opportunities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Business Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of entrepreneurs and create sustainable income through cultural tourism
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-left">Benefits:</h4>
                      <ul className="text-left space-y-1">
                        {opportunity.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Star className="h-3 w-3 text-primary fill-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Get Started Today</h2>
              <p className="text-lg text-muted-foreground">
                Ready to join our community of artisans and entrepreneurs?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Artisans & Businesses</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 98765 00000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>business@monastery360.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Gangtok, Sikkim</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Register Your Business</Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Customers</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 98765 11111</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>orders@monastery360.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span>Free shipping above ₹2,000</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">Browse Catalog</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;