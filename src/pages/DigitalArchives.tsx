import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Calendar, Users, Clock, Mountain, Star, Search, Eye, ExternalLink, BookOpen, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import rumtekDoor from "@/assets/rumtek-door-18th-century.png";
import rumtekPrayerWheels from "@/assets/rumtek-prayer-wheels.png";
import rumtekGallery from "@/assets/rumtek-gallery.png";
import manuscript1 from "@/assets/manuscript-1.png";
import manuscript2 from "@/assets/manuscript-2.png";
import manuscript3 from "@/assets/manuscript-3.png";
import manuscript4 from "@/assets/manuscript-4.png";
import manuscript5 from "@/assets/manuscript-5.png";
import manuscript6 from "@/assets/manuscript-6.png";

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

  const manuscripts = [
    {
      id: 1,
      type: "Buddhist Manuscripts",
      name: "Ancient Buddhist Scripture Collection",
      tibetanName: "གསུང་འབུམ་ཕྱོགས་བསྒྲིགས་",
      period: "11th-15th Century",
      origin: "Sikkim Monasteries",
      language: "Classical Tibetan & Sanskrit",
      script: "Tibetan Uchen & Lanydza Scripts",
      material: "Handmade Paper & Palm Leaves",
      significance: "Rare collection of Buddhist philosophical texts and liturgical manuscripts",
      mainImage: manuscript1,
      manuscripts: [
        {
          image: manuscript1,
          title: "Buddhist Stupa Illustration Manuscript",
          description: "11th century illuminated manuscript featuring traditional Buddhist stupas with Tibetan script annotations",
          century: "11th Century",
          type: "Liturgical Text"
        },
        {
          image: manuscript2,
          title: "Classical Buddhist Philosophy Text",
          description: "Ancient philosophical discourse written in traditional Tibetan Uchen script on handmade paper",
          century: "12th Century", 
          type: "Philosophical Treatise"
        },
        {
          image: manuscript3,
          title: "Bilingual Buddhist Manuscript",
          description: "Medieval text featuring both Tibetan and Sanskrit scripts, showing scholarly Buddhist traditions",
          century: "13th Century",
          type: "Scholarly Commentary"
        },
        {
          image: manuscript4,
          title: "Ritual Prayer Manuscript",
          description: "Traditional Buddhist prayer book with intricate calligraphy used in monastic ceremonies",
          century: "14th Century",
          type: "Liturgical Prayer Book"
        },
        {
          image: manuscript5,
          title: "Buddhist Teaching Compendium",
          description: "Comprehensive collection of Buddhist teachings written in classical Tibetan script",
          century: "15th Century",
          type: "Teaching Collection"
        },
        {
          image: manuscript6,
          title: "Monastic Rules & Guidelines",
          description: "Ancient manuscript containing monastic discipline and community guidelines",
          century: "12th Century",
          type: "Monastic Code"
        }
      ],
      historicalContext: {
        introduction: "These Buddhist manuscripts represent some of the oldest surviving religious texts in Sikkim, dating from the 11th to 15th centuries. They showcase the rich literary and spiritual heritage of Tibetan Buddhism in the region.",
        scriptTradition: "Written primarily in Tibetan Uchen script (དབུ་ཅན་), these manuscripts demonstrate the sophisticated calligraphic traditions of medieval Tibetan scribes. Some texts also feature Sanskrit Lanydza script, showing the multicultural nature of Buddhist scholarship.",
        preservation: "Carefully preserved in monastery libraries for centuries, these manuscripts have survived the test of time through the dedication of generations of monks and scholars who recognized their immense spiritual and historical value.",
        significance: "These texts contain philosophical treatises, ritual instructions, and meditation guides that continue to be studied and practiced in contemporary Tibetan Buddhist communities worldwide."
      },
      physicalCharacteristics: [
        "Handmade paper from local Himalayan plants",
        "Traditional iron-gall ink and mineral pigments", 
        "String binding in traditional Tibetan style",
        "Wooden cover boards with cloth wrapping",
        "Gold and silver illuminations on select pages",
        "Dimensions typically 6x24 inches (Tibetan pothi format)"
      ],
      collectionInfo: {
        totalManuscripts: "150+ individual texts",
        languages: "Classical Tibetan, Sanskrit, Bhutanese Dzongkha",
        subjects: "Philosophy, Ritual, Medicine, Astrology, Poetry",
        condition: "Various stages of preservation, ongoing conservation efforts",
        access: "Research access by appointment with monastery authorities"
      }
    }
  ];

  const filteredMonasteries = monasteries.filter(monastery =>
    monastery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monastery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monastery.sect.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredManuscripts = manuscripts.filter(manuscript =>
    manuscript.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    manuscript.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
    manuscript.type.toLowerCase().includes(searchQuery.toLowerCase())
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

      {/* Content Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {/* Monasteries Section */}
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

            {/* Buddhist Manuscripts Section */}
            {filteredManuscripts.map((manuscript) => (
              <Card key={manuscript.id} className="overflow-hidden">
                {/* Header Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={manuscript.mainImage}
                    alt={manuscript.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{manuscript.name}</h2>
                    <p className="text-lg opacity-90">{manuscript.period}</p>
                    <p className="text-sm opacity-75">{manuscript.tibetanName}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {manuscript.type}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Manuscript Details
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium">Period:</span> {manuscript.period}</p>
                        <p><span className="font-medium">Origin:</span> {manuscript.origin}</p>
                        <p><span className="font-medium">Language:</span> {manuscript.language}</p>
                        <p><span className="font-medium">Script:</span> {manuscript.script}</p>
                        <p><span className="font-medium">Material:</span> {manuscript.material}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Collection Information
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium">Total:</span> {manuscript.collectionInfo.totalManuscripts}</p>
                        <p><span className="font-medium">Languages:</span> {manuscript.collectionInfo.languages}</p>
                        <p><span className="font-medium">Subjects:</span> {manuscript.collectionInfo.subjects}</p>
                        <p><span className="font-medium">Access:</span> {manuscript.collectionInfo.access}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* Historical Context */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Historical Context & Significance</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p><span className="font-medium">Introduction:</span> {manuscript.historicalContext.introduction}</p>
                      <p><span className="font-medium">Script Tradition:</span> {manuscript.historicalContext.scriptTradition}</p>
                      <p><span className="font-medium">Preservation:</span> {manuscript.historicalContext.preservation}</p>
                      <p><span className="font-medium">Contemporary Significance:</span> {manuscript.historicalContext.significance}</p>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* Physical Characteristics */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Physical Characteristics</h3>
                    <div className="bg-card border rounded-lg p-4 mb-4">
                      <p className="text-primary font-medium mb-2">Primary Significance:</p>
                      <p className="text-muted-foreground">{manuscript.significance}</p>
                    </div>
                    <ul className="space-y-2">
                      {manuscript.physicalCharacteristics.map((characteristic, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-8" />

                  {/* Manuscript Gallery with Preview */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Manuscript Collection</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {manuscript.manuscripts.map((manuscriptItem, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                          <div className="relative">
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="cursor-pointer">
                                  <img
                                    src={manuscriptItem.image}
                                    alt={manuscriptItem.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Eye className="h-6 w-6 text-white" />
                                  </div>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <div className="space-y-4">
                                  <img
                                    src={manuscriptItem.image}
                                    alt={manuscriptItem.title}
                                    className="w-full rounded-lg"
                                  />
                                  <div>
                                    <h4 className="text-xl font-semibold mb-2">{manuscriptItem.title}</h4>
                                    <p className="text-muted-foreground mb-2">{manuscriptItem.description}</p>
                                    <div className="flex gap-4 text-sm">
                                      <Badge variant="secondary">{manuscriptItem.century}</Badge>
                                      <Badge variant="outline">{manuscriptItem.type}</Badge>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">{manuscriptItem.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{manuscriptItem.description}</p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">{manuscriptItem.century}</Badge>
                              <Badge variant="outline" className="text-xs">{manuscriptItem.type}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="flex-1">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Study Collection
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Research Access
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