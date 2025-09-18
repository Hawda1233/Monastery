import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                how you use our site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <Badge>Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>Session management</li>
                  <li>Security tokens</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>Page views and traffic sources</li>
                  <li>Time spent on pages</li>
                  <li>Popular content areas</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Functional Cookies</h3>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and settings.
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>Language preferences</li>
                  <li>Font size and display settings</li>
                  <li>Region/location settings</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have several options for managing cookies on our website:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Browser Settings</h3>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete cookies when browser closes</li>
                    <li>View and delete individual cookies</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold">Cookie Preferences</h3>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Essential cookies (always active)</li>
                    <li>Analytics cookies (can be disabled)</li>
                    <li>Functional cookies (can be disabled)</li>
                    <li>Update preferences anytime</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Some cookies may be set by third-party services that appear on our pages:
              </p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                <li><strong>Google Analytics:</strong> Web traffic analysis</li>
                <li><strong>YouTube:</strong> Video content delivery</li>
                <li><strong>Social Media:</strong> Social sharing buttons</li>
                <li><strong>Maps Services:</strong> Interactive monastery locations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Session Cookies</h3>
                  <p className="text-muted-foreground">
                    Deleted when you close your browser
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-muted-foreground">
                    Stored for up to 2 years or until manually deleted
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
                <br />
                Email: privacy@monastery360.sikkim.gov.in
                <br />
                Phone: +91 3592 123456
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;