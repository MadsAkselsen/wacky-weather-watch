export interface CityOption {
	value: string;
	label: string;
}

export interface WeatherAndForecastData {
	weatherData: WeatherData;
	forecastData: ForecastData;
}

interface WeatherData {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface ForecastData {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastListItem[];
	city: City;
}

interface Coord {
	lon: number;
	lat: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level?: number; // Optional as it appears in forecast but not in current weather
	grnd_level?: number; // Optional for the same reason
	temp_kf?: number; // Optional, appears in forecast data
}

interface Wind {
	speed: number;
	deg: number;
	gust?: number; // Optional as it might not appear in all responses
}

interface Clouds {
	all: number;
}

interface Sys {
	type?: number; // Optional, not present in forecast
	id?: number; // Optional, not present in forecast
	country?: string; // Optional, not present in forecast
	sunrise?: number; // Optional, not present in forecast
	sunset?: number; // Optional, not present in forecast
	pod?: string; // Present in forecast data
}

interface ForecastListItem {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: string;
}

interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}
