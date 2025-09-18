import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Book, Video, Download, Map, Headphones } from "lucide-react";

const Help = () => {
  const helpTopics = [
    {
      icon: Search,
      title: "Getting Started",
      description: "Learn the basics of navigating and using Monastery360",
      topics: ["Creating an account", "Navigation basics", "Search functionality", "User dashboard"]
    },
    {
      icon: Video,
      title: "Virtual Tours",
      description: "How to access and navigate 360° monastery tours",
      topics: ["Starting a virtual tour", "Navigation controls", "Interactive hotspots", "Sharing tours"]
    },
    {
      icon: Book,
      title: "Digital Archives",
      description: "Accessing and using our digital archive collection",
      topics: ["Browsing archives", "Search filters", "Download permissions", "Citation guidelines"]
    },
    {
      icon: Map,
      title: "Travel Planning",
      description: "Using our travel services and planning tools",
      topics: ["Trip planning", "Booking transportation", "Finding accommodation", "Local guides"]
    },
    {
      icon: Headphones,
      title: "Audio Guide App",
      description: "Downloading and using the mobile audio guide",
      topics: ["App download", "Offline mode", "Location features", "Audio quality settings"]
    },
    {
      icon: Download,
      title: "Downloads & Offline",
      description: "Managing downloads and offline content",
      topics: ["Download limits", "Offline access", "Storage management", "Sync settings"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Help Center</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about using Monastery360
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card key={index} className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                    <ul className="space-y-2">
                      {topic.topics.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">For Visitors</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                    <li>Browse monasteries in the 'Explore' section</li>
                    <li>Start a virtual 360° tour</li>
                    <li>Plan your visit using 'Travel Services'</li>
                    <li>Download the mobile app for on-site guides</li>
                  </ol>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">For Researchers</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
                    <li>Access the 'Digital Archives' section</li>
                    <li>Use AI-powered search to find specific content</li>
                    <li>Download materials for research</li>
                    <li>Contribute to the platform through partnerships</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Personal Support?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Our support team is available to help with any questions or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Support</Button>
                <Button variant="outline">Live Chat</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;