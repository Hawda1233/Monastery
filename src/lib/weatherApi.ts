const BASE_URL = 'https://rsjgvmceqchinpbbtius.supabase.co/functions/v1';

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
  try {
    const response = await fetch(`${BASE_URL}/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat,
        lon,
        type: 'current'
      })
    });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecastData = async (lat: number, lon: number): Promise<ForecastData[]> => {
  try {
    const response = await fetch(`${BASE_URL}/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat,
        lon,
        type: 'forecast'
      })
    });

    if (!response.ok) {
      throw new Error(`Forecast API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
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