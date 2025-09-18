import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Heart, Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Tenzin Norbu",
      role: "Project Director",
      description: "Buddhist scholar and digital preservation expert with 20+ years of experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      credentials: "PhD in Buddhist Studies, Harvard University"
    },
    {
      name: "Pema Lhamo",
      role: "Cultural Heritage Specialist",
      description: "Local historian specializing in Sikkim's monastery traditions and architecture.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200",
      credentials: "MA in Cultural Heritage, Sikkim University"
    },
    {
      name: "Rajesh Kumar",
      role: "Technology Lead",
      description: "Expert in digital preservation, AR/VR technologies, and mobile app development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      credentials: "MS Computer Science, IIT Delhi"
    },
    {
      name: "Sarah Thompson",
      role: "UX Design Director",
      description: "International expert in cultural heritage user experience and accessibility design.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      credentials: "MA Design, Royal College of Art, London"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "UNESCO Recognition",
      description: "Officially recognized by UNESCO for digital heritage preservation efforts.",
      year: "2023"
    },
    {
      icon: Users,
      title: "50,000+ Visitors",
      description: "Platform has reached over 50,000 virtual visitors from 80+ countries.",
      year: "2024"
    },
    {
      icon: MapPin,
      title: "25 Monasteries Digitized",
      description: "Complete digital documentation of 25 major monasteries across Sikkim.",
      year: "2024"
    },
    {
      icon: Calendar,
      title: "Digital Heritage Award",
      description: "Winner of the International Digital Heritage Excellence Award.",
      year: "2023"
    }
  ];

  const partners = [
    { name: "Government of Sikkim", role: "Primary Partner" },
    { name: "Ministry of Culture, India", role: "Government Support" },
    { name: "Buddhist Heritage Foundation", role: "Cultural Advisor" },
    { name: "Sikkim Tourism Board", role: "Tourism Integration" },
    { name: "Indian Institute of Technology", role: "Technical Partner" },
    { name: "UNESCO", role: "International Recognition" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="text-foreground">Monastery360</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A groundbreaking digital heritage platform preserving and sharing the sacred wisdom 
            of Sikkim's monasteries for present and future generations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To preserve, digitize, and make accessible the rich cultural and spiritual heritage 
                of Sikkim's monasteries through cutting-edge technology, ensuring these sacred traditions 
                remain alive for future generations while providing immersive educational experiences 
                for visitors worldwide.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading digital heritage platform for Buddhist monasteries, 
                creating a bridge between ancient wisdom and modern technology. We envision a future 
                where anyone, anywhere, can experience the profound spirituality and cultural richness 
                of Himalayan monasteries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Partnership */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Government of Sikkim Partnership</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This project is proudly supported by the Government of Sikkim in collaboration with 
                the Ministry of Culture, India. Together, we're working to preserve Sikkim's invaluable 
                cultural heritage and promote sustainable spiritual tourism.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Official Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  Officially endorsed and supported by state government initiatives
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold mb-2">Community Involvement</h3>
                <p className="text-sm text-muted-foreground">
                  Working directly with monastery communities and local stakeholders
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">Sustainable Tourism</h3>
                <p className="text-sm text-muted-foreground">
                  Promoting responsible cultural tourism that benefits local communities
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of scholars, technologists, and cultural heritage experts 
              dedicated to preserving and sharing Buddhist heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    {member.description}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {member.credentials}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and milestones that demonstrate our commitment to excellence 
              in digital heritage preservation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-3">{achievement.year}</Badge>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading institutions and organizations to ensure 
              authentic and comprehensive digital heritage preservation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.role}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <Heart className="h-16 w-16 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us preserve and share the sacred heritage of Sikkim's monasteries. 
              Whether you're a researcher, cultural enthusiast, or technology partner, 
              there are many ways to contribute to this important work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="group">
                <Users className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Get Involved
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Heart className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Support Project
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;