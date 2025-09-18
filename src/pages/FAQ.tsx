import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Monastery360?",
      answer: "Monastery360 is a digital platform that preserves and showcases Sikkim's rich monastic heritage through virtual tours, digital archives, and immersive experiences."
    },
    {
      question: "How can I access the virtual monastery tours?",
      answer: "You can access virtual tours by visiting the 'Explore Monasteries' section. Some tours require our mobile app for the full 360° experience with location-based audio guides."
    },
    {
      question: "Is the content available in local languages?",
      answer: "Yes, our content is available in English, Nepali, Hindi, and Tibetan to ensure accessibility for all visitors and researchers."
    },
    {
      question: "Can I download materials from the digital archives?",
      answer: "Yes, many materials in our digital archives are available for download. Some items may require registration or have usage restrictions for academic purposes."
    },
    {
      question: "How do I book a monastery visit or tour?",
      answer: "You can use our 'Travel Services' section to plan your trip, book transportation, and find accommodation. We also provide contact information for local guides."
    },
    {
      question: "Is there an offline mode for the app?",
      answer: "Yes, our mobile app allows you to download select tours and archive materials for offline access, perfect for remote locations with limited connectivity."
    },
    {
      question: "How can researchers contribute to the platform?",
      answer: "Researchers can contribute through our partnership program. Contact us through the 'Contact' page to discuss collaboration opportunities and content contributions."
    },
    {
      question: "Are there any costs associated with using the platform?",
      answer: "The basic platform features are free to use. Some premium features like detailed archive downloads or specialized tour content may have associated fees."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Monastery360
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you couldn't find the answer you're looking for, please don't hesitate to contact us. 
                Our support team is here to help you with any questions about Monastery360.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <strong>Email:</strong> support@monastery360.sikkim.gov.in
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong> +91 3592 123456
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;