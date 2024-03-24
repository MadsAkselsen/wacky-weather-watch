import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import React, { useContext } from 'react';

const WeatherInfo: React.FC = () => {
	const { weatherData } = useContext(WeatherContext) as WeatherContextType;
	console.log("weatherData ==>: ", weatherData)
	return (
		<div>
			<h1>WeatherInfo Page</h1>
			<p>Welcome to the WeatherInfo page!</p>
		</div>
	);
};

export default WeatherInfo;
