// HourlyForecast.tsx
import React, { useContext } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import HourlyEntry from './HourlyEntry';
import { WeatherContext, WeatherContextType } from 'context/weatherContext';

const HourlyForecast = () => {
	const { weatherData } = useContext(WeatherContext) as WeatherContextType;

	if (!weatherData) {
		return null;
	}

	// Forecast data is provided in 3-hour intervals. We only want the first 6 entries.
	const hourlyData = weatherData.forecastData.list.slice(0, 6);

	return (
		<>
			<Typography
				variant="subtitle2"
				gutterBottom
				fontSize={{ xs: '0.7rem', sm: '0.7rem' }}
			>
				TODAY'S FORECAST
			</Typography>
			<Box
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				flexWrap="wrap"
			>
				{hourlyData.map((forecast, index) => (
					<>
						{index !== 0 && (
							<Divider
								orientation="vertical"
								flexItem
								sx={{ bgcolor: 'grey.900', mx: 2 }}
							/>
						)}
						<HourlyEntry
							key={forecast.dt}
							time={new Date(
								forecast.dt * 1000,
							).toLocaleTimeString([], {
								hour: '2-digit',
								minute: '2-digit',
							})}
							iconUrl={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
							temperature={forecast.main.temp}
						/>
					</>
				))}
			</Box>
		</>
	);
};

export default HourlyForecast;
