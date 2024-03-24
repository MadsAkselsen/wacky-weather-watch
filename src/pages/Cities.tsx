import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import React, { useContext } from 'react';

const Cities: React.FC = () => {
	const { weatherData } = useContext(WeatherContext) as WeatherContextType;
	console.log("weatherData ====>", weatherData);
	return (
		<div>
			<h1>Cities Page</h1>
			<p>This is the Cities page.</p>
		</div>
	);
};

export default Cities;
