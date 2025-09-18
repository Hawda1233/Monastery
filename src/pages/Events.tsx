import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock, Users, Camera, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      name: "Losar Festival",
      monastery: "Rumtek Monastery",
      date: "2024-02-10",
      time: "06:00 AM - 06:00 PM",
      description: "Traditional Tibetan New Year celebration with masked dances, prayers, and cultural performances.",
      category: "Festival",
      duration: "3 days",
      participants: "500+",
      bookingRequired: true,
      featured: true,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: 2,
      name: "Buddha Purnima",
      monastery: "Pemayangtse Monastery",
      date: "2024-05-23",
      time: "05:00 AM - 08:00 PM",
      description: "Celebration of Buddha's birth, enlightenment, and death with special prayers and meditation sessions.",
      category: "Religious",
      duration: "1 day",
      participants: "300+",
      bookingRequired: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
    },
    {
      id: 3,
      name: "Cham Dance Festival",
      monastery: "Tashiding Monastery",
      date: "2024-03-15",
      time: "10:00 AM - 04:00 PM",
      description: "Sacred masked dance performances depicting the triumph of good over evil.",
      category: "Cultural",
      duration: "2 days",
      participants: "200+",
      bookingRequired: true,
      featured: false,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400"
    },
    {
      id: 4,
      name: "Meditation Retreat",
      monastery: "Enchey Monastery",
      date: "2024-04-01",
      time: "06:00 AM - 06:00 PM",
      description: "7-day silent meditation retreat for practitioners seeking deeper spiritual understanding.",
      category: "Retreat",
      duration: "7 days",
      participants: "50",
      bookingRequired: true,
      featured: false,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const featuredEvents = events.filter(event => event.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Festival': return 'bg-purple-500/10 text-purple-600 border-purple-200';
      case 'Religious': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'Cultural': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'Retreat': return 'bg-orange-500/10 text-orange-600 border-orange-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Events &
            </span>
            <br />
            <span className="text-foreground">Festivals</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join sacred celebrations, cultural festivals, and spiritual retreats at Sikkim's monasteries. 
            Experience ancient traditions and connect with the local Buddhist community.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                    <p className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      {event.monastery}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.participants}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      {event.bookingRequired ? 'RSVP Required' : 'Join Event'}
                    </Button>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{event.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.monastery}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.participants} expected
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <Button className="w-full group">
                    {event.bookingRequired ? (
                      <>
                        <Heart className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                        RSVP Now
                      </>
                    ) : (
                      <>
                        <CalendarIcon className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                        Add to Calendar
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl border p-8">
          <CalendarIcon className="h-16 w-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our cultural calendar and get notifications about upcoming festivals, 
            retreats, and special ceremonies at Sikkim's monasteries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button className="flex-1">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Subscribe to Calendar
            </Button>
            <Button variant="outline" className="flex-1">
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;