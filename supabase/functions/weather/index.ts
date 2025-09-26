import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const ACCUWEATHER_BASE_URL = 'https://dataservice.accuweather.com';

interface WeatherRequest {
  lat: number;
  lon: number;
  type: 'current' | 'forecast';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { lat, lon, type }: WeatherRequest = await req.json()
    const apiKey = Deno.env.get('ACCUWEATHER_API_KEY')

    if (!apiKey) {
      throw new Error('AccuWeather API key not configured')
    }

    // First get location key
    const locationUrl = `${ACCUWEATHER_BASE_URL}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${lon}`
    
    const locationResponse = await fetch(locationUrl)
    if (!locationResponse.ok) {
      throw new Error(`Location API error: ${locationResponse.status}`)
    }
    
    const locationData = await locationResponse.json()
    const locationKey = locationData.Key
    const locationName = locationData.LocalizedName

    if (type === 'current') {
      // Get current conditions
      const weatherUrl = `${ACCUWEATHER_BASE_URL}/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
      
      const weatherResponse = await fetch(weatherUrl)
      if (!weatherResponse.ok) {
        throw new Error(`Weather API error: ${weatherResponse.status}`)
      }
      
      const weatherData = await weatherResponse.json()
      const current = weatherData[0]
      
      const result = {
        name: locationName,
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
      }

      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    } else {
      // Get 5-day forecast
      const forecastUrl = `${ACCUWEATHER_BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=true&metric=true`
      
      const forecastResponse = await fetch(forecastUrl)
      if (!forecastResponse.ok) {
        throw new Error(`Forecast API error: ${forecastResponse.status}`)
      }
      
      const forecastData = await forecastResponse.json()
      
      const forecast: Array<{
        day: string;
        high: number;
        low: number;
        condition: string;
        description: string;
        icon: string;
        precipitation: number;
      }> = []
      const dayNames = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday']
      
      forecastData.DailyForecasts.forEach((day: any, index: number) => {
        forecast.push({
          day: index < dayNames.length ? dayNames[index] : new Date(day.Date).toLocaleDateString('en-US', { weekday: 'short' }),
          high: Math.round(day.Temperature.Maximum.Value),
          low: Math.round(day.Temperature.Minimum.Value),
          condition: day.Day.IconPhrase,
          description: day.Day.IconPhrase,
          icon: day.Day.Icon.toString(),
          precipitation: day.Day.PrecipitationProbability || 0
        })
      })

      return new Response(JSON.stringify(forecast), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }
  } catch (error) {
    console.error('Weather API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  }
})