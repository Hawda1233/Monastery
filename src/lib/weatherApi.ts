const API_KEY = 'zpka_3a8d373cf181421f99f6e6db64751af4_2c564706';
const BASE_URL = 'http://dataservice.accuweather.com';

export interface WeatherData {
  name: string;
  lat: number;
  lon: number;
  temperature: number;
  condition: string;
  description: string;
  feelsLike: number;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
  windDirection: number;
  icon: string;
}

export interface ForecastData {
  day: string;
  high: number;
  low: number;
  condition: string;
  description: string;
  icon: string;
  precipitation: number;
}

export const monasteries = [
  { name: 'Rumtek Monastery', lat: 27.3241, lon: 88.6122, elevation: '1,547m' },
  { name: 'Pemayangtse Monastery', lat: 27.3166, lon: 88.2332, elevation: '2,085m' },
  { name: 'Tashiding Monastery', lat: 27.3027, lon: 88.2397, elevation: '1,465m' },
  { name: 'Enchey Monastery', lat: 27.3398, lon: 88.6132, elevation: '1,909m' }
];

// Helper function to get location key from coordinates
const getLocationKey = async (lat: number, lon: number): Promise<string> => {
  const url = `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Location API error: ${response.status}`);
  }
  
  const data = await response.json();
  return data.Key;
};

export const fetchWeatherData = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    // First get location key
    const locationKey = await getLocationKey(lat, lon);
    
    // Then get current conditions
    const url = `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const data = await response.json();
    const current = data[0]; // AccuWeather returns array
    
    return {
      name: `Location ${locationKey}`, // AccuWeather doesn't return name in current conditions
      lat,
      lon,
      temperature: Math.round(current.Temperature.Metric.Value),
      condition: current.WeatherText,
      description: current.WeatherText,
      feelsLike: Math.round(current.RealFeelTemperature.Metric.Value),
      humidity: current.RelativeHumidity,
      pressure: Math.round(current.Pressure.Metric.Value),
      visibility: Math.round(current.Visibility.Metric.Value),
      windSpeed: Math.round(current.Wind.Speed.Metric.Value),
      windDirection: current.Wind.Direction.Degrees,
      icon: current.WeatherIcon.toString()
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecastData = async (lat: number, lon: number): Promise<ForecastData[]> => {
  try {
    // First get location key
    const locationKey = await getLocationKey(lat, lon);
    
    // Then get 5-day forecast
    const url = `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true&metric=true`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Forecast API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    const forecast: ForecastData[] = [];
    const dayNames = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday'];
    
    data.DailyForecasts.forEach((day: any, index: number) => {
      forecast.push({
        day: index < dayNames.length ? dayNames[index] : new Date(day.Date).toLocaleDateString('en-US', { weekday: 'short' }),
        high: Math.round(day.Temperature.Maximum.Value),
        low: Math.round(day.Temperature.Minimum.Value),
        condition: day.Day.IconPhrase,
        description: day.Day.IconPhrase,
        icon: day.Day.Icon.toString(),
        precipitation: day.Day.PrecipitationProbability || 0
      });
    });
    
    return forecast;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};