import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, User, Camera, MapPin, Calendar, ThumbsUp, MessageCircle } from "lucide-react";

const Reviews = () => {
  const touristReviews = [
    {
      name: "Sarah Johnson",
      country: "USA",
      rating: 5,
      review: "The virtual tours are absolutely stunning! Felt like I was actually walking through the monasteries. The audio guides made it so informative and the 360° experience was breathtaking. Highly recommend for anyone interested in Buddhist culture.",
      tour: "Rumtek Virtual Experience",
      date: "March 2024",
      helpful: 24,
      verified: true,
      images: ["/api/placeholder/150/150", "/api/placeholder/150/150"]
    },
    {
      name: "Raj Patel",
      country: "India", 
      rating: 5,
      review: "Excellent service! The homestay booking was seamless and the local guides were incredibly knowledgeable about Buddhist culture. The family I stayed with treated me like their own son. Amazing cultural immersion experience.",
      tour: "Heritage Walk Package",
      date: "February 2024",
      helpful: 18,
      verified: true,
      images: ["/api/placeholder/150/150"]
    },
    {
      name: "Emma Chen",
      country: "Singapore",
      rating: 4,
      review: "Amazing cultural immersion. The local handicrafts section helped me buy authentic Sikkimese items directly from artisans. The weather information was very helpful for planning. Only wish there were more interactive elements.",
      tour: "Cultural Discovery Tour",
      date: "January 2024",
      helpful: 15,
      verified: true,
      images: ["/api/placeholder/150/150"]
    },
    {
      name: "Marcus Weber",
      country: "Germany",
      rating: 5,
      review: "Outstanding digital preservation of cultural heritage! As a history professor, I'm impressed by the detailed documentation and the quality of the virtual tours. This is how cultural tourism should be done in the 21st century.",
      tour: "Digital Archive Access",
      date: "March 2024",
      helpful: 32,
      verified: true,
      images: []
    },
    {
      name: "Priya Sharma",
      country: "India",
      rating: 5,
      review: "The monastery festival calendar helped me time my visit perfectly. Witnessed the Losar festival at Rumtek - absolutely magical! The local tour guides arranged through the platform were exceptional and very knowledgeable.",
      tour: "Festival Experience Package",
      date: "February 2024",
      helpful: 27,
      verified: true,
      images: ["/api/placeholder/150/150", "/api/placeholder/150/150", "/api/placeholder/150/150"]
    },
    {
      name: "James Mitchell",
      country: "UK",
      rating: 4,
      review: "Great platform for monastery exploration! The audio guide app worked perfectly offline during my trek. The homestay experience was authentic and the food was incredible. Would love to see more monasteries added to the collection.",
      tour: "Trekking & Monastery Tour",
      date: "January 2024",
      helpful: 21,
      verified: true,
      images: ["/api/placeholder/150/150"]
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      review: "Incredible spiritual journey! The meditation sessions at Pemayangtse were life-changing. The platform's weather updates helped me pack appropriately. The local handicrafts I bought are beautiful and authentic.",
      tour: "Spiritual Retreat Package",
      date: "March 2024",
      helpful: 19,
      verified: true,
      images: ["/api/placeholder/150/150"]
    },
    {
      name: "Anna Kowalski",
      country: "Poland",
      rating: 4,
      review: "Fascinating cultural experience! The digital archives provided so much historical context. The homestay family taught me to cook traditional dishes. The only downside was limited internet connectivity in remote areas.",
      tour: "Cultural Immersion Program",
      date: "February 2024",
      helpful: 16,
      verified: true,
      images: ["/api/placeholder/150/150", "/api/placeholder/150/150"]
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "1,200+", label: "Reviews", icon: MessageCircle },
    { number: "50+", label: "Countries", icon: MapPin },
    { number: "98%", label: "Verified Reviews", icon: ThumbsUp }
  ];

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Tourist Reviews & Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover what fellow travelers say about their spiritual journey through 
              Sikkim's monasteries and cultural experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Star className="mr-2 h-5 w-5" />
                Write a Review
              </Button>
              <Button size="lg" variant="outline">
                <Camera className="mr-2 h-5 w-5" />
                Share Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Traveler Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from visitors who explored Sikkim's spiritual heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {touristReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {review.country}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {getStars(review.rating)}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {review.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">"{review.review}"</p>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {review.tour}
                    </Badge>
                  </div>
                  
                  {review.images.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {review.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`Review image ${imgIndex + 1}`}
                          className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                        Helpful ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        Reply
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Write Review Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Share Your Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help fellow travelers by sharing your monastery visit experience
            </p>
            
            <Card className="p-8 text-left">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your country" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tour/Experience</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Select your experience</option>
                    <option>Virtual Tour Experience</option>
                    <option>Physical Monastery Visit</option>
                    <option>Homestay Experience</option>
                    <option>Cultural Tour Package</option>
                    <option>Festival Experience</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-6 w-6 cursor-pointer hover:fill-yellow-400 hover:text-yellow-400 transition-colors"
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <textarea 
                    className="w-full p-3 border rounded-lg h-32 resize-none" 
                    placeholder="Share your experience..."
                  ></textarea>
                </div>
                
                <Button className="w-full" size="lg">
                  Submit Review
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;