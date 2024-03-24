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

export const getCities = async (inputValue: string) => {
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
		console.error('Primary GEO API failed, attempting backup:', error);
	}
};
