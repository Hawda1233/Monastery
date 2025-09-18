import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { title: "Home", path: "/" },
        { title: "Explore Monasteries", path: "/explore" },
        { title: "Digital Archives", path: "/archives" },
        { title: "Events & Festivals", path: "/events" },
        { title: "Travel Services", path: "/travel" },
        { title: "Audio Guide App", path: "/audio-guide" },
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" }
      ]
    },
    {
      category: "Support & Information",
      pages: [
        { title: "FAQ", path: "/faq" },
        { title: "Help Center", path: "/help" },
        { title: "Accessibility", path: "/accessibility" },
        { title: "Sitemap", path: "/sitemap" },
        { title: "Feedback", path: "/feedback" }
      ]
    },
    {
      category: "Legal",
      pages: [
        { title: "Privacy Policy", path: "/privacy" },
        { title: "Terms of Service", path: "/terms" },
        { title: "Cookie Policy", path: "/cookies" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Sitemap</h1>
            <p className="text-lg text-muted-foreground">
              Complete overview of all pages on Monastery360
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteStructure.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link 
                          to={page.path} 
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                        >
                          {page.title}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">External Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">Government of Sikkim Official Website</li>
                    <li className="text-muted-foreground">Sikkim Tourism Board</li>
                    <li className="text-muted-foreground">Buddhist Heritage Sites</li>
                    <li className="text-muted-foreground">Cultural Ministry Resources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Mobile App</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">Download on App Store</li>
                    <li className="text-muted-foreground">Get it on Google Play</li>
                    <li className="text-muted-foreground">App Documentation</li>
                    <li className="text-muted-foreground">System Requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Site Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    <strong>Last Updated:</strong> January 2024
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Total Pages:</strong> {siteStructure.reduce((acc, section) => acc + section.pages.length, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    <strong>Languages:</strong> English, Nepali, Hindi, Tibetan
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Content Type:</strong> Text, Images, Videos, Audio, 3D Tours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;