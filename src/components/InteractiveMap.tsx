import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Layers, Search, Locate, Route, Navigation2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface MonasteryLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

const InteractiveMap = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<MonasteryLocation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 27.3389, lng: 88.6065 }); // Sikkim center
  const [zoom, setZoom] = useState(10);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Static API key provided by user
  const MAPPLES_API_KEY = 'tipncloeapqnzllkrorsuyebcgtzgrkxzgra';

  // Monastery locations in Sikkim
  const monasteries: MonasteryLocation[] = [
    {
      id: '1',
      name: 'Rumtek Monastery',
      lat: 27.3389,
      lng: 88.6065,
      description: 'The largest monastery in Sikkim, seat of the Karmapa'
    },
    {
      id: '2',
      name: 'Pemayangtse Monastery',
      lat: 27.3100,
      lng: 88.2183,
      description: 'One of the oldest monasteries in Sikkim'
    },
    {
      id: '3',
      name: 'Enchey Monastery',
      lat: 27.3450,
      lng: 88.6150,
      description: 'Historic monastery above Gangtok'
    },
    {
      id: '4',
      name: 'Tashiding Monastery',
      lat: 27.3300,
      lng: 88.2650,
      description: 'Sacred monastery on a hilltop'
    }
  ];

  const filteredMonasteries = monasteries.filter(monastery =>
    monastery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by this browser.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setMapCenter({ lat: latitude, lng: longitude });
        setZoom(12);
        setIsLocating(false);
        toast.success('Your location has been found!');
      },
      (error) => {
        console.error('Error getting location:', error);
        toast.error('Unable to get your location. Please allow location access.');
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  // Calculate distance between two points (rough estimate)
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Get directions to selected monastery
  const getDirections = (monastery: MonasteryLocation) => {
    if (!userLocation) {
      toast.error('Please allow location access first to get directions.');
      getCurrentLocation();
      return;
    }
    
    setSelectedMonastery(monastery);
    setShowDirections(true);
    
    // Center map to show both user location and monastery
    const centerLat = (userLocation.lat + monastery.lat) / 2;
    const centerLng = (userLocation.lng + monastery.lng) / 2;
    setMapCenter({ lat: centerLat, lng: centerLng });
    setZoom(11);
    
    const distance = calculateDistance(userLocation.lat, userLocation.lng, monastery.lat, monastery.lng);
    toast.success(`Showing directions to ${monastery.name} (${distance.toFixed(1)} km away)`);
  };

  // Open directions in external map app
  const openInMaps = (monastery: MonasteryLocation) => {
    if (!userLocation) {
      toast.error('Location access required for directions.');
      return;
    }
    
    // Create Google Maps URL for directions
    const mapsUrl = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${monastery.lat},${monastery.lng}`;
    window.open(mapsUrl, '_blank');
  };

  // Generate static map URL using the provided API key
  const getStaticMapUrl = (center: { lat: number; lng: number }, zoom: number, markers: MonasteryLocation[]) => {
    const baseUrl = 'https://maps.mapplsapis.com/advancedmaps/v1';
    
    // Build markers string
    let markerString = markers.map(m => `${m.lng},${m.lat}`).join('|');
    
    // Add user location marker if available
    if (userLocation) {
      markerString += `|${userLocation.lng},${userLocation.lat}`;
    }
    
    // Add route polyline if showing directions
    let routeParam = '';
    if (showDirections && selectedMonastery && userLocation) {
      routeParam = `&path=color:0x0000ff|weight:3|${userLocation.lng},${userLocation.lat}|${selectedMonastery.lng},${selectedMonastery.lat}`;
    }
    
    // Using Mappls (formerly MapmyIndia) API format
    return `${baseUrl}/${MAPPLES_API_KEY}/still_image?center=${center.lng},${center.lat}&zoom=${zoom}&size=800x600&markers=${markerString}&markers_icon=https://maps.mapplsapis.com/images/marker.png${routeParam}`;
  };

  const handleMonasteryClick = (monastery: MonasteryLocation) => {
    setSelectedMonastery(monastery);
    setMapCenter({ lat: monastery.lat, lng: monastery.lng });
    setZoom(14);
    setShowDirections(false);
  };

  const resetMap = () => {
    setSelectedMonastery(null);
    setMapCenter({ lat: 27.3389, lng: 88.6065 });
    setZoom(10);
    setShowDirections(false);
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search monasteries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            onClick={getCurrentLocation}
            disabled={isLocating}
          >
            <Locate className={`h-4 w-4 mr-2 ${isLocating ? 'animate-pulse' : ''}`} />
            {isLocating ? 'Locating...' : 'My Location'}
          </Button>
          <Button variant="outline" onClick={resetMap}>
            <Navigation className="h-4 w-4 mr-2" />
            Reset View
          </Button>
          <Button variant="outline" onClick={() => setZoom(Math.min(zoom + 1, 18))}>
            <Layers className="h-4 w-4 mr-2" />
            Zoom In
          </Button>
          <Button variant="outline" onClick={() => setZoom(Math.max(zoom - 1, 8))}>
            <Layers className="h-4 w-4 mr-2" />
            Zoom Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monastery List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Monasteries</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredMonasteries.map((monastery) => (
              <Card 
                key={monastery.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedMonastery?.id === monastery.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleMonasteryClick(monastery)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium">{monastery.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {monastery.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {monastery.lat.toFixed(4)}, {monastery.lng.toFixed(4)}
                      </p>
                      {userLocation && (
                        <p className="text-xs text-primary mt-1">
                          {calculateDistance(userLocation.lat, userLocation.lng, monastery.lat, monastery.lng).toFixed(1)} km away
                        </p>
                      )}
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            getDirections(monastery);
                          }}
                          disabled={!userLocation}
                        >
                          <Route className="h-3 w-3 mr-1" />
                          Directions
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            openInMaps(monastery);
                          }}
                          disabled={!userLocation}
                        >
                          <Navigation2 className="h-3 w-3 mr-1" />
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Display */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
                <img
                  src={getStaticMapUrl(mapCenter, zoom, filteredMonasteries)}
                  alt="Sikkim Monasteries Map"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a simple placeholder if API fails
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzM4ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1hcCBMb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                
                {/* Map overlay with monastery info */}
                {selectedMonastery && (
                  <div className="absolute top-4 left-4 right-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold">{selectedMonastery.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {selectedMonastery.description}
                            </p>
                            {showDirections && userLocation && (
                              <div className="mt-2 text-sm text-primary">
                                📍 Distance: {calculateDistance(userLocation.lat, userLocation.lng, selectedMonastery.lat, selectedMonastery.lng).toFixed(1)} km
                                <div className="mt-1 flex gap-2">
                                  <Button size="sm" onClick={() => openInMaps(selectedMonastery)}>
                                    <Navigation2 className="h-3 w-3 mr-1" />
                                    Open in Maps
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" onClick={resetMap}>
                            ×
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Map controls overlay */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <Button size="sm" variant="secondary" onClick={() => setZoom(Math.min(zoom + 1, 18))}>
                    +
                  </Button>
                  <Button size="sm" variant="secondary" onClick={() => setZoom(Math.max(zoom - 1, 8))}>
                    −
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Legend */}
          <div className="mt-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Monastery Location</span>
              </div>
              {userLocation && (
                <div className="flex items-center gap-2">
                  <Locate className="h-4 w-4 text-blue-500" />
                  <span>Your Location</span>
                </div>
              )}
              {showDirections && (
                <div className="flex items-center gap-2">
                  <Route className="h-4 w-4 text-green-500" />
                  <span>Directions</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <span>Selected Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;