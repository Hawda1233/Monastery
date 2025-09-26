import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Bell, BookOpen, Calendar, Users, Star, Download, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const subscriptionTiers = [
    {
      name: "Explorer",
      description: "Perfect for casual monastery enthusiasts",
      price: "Free",
      features: [
        "Monthly newsletter with monastery highlights",
        "Event notifications for major festivals", 
        "New virtual tour announcements",
        "Weather updates for popular destinations"
      ],
      frequency: "Monthly",
      icon: BookOpen,
      popular: false
    },
    {
      name: "Spiritual Seeker",
      description: "For dedicated cultural explorers",
      price: "₹99/month",
      features: [
        "Weekly detailed cultural insights",
        "Exclusive monastery stories and interviews",
        "Priority access to virtual events",
        "Meditation guides and spiritual content",
        "Discount codes for handicrafts and tours",
        "Advanced weather forecasting"
      ],
      frequency: "Weekly",
      icon: Star,
      popular: true
    },
    {
      name: "Cultural Ambassador",
      description: "For researchers and cultural enthusiasts",
      price: "₹199/month", 
      features: [
        "Daily monastery updates and news",
        "Access to premium digital archives",
        "Research reports and historical documents",
        "Direct connect with local guides and artisans",
        "Exclusive webinars with Buddhist scholars",
        "Custom travel planning assistance",
        "Early access to new platform features",
        "Physical newsletter shipped quarterly"
      ],
      frequency: "Daily",
      icon: Users,
      popular: false
    }
  ];

  const recentNewsletters = [
    {
      title: "The Sacred Art of Thangka Painting",
      date: "March 2024",
      excerpt: "Discover the intricate process of creating traditional Buddhist paintings with master artist Tenzin Norbu from Rumtek Monastery...",
      readTime: "8 min read",
      category: "Art & Culture"
    },
    {
      title: "Losar Festival 2024: A Digital Celebration",
      date: "February 2024", 
      excerpt: "Experience the vibrant Tibetan New Year celebrations through our exclusive 360° coverage of festivities across Sikkim's monasteries...",
      readTime: "12 min read",
      category: "Festivals"
    },
    {
      title: "Weather Guide: Best Times to Visit Monasteries",
      date: "February 2024",
      excerpt: "Complete seasonal guide for monastery visits, including photography tips, weather considerations, and festival calendars...",
      readTime: "15 min read",
      category: "Travel Guide"
    },
    {
      title: "New Digital Archive: Pemayangtse Manuscripts",
      date: "January 2024",
      excerpt: "Over 200 ancient manuscripts from Pemayangtse Monastery are now available in our digital archive with AI-powered search...",
      readTime: "6 min read",
      category: "Archives"
    }
  ];

  const benefits = [
    {
      title: "Stay Updated",
      description: "Never miss monastery events, festivals, or new virtual tour releases",
      icon: Bell
    },
    {
      title: "Exclusive Content",
      description: "Access stories, interviews, and insights not available elsewhere",
      icon: Star
    },
    {
      title: "Community Access",
      description: "Connect with fellow spiritual seekers and cultural enthusiasts worldwide",
      icon: Users
    },
    {
      title: "Early Access",
      description: "Be the first to explore new virtual tours and digital archives",
      icon: CheckCircle
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Subscribers" },
    { number: "150+", label: "Newsletter Issues" }, 
    { number: "4.9/5", label: "Reader Rating" },
    { number: "50+", label: "Countries Reached" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Newsletter & Updates
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay connected with Sikkim's monastic heritage through our curated newsletter featuring 
              exclusive stories, cultural insights, and spiritual wisdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Archives
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
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

      {/* Subscription Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Subscription</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan to stay connected with Sikkim's spiritual heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subscriptionTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-lg transition-shadow ${
                    tier.popular ? 'border-primary border-2' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">{tier.price}</div>
                    <div className="text-sm text-muted-foreground">{tier.frequency} updates</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${tier.popular ? '' : 'variant-outline'}`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      {tier.price === 'Free' ? 'Subscribe Free' : 'Choose Plan'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Subscribe?</h2>
            <p className="text-lg text-muted-foreground">
              Join our community of spiritual seekers and cultural enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Newsletters</h2>
            <p className="text-lg text-muted-foreground">
              Get a taste of what our subscribers receive
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentNewsletters.map((newsletter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{newsletter.category}</Badge>
                    <span className="text-sm text-muted-foreground">{newsletter.date}</span>
                  </div>
                  <CardTitle className="text-xl">{newsletter.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{newsletter.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{newsletter.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Newsletters
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Subscribe */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Start Your Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of spiritual seekers and cultural enthusiasts worldwide
            </p>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border rounded-lg"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Interests (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Virtual Tours', 'Festivals', 'Handicrafts', 'Weather Updates', 'Cultural Stories', 'Meditation'].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Subscription Plan</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Explorer (Free)</option>
                    <option>Spiritual Seeker (₹99/month)</option>
                    <option>Cultural Ambassador (₹199/month)</option>
                  </select>
                </div>
                
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe Now
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to receive newsletters and can unsubscribe at any time. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;