import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Archive, Search, Download, Eye, FileText, Image, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import pemayangtseMonastery from "@/assets/pemayangtse-monastery.png";
import tashidingMonastery from "@/assets/tashiding-monastery.png";
import rumtekGallery from "@/assets/rumtek-gallery.png";

const DigitalArchives = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const archiveItems = [
    {
      id: 1,
      title: "Ancient Buddhist Manuscripts",
      type: "manuscript",
      monastery: "Rumtek Monastery",
      period: "15th Century",
      description: "Collection of rare Tibetan Buddhist texts and prayers written on palm leaves.",
      language: "Tibetan",
      digitized: true,
      downloadable: true,
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300"
    },
    {
      id: 2,
      title: "Monastery Wall Murals",
      type: "mural",
      monastery: "Pemayangtse Monastery",
      period: "18th Century",
      description: "High-resolution scans of colorful Buddhist murals depicting life of Buddha.",
      language: "Visual",
      digitized: true,
      downloadable: false,
      thumbnail: pemayangtseMonastery
    },
    {
      id: 3,
      title: "Historical Foundation Documents",
      type: "document",
      monastery: "Tashiding Monastery",
      period: "17th Century",
      description: "Original documents detailing the establishment and early history of the monastery.",
      language: "Tibetan/Nepali",
      digitized: true,
      downloadable: true,
      thumbnail: tashidingMonastery
    },
    {
      id: 4,
      title: "Dharma Chakra Centre",
      type: "architecture",
      monastery: "Rumtek Monastery",
      period: "1966",
      description: "The main seat in exile of the Gyalwang Karmapa, inaugurated in 1966 by the 16th Karmapa. Also known as Rumtek Monastery, it serves as the largest monastery in Sikkim.",
      language: "Visual",
      digitized: true,
      downloadable: true,
      thumbnail: rumtekGallery
    },
    {
      id: 5,
      title: "Sacred Prayer Wheels Collection",
      type: "artifact",
      monastery: "Rumtek Monastery",
      period: "20th Century",
      description: "Traditional Tibetan prayer wheels containing Buddhist mantras and prayers, used in daily religious practices at the Karma Kagyu lineage center.",
      language: "Sanskrit/Tibetan",
      digitized: true,
      downloadable: false,
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300"
    },
    {
      id: 6,
      title: "Rumtek Monastery Foundation Records",
      type: "document",
      monastery: "Rumtek Monastery",
      period: "1959-1966",
      description: "Official records documenting the reconstruction of Rumtek Monastery by the 16th Karmapa after fleeing Tibet, including architectural plans and royal patronage documents.",
      language: "Tibetan/English",
      digitized: true,
      downloadable: true,
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300"
    },
    {
      id: 7,
      title: "Karma Kagyu Lineage Teachings",
      type: "manuscript",
      monastery: "Rumtek Monastery",
      period: "16th-20th Century",
      description: "Sacred texts and teachings from Tsurphu Monastery in Tibet, brought by the 16th Karmapa and preserved at the Karma Shri Nalanda Institute for Higher Buddhist Studies.",
      language: "Tibetan",
      digitized: true,
      downloadable: true,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
    },
    {
      id: 8,
      title: "Traditional Monastery Doors",
      type: "architecture",
      monastery: "Rumtek Monastery",
      period: "1966",
      description: "Intricately carved wooden doors featuring traditional Tibetan Buddhist motifs and symbols, representing the entrance to sacred spaces within the monastery complex.",
      language: "Visual",
      digitized: true,
      downloadable: false,
      thumbnail: "https://images.unsplash.com/photo-1578662996442-23cb84602500?w=300"
    },
    {
      id: 9,
      title: "Golden Stupa Relics Documentation",
      type: "document",
      monastery: "Rumtek Monastery",
      period: "1981-Present",
      description: "Historical documentation of the golden stupa containing the relics of the 16th Karmapa, including construction details and ceremonial significance.",
      language: "Tibetan/English",
      digitized: true,
      downloadable: false,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'manuscript': return FileText;
      case 'mural': return Image;
      case 'document': return BookOpen;
      case 'architecture': return Archive;
      case 'artifact': return Archive;
      default: return Archive;
    }
  };

  const filteredItems = archiveItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.monastery.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
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
              Digital
            </span>
            <br />
            <span className="text-foreground">Archives</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover digitized manuscripts, murals, and historic documents from Sikkim's monasteries, 
            preserved for future generations with AI-powered categorization and search.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="browse">Browse Archives</TabsTrigger>
              <TabsTrigger value="search">AI Search</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
            </TabsList>

            {/* Browse Tab */}
            <TabsContent value="browse" className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search archives by title, monastery, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Archive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <Card key={item.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                            <TypeIcon className="h-3 w-3 mr-1" />
                            {item.type}
                          </Badge>
                          {item.digitized && (
                            <Badge variant="secondary" className="bg-green-500/80 backdrop-blur-sm text-white">
                              Digitized
                            </Badge>
                          )}
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {item.period}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                        <CardDescription>
                          <span className="font-medium">{item.monastery}</span>
                          <br />
                          Language: {item.language}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          {item.downloadable && (
                            <Button className="flex-1">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* AI Search Tab */}
            <TabsContent value="search" className="space-y-6">
              <div className="text-center py-12 bg-card rounded-2xl border">
                <Sparkles className="h-16 w-16 mx-auto text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI-Powered Archive Search</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Use advanced AI to search through manuscripts, analyze content, and discover 
                  connections across our digital archive collection.
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                  <Input
                    placeholder="Ask AI: 'Find manuscripts about meditation practices' or 'Show murals from 18th century'"
                    className="h-12"
                  />
                  <Button className="w-full group">
                    <Sparkles className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Search with AI
                  </Button>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Content Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      AI analyzes text and imagery to understand content themes and topics.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Smart Categorization</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic tagging and organization based on content and historical context.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Cross-References</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover connections and relationships between different archive items.
                    </p>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Collections Tab */}
            <TabsContent value="collections" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Manuscripts Collection
                    </CardTitle>
                    <CardDescription>47 digitized manuscripts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ancient Buddhist texts, prayers, and philosophical works preserved on palm leaves and paper.
                    </p>
                    <Button className="w-full">Explore Collection</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5 text-primary" />
                      Murals & Artwork
                    </CardTitle>
                    <CardDescription>23 high-resolution scans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Colorful Buddhist murals, thangkas, and architectural details from monastery walls.
                    </p>
                    <Button className="w-full">Explore Collection</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Historical Documents
                    </CardTitle>
                    <CardDescription>15 official records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Foundation documents, royal decrees, and administrative records from monastery history.
                    </p>
                    <Button className="w-full">Explore Collection</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalArchives;