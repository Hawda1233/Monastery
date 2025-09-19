import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    rating: "",
    subject: "",
    message: "",
    improvements: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback. We'll review it and get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      category: "",
      rating: "",
      subject: "",
      message: "",
      improvements: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Your Feedback Matters</h1>
            <p className="text-lg text-muted-foreground">
              Help us improve Monastery 360 by sharing your thoughts and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Feedback Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Feedback</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="content">Content Feedback</SelectItem>
                          <SelectItem value="accessibility">Accessibility</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Overall Rating</Label>
                      <RadioGroup 
                        value={formData.rating} 
                        onValueChange={(value) => handleInputChange('rating', value)}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="excellent" id="excellent" />
                          <Label htmlFor="excellent">Excellent</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="good" id="good" />
                          <Label htmlFor="good">Good</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="average" id="average" />
                          <Label htmlFor="average">Average</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="poor" id="poor" />
                          <Label htmlFor="poor">Poor</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief subject of your feedback"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Detailed Feedback</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide detailed feedback about your experience..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="improvements">Suggestions for Improvement</Label>
                      <Textarea
                        id="improvements"
                        value={formData.improvements}
                        onChange={(e) => handleInputChange('improvements', e.target.value)}
                        placeholder="What features or improvements would you like to see?"
                        className="min-h-24"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Your Feedback Matters</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Your feedback helps us understand how well Monastery 360 serves the community 
                    and visitors interested in Sikkim's monastic heritage.
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Improve user experience</li>
                    <li>Add new features</li>
                    <li>Fix technical issues</li>
                    <li>Enhance accessibility</li>
                    <li>Expand content coverage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Time</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p><strong>General Feedback:</strong> 3-5 business days</p>
                  <p><strong>Bug Reports:</strong> 1-2 business days</p>
                  <p><strong>Technical Issues:</strong> 24 hours</p>
                  <p><strong>Content Requests:</strong> 1-2 weeks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Improvements</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Based on community feedback, we recently added:</p>
                  <ul className="list-disc pl-4 space-y-1 mt-2">
                    <li>Multi-language support</li>
                    <li>Offline download feature</li>
                    <li>Enhanced search filters</li>
                    <li>Mobile app improvements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;