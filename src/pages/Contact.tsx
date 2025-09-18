import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageCircle, Handshake, FileText, Users, Send, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@monastery360.org",
      secondary: "support@monastery360.org",
      description: "General inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 98765 43211",
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Digital Heritage Center",
      secondary: "Gangtok, Sikkim 737101",
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday",
      secondary: "9:00 AM - 6:00 PM IST",
      description: "Closed on public holidays"
    }
  ];

  const collaborationTypes = [
    {
      icon: Users,
      title: "Academic Research",
      description: "Partner with universities and research institutions for scholarly studies.",
      examples: ["Digital preservation research", "Buddhist heritage studies", "Technology innovation"]
    },
    {
      icon: Handshake,
      title: "Cultural Partnerships",
      description: "Collaborate with monasteries, cultural organizations, and heritage sites.",
      examples: ["Monastery digitization", "Cultural exchange programs", "Heritage documentation"]
    },
    {
      icon: FileText,
      title: "Content Collaboration",
      description: "Work with historians, photographers, and content creators.",
      examples: ["Historical documentation", "Photography projects", "Audio narration"]
    },
    {
      icon: MessageCircle,
      title: "Technology Partners",
      description: "Partner with tech companies and startups for platform development.",
      examples: ["AR/VR development", "Mobile app features", "AI integration"]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="text-foreground">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions, feedback, or collaboration ideas? We'd love to hear from you. 
            Connect with our team to explore how we can work together to preserve and share 
            Sikkim's monastery heritage.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-sm font-medium mb-1">{info.primary}</p>
                  <p className="text-sm text-muted-foreground mb-2">{info.secondary}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="research">Research Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group">
                    <Send className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Info & FAQ */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Quick Response Times</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">General Inquiries</span>
                      <Badge variant="outline">24 hours</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Technical Support</span>
                      <Badge variant="outline">48 hours</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Collaboration Requests</span>
                      <Badge variant="outline">3-5 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Media Inquiries</span>
                      <Badge variant="outline">Same day</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">How can I access the virtual tours?</h4>
                      <p className="text-sm text-muted-foreground">
                        Visit our Explore Monasteries section or download our mobile app for the best experience.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Can I use content for research?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! We welcome academic research partnerships. Contact us for access permissions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">How do I report technical issues?</h4>
                      <p className="text-sm text-muted-foreground">
                        Use the contact form above with "Technical Support" category for fastest response.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership & Collaboration</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in preserving and sharing Buddhist heritage. We welcome partnerships 
              with institutions, researchers, and organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <div className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {example}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="group">
              <Handshake className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              Explore Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Social & Links */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="text-muted-foreground mb-8">
              Follow our journey and get updates on new monastery additions, 
              features, and cultural heritage preservation efforts.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="group">
                <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                Newsletter
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                LinkedIn
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                Twitter
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                YouTube
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;