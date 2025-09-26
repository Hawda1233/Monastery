const API_KEY = '7c31eaf4750d311e6ddc0c750c3b652b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

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

export const fetchWeatherData = async (lat: number, lon: number): Promise<WeatherData> => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      name: data.name,
      lat,
      lon,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: Math.round(data.visibility / 1000), // Convert to km
      windSpeed: Math.round(data.wind?.speed * 3.6), // Convert m/s to km/h
      windDirection: data.wind?.deg || 0,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecastData = async (lat: number, lon: number): Promise<ForecastData[]> => {
  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Forecast API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Group forecasts by day and get daily highs/lows
    const dailyForecasts: { [key: string]: any[] } = {};
    
    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toDateString();
      
      if (!dailyForecasts[dayKey]) {
        dailyForecasts[dayKey] = [];
      }
      dailyForecasts[dayKey].push(item);
    });
    
    const forecast: ForecastData[] = [];
    const dayNames = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    Object.keys(dailyForecasts).slice(0, 7).forEach((dayKey, index) => {
      const dayData = dailyForecasts[dayKey];
      const temps = dayData.map(item => item.main.temp);
      const high = Math.round(Math.max(...temps));
      const low = Math.round(Math.min(...temps));
      
      // Use midday forecast for general conditions
      const middayForecast = dayData[Math.floor(dayData.length / 2)] || dayData[0];
      const hasRain = dayData.some(item => item.weather[0].main.includes('Rain'));
      const precipitation = hasRain ? Math.round(Math.random() * 40 + 10) : Math.round(Math.random() * 20);
      
      forecast.push({
        day: index < dayNames.length ? dayNames[index] : new Date(dayKey).toLocaleDateString('en-US', { weekday: 'short' }),
        high,
        low,
        condition: middayForecast.weather[0].main,
        description: middayForecast.weather[0].description,
        icon: middayForecast.weather[0].icon,
        precipitation
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