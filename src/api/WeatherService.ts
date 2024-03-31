import { CityOption } from 'types/types';
import { GeoAPIMockData, WeatherAndForecastMockData } from './mockData';

export const geoApiOptions = () => {
	const apiKey = process.env.REACT_APP_X_RAPID_API_KEY;
	if (!apiKey) {
		throw new Error('API key not found');
	}
	return {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey, // rapid api key
			'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		},
	};
};
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // openweather API
export const WEATHER_API_BASE_URL = 'http://localhost:8080';

const citiesSearchCache = new Map<string, any>();
const weatherCache = new Map<string, any>();

export const getCities = async (useMockData: boolean, inputValue: string) => {
	// Use mock data if the environment variable is set to save API calls
	if (useMockData) {
		return GeoAPIMockData;
	}
	// Check if the response for the inputValue is already in the cache
	if (citiesSearchCache.has(inputValue)) {
		console.log('Returning cached data for:', inputValue);
		return citiesSearchCache.get(inputValue); // Return cached data
	}
	try {
		const response = await fetch(
			`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
			geoApiOptions(),
		);
		const jsonResponse = await response.json();

		// Cache the response for future requests
		citiesSearchCache.set(inputValue, jsonResponse);

		return jsonResponse;
	} catch (error) {
		console.error('GEO API failed', error);
	}
};

export const getWeatherByCity = async (useMockData: boolean, searchData: CityOption) => {
    if (useMockData) {
        return WeatherAndForecastMockData;
    }

    const [cityName] = searchData.label.split(' ');

    if (weatherCache.has(cityName.toLowerCase())) {
        console.log('Returning cached data for:', cityName.toLowerCase());
        return weatherCache.get(cityName.toLowerCase());
    }

    try {
        const response = await fetch(`${WEATHER_API_BASE_URL}/weather?city=${encodeURIComponent(cityName)}`);
        const data = await response.json();

        // Assume the structure { weatherData, forecastData } for simplicity
        weatherCache.set(cityName.toLowerCase(), data);

        return data;
    } catch (error) {
        console.error('Failed to fetch weather:', error);
        return null;
    }
};

export const getWeatherByCoords = async (useMockData: boolean, lat: number, lon: number) => {
    if (useMockData) {
        return WeatherAndForecastMockData;
    }

    const cacheKey = `${lat + lon}`;

    if (weatherCache.has(cacheKey)) {
        console.log('Returning cached data for:', cacheKey);
        return weatherCache.get(cacheKey);
    }

    try {
        const response = await fetch(`${WEATHER_API_BASE_URL}/weatherByCoords?lat=${lat}&lon=${lon}`);
        const data = await response.json();

        weatherCache.set(cacheKey, data);

        return data;
    } catch (error) {
        console.error('Failed to fetch weather:', error);
        return null;
    }
};
