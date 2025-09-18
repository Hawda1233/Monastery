import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Map, Filter, Search, MapPin, Clock, Star, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExploreMonasteries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedArchitecture, setSelectedArchitecture] = useState("all");

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      region: "East Sikkim",
      architecture: "Tibetan",
      founded: "1740s",
      altitude: "1,550m",
      description: "One of the largest monasteries in Sikkim, known for its golden stupa.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
      virtualTourAvailable: true,
      rating: 4.8,
      visitors: "2.3k"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      region: "West Sikkim",
      architecture: "Nyingma",
      founded: "1705",
      altitude: "2,085m",
      description: "Perfect Sublime Lotus monastery, one of the oldest in Sikkim.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400",
      virtualTourAvailable: true,
      rating: 4.6,
      visitors: "1.8k"
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      region: "West Sikkim",
      architecture: "Nyingma",
      founded: "1641",
      altitude: "1,465m",
      description: "Sacred monastery on a hilltop between Rangit and Rathong rivers.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      virtualTourAvailable: false,
      rating: 4.7,
      visitors: "1.5k"
    },
    {
      id: 4,
      name: "Enchey Monastery",
      region: "East Sikkim",
      architecture: "Gelug",
      founded: "1909",
      altitude: "1,575m",
      description: "Solitary temple monastery with beautiful mountain views.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      virtualTourAvailable: true,
      rating: 4.5,
      visitors: "1.2k"
    }
  ];

  const filteredMonasteries = monasteries.filter(monastery => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         monastery.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "all" || monastery.region === selectedRegion;
    const matchesArchitecture = selectedArchitecture === "all" || monastery.architecture === selectedArchitecture;
    
    return matchesSearch && matchesRegion && matchesArchitecture;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Explore Sacred
            </span>
            <br />
            <span className="text-foreground">Monasteries</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Journey through Sikkim's ancient monasteries with immersive 360° virtual tours, 
            detailed galleries, and interactive maps revealing centuries of spiritual heritage.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="gallery" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Gallery
              </TabsTrigger>
              <TabsTrigger value="virtual-tours" className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                360° Tours
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                Map View
              </TabsTrigger>
            </TabsList>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 p-6 bg-card rounded-2xl border">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search monasteries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="East Sikkim">East Sikkim</SelectItem>
                    <SelectItem value="West Sikkim">West Sikkim</SelectItem>
                    <SelectItem value="North Sikkim">North Sikkim</SelectItem>
                    <SelectItem value="South Sikkim">South Sikkim</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedArchitecture} onValueChange={setSelectedArchitecture}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Architecture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Styles</SelectItem>
                    <SelectItem value="Tibetan">Tibetan</SelectItem>
                    <SelectItem value="Nyingma">Nyingma</SelectItem>
                    <SelectItem value="Gelug">Gelug</SelectItem>
                    <SelectItem value="Kagyu">Kagyu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Monastery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMonasteries.map((monastery) => (
                  <Card key={monastery.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={monastery.image}
                        alt={monastery.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {monastery.region}
                        </Badge>
                        {monastery.virtualTourAvailable && (
                          <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                            <Camera className="h-3 w-3 mr-1" />
                            360°
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{monastery.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{monastery.visitors}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{monastery.name}</span>
                        <Badge variant="outline" className="ml-2">
                          {monastery.architecture}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {monastery.founded}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {monastery.altitude}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{monastery.description}</p>
                      <div className="flex gap-2">
                        {monastery.virtualTourAvailable ? (
                          <Button className="flex-1 group">
                            <Camera className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                            Virtual Tour
                          </Button>
                        ) : (
                          <Button variant="secondary" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        )}
                        <Button variant="outline" size="icon">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredMonasteries.length === 0 && (
                <div className="text-center py-12">
                  <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No monasteries found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria</p>
                </div>
              )}
            </TabsContent>

            {/* Virtual Tours Tab */}
            <TabsContent value="virtual-tours" className="space-y-6">
              <div className="text-center py-12 bg-card rounded-2xl border">
                <Camera className="h-16 w-16 mx-auto text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Immersive 360° Virtual Tours</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Experience the sacred architecture and spiritual atmosphere of Sikkim's monasteries 
                  through our cutting-edge virtual reality tours.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {monasteries.filter(m => m.virtualTourAvailable).map((monastery) => (
                    <Card key={monastery.id} className="text-left hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Camera className="h-5 w-5 text-primary" />
                          {monastery.name}
                        </CardTitle>
                        <CardDescription>{monastery.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full group">
                          <Camera className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                          Start Virtual Tour
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Map Tab */}
            <TabsContent value="map" className="space-y-6">
              <div className="bg-card rounded-2xl border p-8 text-center">
                <Map className="h-16 w-16 mx-auto text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Interactive Monastery Map</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Explore monasteries across Sikkim with our interactive map featuring geo-tagged locations, 
                  travel routes, and nearby attractions.
                </p>
                <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Interactive map will be integrated here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Features: GPS locations, travel routes, nearby attractions
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExploreMonasteries;