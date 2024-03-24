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

const citiesSearchCache = new Map<string, any>();
const weatherCache = new Map<string, any>();

export const getCities = async (inputValue: string) => {
	// Use mock data if the environment variable is set to save API calls
	if (process.env.REACT_APP_USE_MOCK_DATA) {
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

export const getWeather = async (searchData: CityOption) => {
	// Use mock data if the environment variable is set to save API calls
	if (process.env.REACT_APP_USE_MOCK_DATA) {
		return WeatherAndForecastMockData;
	}
	// const [lat, lon] = searchData.value.split(' ');
	const [cityName, _] = searchData.label.split(' ');

	// Check if the response for the inputValue is already in the cache
	if (weatherCache.has(cityName.toLowerCase())) {
		console.log('Returning cached data for:', cityName.toLowerCase());
		return weatherCache.get(cityName.toLowerCase()); // Return cached data
	}

	try {
		// const currentWeatherFetch = fetch(
		// 	`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		// );
		// const forecastFetch = fetch(
		// 	`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		// );
		const weatherResponse = await fetch(
			`${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`,
		);
		const forcastResponse = await fetch(
			`${WEATHER_API_URL}/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`,
		);

		const weatherData = await weatherResponse.json();
		const forecastData = await forcastResponse.json();

		// Cache the response for future requests
		weatherCache.set(cityName.toLowerCase(), { weatherData, forecastData });

		return { weatherData, forecastData };
	} catch (error) {
		console.error('Failed to fetch weather:', error);
		return null;
	}
};
