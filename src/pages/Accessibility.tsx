import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Accessibility Statement</h1>
            <p className="text-lg text-muted-foreground">
              We're committed to making Monastery360 accessible to everyone
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monastery360 is committed to ensuring digital accessibility for people with disabilities. 
                We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    Visual Accessibility
                    <Badge variant="secondary">Active</Badge>
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>High contrast color schemes</li>
                    <li>Scalable text and images</li>
                    <li>Alternative text for images</li>
                    <li>Clear visual hierarchy</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    Navigation & Input
                    <Badge variant="secondary">Active</Badge>
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Keyboard navigation support</li>
                    <li>Focus indicators</li>
                    <li>Skip to content links</li>
                    <li>Logical tab order</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    Audio & Media
                    <Badge variant="secondary">Active</Badge>
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Audio descriptions for tours</li>
                    <li>Captions for videos</li>
                    <li>Volume controls</li>
                    <li>Audio transcripts</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    Language & Content
                    <Badge variant="secondary">Active</Badge>
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Multi-language support</li>
                    <li>Plain language content</li>
                    <li>Consistent navigation</li>
                    <li>Clear instructions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Monastery360 aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                at the AA level and follows the Indian government's accessibility guidelines.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Badge className="mb-2">WCAG 2.1 AA</Badge>
                  <p className="text-sm text-muted-foreground">International standard compliance</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Badge className="mb-2">Section 508</Badge>
                  <p className="text-sm text-muted-foreground">US federal accessibility standard</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Badge className="mb-2">India Guidelines</Badge>
                  <p className="text-sm text-muted-foreground">Government of India accessibility norms</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback and Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We welcome your feedback on the accessibility of Monastery360. Please let us know if you 
                encounter accessibility barriers on our platform.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Accessibility Team:</strong> accessibility@monastery360.sikkim.gov.in
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong> +91 3592 123456 (Weekdays 9 AM - 5 PM IST)
                </p>
                <p className="text-sm">
                  <strong>Response Time:</strong> We aim to respond within 2 business days
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Accessibility of Monastery360 relies on the following technologies:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                <li>HTML5 semantic markup</li>
                <li>CSS3 for responsive design</li>
                <li>JavaScript for enhanced functionality</li>
                <li>ARIA attributes for screen readers</li>
                <li>Progressive enhancement principles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;