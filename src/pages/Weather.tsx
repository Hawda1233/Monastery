import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CloudSun, Cloud, Sun, CloudRain, Snowflake, Wind, Droplets, Eye, Thermometer, MapPin, Calendar, AlertTriangle, Loader2 } from "lucide-react";
import { fetchWeatherData, fetchForecastData, monasteries, getWindDirection, type WeatherData, type ForecastData } from "@/lib/weatherApi";
import { useToast } from "@/hooks/use-toast";

const Weather = () => {
  const { toast } = useToast();
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [monasteryWeather, setMonasteryWeather] = useState<(WeatherData & { elevation: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch weather for all monasteries
        const weatherPromises = monasteries.map(async (monastery) => {
          const weatherData = await fetchWeatherData(monastery.lat, monastery.lon);
          return {
            ...weatherData,
            name: monastery.name,
            elevation: monastery.elevation
          };
        });
        
        const allWeatherData = await Promise.all(weatherPromises);
        setMonasteryWeather(allWeatherData);
        
        // Set the first monastery as the main current weather
        if (allWeatherData.length > 0) {
          setCurrentWeather(allWeatherData[0]);
        }
        
        // Fetch forecast for the first monastery
        const forecastData = await fetchForecastData(monasteries[0].lat, monasteries[0].lon);
        setForecast(forecastData);
        
      } catch (error) {
        console.error('Error loading weather data:', error);
        
        // Fallback to mock data when API fails
        const fallbackWeatherData = monasteries.map((monastery, index) => ({
          name: monastery.name,
          lat: monastery.lat,
          lon: monastery.lon,
          elevation: monastery.elevation,
          temperature: [18, 15, 16, 17][index] || 16,
          condition: ['Clear', 'Partly Cloudy', 'Cloudy', 'Clear'][index] || 'Clear',
          description: 'clear sky',
          feelsLike: [16, 13, 14, 15][index] || 14,
          humidity: [65, 72, 68, 70][index] || 68,
          pressure: [1013, 1015, 1012, 1014][index] || 1013,
          visibility: 10,
          windSpeed: [8, 12, 6, 10][index] || 9,
          windDirection: [45, 90, 180, 270][index] || 90,
          icon: '01d'
        }));
        
        setMonasteryWeather(fallbackWeatherData);
        setCurrentWeather(fallbackWeatherData[0]);
        
        // Fallback forecast
        const fallbackForecast = [
          { day: "Today", high: 20, low: 12, condition: "Clear", description: "clear sky", icon: "01d", precipitation: 5 },
          { day: "Tomorrow", high: 22, low: 14, condition: "Partly Cloudy", description: "few clouds", icon: "02d", precipitation: 10 },
          { day: "Wednesday", high: 19, low: 11, condition: "Cloudy", description: "scattered clouds", icon: "03d", precipitation: 20 },
          { day: "Thursday", high: 17, low: 9, condition: "Rain", description: "light rain", icon: "10d", precipitation: 70 },
          { day: "Friday", high: 16, low: 8, condition: "Rain", description: "moderate rain", icon: "10d", precipitation: 90 },
          { day: "Saturday", high: 18, low: 10, condition: "Partly Cloudy", description: "few clouds", icon: "02d", precipitation: 30 },
          { day: "Sunday", high: 21, low: 13, condition: "Clear", description: "clear sky", icon: "01d", precipitation: 5 }
        ];
        
        setForecast(fallbackForecast);
        
        toast({
          title: "Using sample weather data",
          description: "Weather API is currently unavailable. Please check your API key configuration.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadWeatherData();
  }, [toast]);

  const getWeatherIcon = (condition: string, iconCode?: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('clear') || conditionLower.includes('sun')) return Sun;
    if (conditionLower.includes('cloud')) return condition.includes('partly') ? CloudSun : Cloud;
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) return CloudRain;
    if (conditionLower.includes('snow')) return Snowflake;
    return CloudSun;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <BackButton />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading weather data...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const travelTips = [
    {
      title: "Best Monastery Visiting Hours",
      tip: "9 AM - 4 PM for optimal lighting and weather conditions",
      icon: Sun,
      priority: "high"
    },
    {
      title: "Carry Weather Protection",
      tip: "Always carry umbrella and light jacket due to sudden weather changes",
      icon: CloudRain,
      priority: "high"
    },
    {
      title: "High Altitude Precautions",
      tip: "Acclimatize properly at locations above 2,500m elevation",
      icon: Thermometer,
      priority: "medium"
    },
    {
      title: "Photography Conditions",
      tip: "Early morning (6-8 AM) and late afternoon (4-6 PM) for best lighting",
      icon: Sun,
      priority: "medium"
    },
    {
      title: "Monsoon Season Alert",
      tip: "June-September: Heavy rains, landslides possible. Check road conditions",
      icon: AlertTriangle,
      priority: "high"
    }
  ];

  const monthlyGuide = [
    { month: "January", temp: "5-15°C", condition: "Cold & Clear", activities: "Clear monastery views, festival season", clothing: "Heavy winter wear" },
    { month: "February", temp: "7-17°C", condition: "Cold & Sunny", activities: "Losar festival, perfect for photography", clothing: "Warm layers" },
    { month: "March", temp: "10-20°C", condition: "Pleasant", activities: "Rhododendron blooms, trekking starts", clothing: "Light jacket" },
    { month: "April", temp: "13-23°C", condition: "Mild & Sunny", activities: "Peak trekking season, monastery visits", clothing: "Light layers" },
    { month: "May", temp: "15-25°C", condition: "Warm", activities: "Clear mountain views, outdoor activities", clothing: "Light clothing" },
    { month: "June", temp: "17-27°C", condition: "Pre-monsoon", activities: "Last chance before rains", clothing: "Light with rain gear" },
    { month: "July", temp: "18-28°C", condition: "Monsoon", activities: "Indoor monastery exploration", clothing: "Rain protection" },
    { month: "August", temp: "18-28°C", condition: "Heavy Rain", activities: "Cultural programs, indoor visits", clothing: "Waterproof gear" },
    { month: "September", temp: "16-26°C", condition: "Post-monsoon", activities: "Clear air, excellent views", clothing: "Light layers" },
    { month: "October", temp: "12-22°C", condition: "Clear & Cool", activities: "Perfect weather for all activities", clothing: "Light jacket" },
    { month: "November", temp: "8-18°C", condition: "Cool & Dry", activities: "Clear skies, festival season", clothing: "Warm layers" },
    { month: "December", temp: "3-13°C", condition: "Cold & Clear", activities: "Winter festivals, snow at high altitudes", clothing: "Heavy winter wear" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Weather & Travel Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Plan your monastery visit with real-time weather information and seasonal travel guides for Sikkim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <CloudSun className="mr-2 h-5 w-5" />
                Current Conditions
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Monthly Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Weather */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Current Weather</h2>
            <p className="text-lg text-muted-foreground">Live weather conditions across monastery locations</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Weather Card */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      {currentWeather?.name || 'Loading...'}
                    </h3>
                    <p className="text-muted-foreground">{currentWeather?.condition}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-6xl font-bold text-primary">{currentWeather?.temperature}°C</div>
                    <div className="text-muted-foreground">Feels like {currentWeather?.feelsLike}°C</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather?.humidity}%</div>
                    <div className="text-sm text-muted-foreground">Humidity</div>
                  </div>
                  <div className="text-center">
                    <Eye className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather?.visibility} km</div>
                    <div className="text-sm text-muted-foreground">Visibility</div>
                  </div>
                  <div className="text-center">
                    <Wind className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather?.windSpeed} km/h</div>
                    <div className="text-sm text-muted-foreground">Wind {getWindDirection(currentWeather?.windDirection || 0)}</div>
                  </div>
                  <div className="text-center">
                    <Thermometer className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <div className="font-semibold">{currentWeather?.pressure} mb</div>
                    <div className="text-sm text-muted-foreground">Pressure</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <Badge variant="secondary" className="mb-2">Monastery Visit Recommendation</Badge>
                  <p className="text-sm">Excellent conditions for monastery visits. Clear views expected for mountain monasteries.</p>
                </div>
              </Card>
            </div>
            
            {/* Travel Tips */}
            <div>
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Travel Tips</CardTitle>
                  <CardDescription>Current weather recommendations</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {travelTips.slice(0, 3).map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                      <div key={index} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                        <IconComponent className={`h-5 w-5 mt-0.5 ${tip.priority === 'high' ? 'text-red-500' : 'text-primary'}`} />
                        <div>
                          <div className="font-medium text-sm">{tip.title}</div>
                          <div className="text-xs text-muted-foreground">{tip.tip}</div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Forecast */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">7-Day Forecast</h2>
            <p className="text-muted-foreground">Plan your monastery visits ahead</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {forecast.map((day, index) => {
              const IconComponent = getWeatherIcon(day.condition, day.icon);
              return (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                  <div className="font-medium mb-2">{day.day}</div>
                  <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="space-y-1">
                    <div className="font-bold">{day.high}°</div>
                    <div className="text-sm text-muted-foreground">{day.low}°</div>
                    <div className="text-xs text-blue-500">{day.precipitation}%</div>
                  </div>
                  <div className="text-xs mt-2 text-muted-foreground">{day.condition}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multiple Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Weather Across Locations</h2>
            <p className="text-muted-foreground">Current conditions at major monastery destinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monasteryWeather.map((location, index) => {
              const IconComponent = getWeatherIcon(location.condition, location.icon);
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">{location.elevation}</p>
                    </div>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{location.temperature}°C</div>
                    <div className="text-sm text-muted-foreground">{location.condition}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monthly Guide */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Monthly Travel Guide</h2>
            <p className="text-muted-foreground">Best times to visit monasteries throughout the year</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyGuide.map((month, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg text-primary">{month.month}</CardTitle>
                  <CardDescription>{month.temp}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div>
                    <Badge variant="outline" className="mb-2">{month.condition}</Badge>
                    <p className="text-sm text-muted-foreground">{month.activities}</p>
                  </div>
                  <div className="text-xs">
                    <span className="font-medium">Clothing: </span>
                    <span className="text-muted-foreground">{month.clothing}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Alerts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-yellow-200 bg-yellow-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">Weather Advisory</h3>
                  <p className="text-yellow-700 mb-4">
                    Monsoon season (June-September) may cause road closures and landslides. 
                    Always check local conditions before traveling to remote monasteries.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      Check Road Conditions
                    </Button>
                    <Button variant="outline" size="sm">
                      Emergency Contacts
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Weather;