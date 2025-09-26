import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Users, Clock, Mountain, Star, Search, Eye, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import rumtekDoor from "@/assets/rumtek-door-18th-century.png";
import rumtekPrayerWheels from "@/assets/rumtek-prayer-wheels.png";
import rumtekGallery from "@/assets/rumtek-gallery.png";

const DigitalArchives = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      alternativeName: "Dharma Chakra Centre",
      tibetanName: "རུམ་ཐེག་དགོན་པ་",
      location: "Near Gangtok, Sikkim, India",
      coordinates: "27°17′19″N 88°33′41″E",
      distance: "24 kilometres (15 mi) from Gangtok",
      altitude: "1,500 metres (4,900 ft)",
      religion: "Tibetan Buddhism",
      sect: "Karma Kagyu",
      founder: "Wangchuk Dorje, 9th Karmapa Lama",
      originalFounder: "Changchub Dorje, 12th Karmapa Lama (mid-18th century)",
      rebuiltBy: "Rangjung Rigpe Dorje, 16th Karmapa",
      dateEstablished: "1966",
      yearsSinceEstablishment: "59 years ago",
      significance: "Seat in exile of the Gyalwang Karmapa, largest monastery in Sikkim",
      mainImage: rumtekGallery,
      gallery: [
        {
          image: rumtekDoor,
          title: "18th Century Monastery Door",
          description: "Traditional Tibetan architectural entrance with intricate carvings and Buddhist motifs"
        },
        {
          image: rumtekPrayerWheels,
          title: "Sacred Prayer Wheels",
          description: "Traditional prayer wheels containing Buddhist mantras used in daily religious practices"
        },
        {
          image: rumtekGallery,
          title: "Monastery Complex",
          description: "Overview of the complete monastery complex showing traditional Tibetan architecture"
        }
      ],
      history: {
        ancient: "Originally built under the direction of Changchub Dorje, 12th Karmapa Lama in the mid-18th century, Rumtek served as the main seat of the Karma Kagyu lineage in Sikkim for some time.",
        modern: "When Rangjung Rigpe Dorje, 16th Karmapa, arrived in Sikkim in 1959 after fleeing Tibet, the monastery was in ruins. Despite being offered other sites, the Karmapa decided to rebuild Rumtek due to its auspicious qualities - flowing streams, mountains behind, a snow range in front, and a river below.",
        completion: "After four years of construction with help from the Sikkim royal family and local folks, the monastery was completed. Sacred items and relics from Tsurphu Monastery in Tibet were installed. On Losar in 1966, the 16th Karmapa officially inaugurated the new seat."
      },
      keyFeatures: [
        "Golden stupa containing relics of the 16th Karmapa",
        "Karma Shri Nalanda Institute for Higher Buddhist Studies",
        "Community of monks performing Karma Kagyu lineage rituals",
        "Sacred items and relics from Tsurphu Monastery, Tibet",
        "Traditional Tibetan architecture with auspicious location"
      ],
      visitingInfo: {
        openTo: "Public visitors welcome",
        bestTime: "October to May",
        duration: "2-3 hours recommended",
        guidelines: "Respectful dress code required, photography restrictions in certain areas"
      }
    }
  ];

  const filteredMonasteries = monasteries.filter(monastery =>
    monastery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monastery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monastery.sect.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Monastery
            </span>
            <br />
            <span className="text-foreground">Profiles</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the rich history, architecture, and spiritual significance of Sikkim's sacred monasteries. 
            Explore detailed profiles with historical background, key features, and cultural importance.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search monasteries by name, location, or sect..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </section>

      {/* Monasteries Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredMonasteries.map((monastery) => (
              <Card key={monastery.id} className="overflow-hidden">
                {/* Header Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={monastery.mainImage}
                    alt={monastery.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{monastery.name}</h2>
                    <p className="text-lg opacity-90">{monastery.alternativeName}</p>
                    <p className="text-sm opacity-75">{monastery.tibetanName}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                      {monastery.sect}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location & Details
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium">Location:</span> {monastery.location}</p>
                        <p><span className="font-medium">Coordinates:</span> {monastery.coordinates}</p>
                        <p><span className="font-medium">Distance:</span> {monastery.distance}</p>
                        <p><span className="font-medium">Altitude:</span> {monastery.altitude}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Religious Details
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium">Religion:</span> {monastery.religion}</p>
                        <p><span className="font-medium">Sect:</span> {monastery.sect}</p>
                        <p><span className="font-medium">Established:</span> {monastery.dateEstablished}</p>
                        <p><span className="font-medium">Rebuilt by:</span> {monastery.rebuiltBy}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* History Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Historical Background</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><span className="font-medium">Ancient Origins:</span> {monastery.history.ancient}</p>
                      <p><span className="font-medium">Modern Reconstruction:</span> {monastery.history.modern}</p>
                      <p><span className="font-medium">Inauguration:</span> {monastery.history.completion}</p>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features & Significance</h3>
                    <div className="bg-card border rounded-lg p-4 mb-4">
                      <p className="text-primary font-medium mb-2">Primary Significance:</p>
                      <p className="text-muted-foreground">{monastery.significance}</p>
                    </div>
                    <ul className="space-y-2">
                      {monastery.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-8" />

                  {/* Photo Gallery */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {monastery.gallery.map((photo, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                          <div className="relative">
                            <img
                              src={photo.image}
                              alt={photo.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Eye className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">{photo.title}</h4>
                            <p className="text-sm text-muted-foreground">{photo.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* Visiting Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Visiting Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p><span className="font-medium">Access:</span> <span className="text-muted-foreground">{monastery.visitingInfo.openTo}</span></p>
                        <p><span className="font-medium">Best Time:</span> <span className="text-muted-foreground">{monastery.visitingInfo.bestTime}</span></p>
                      </div>
                      <div className="space-y-2">
                        <p><span className="font-medium">Duration:</span> <span className="text-muted-foreground">{monastery.visitingInfo.duration}</span></p>
                        <p><span className="font-medium">Guidelines:</span> <span className="text-muted-foreground">{monastery.visitingInfo.guidelines}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="flex-1">
                      <Mountain className="h-4 w-4 mr-2" />
                      Virtual Tour
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Plan Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalArchives;