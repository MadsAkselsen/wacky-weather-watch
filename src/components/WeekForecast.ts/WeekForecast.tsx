import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import { formatDate } from 'utils/formatDate';

const WeekForecast = () => {
	const { weatherData } = useContext(WeatherContext) as WeatherContextType;

	if (!weatherData) {
		return null;
	}

    console.log("weatherData.forecastData.list", weatherData.forecastData.list);
	const dailyForecast = weatherData.forecastData.list.filter(
		(item, index) => index % 8 === 4,
	);

	return (
		<Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1E213A' }}>
			<Typography
				variant="subtitle2"
				gutterBottom
				sx={{ color: '#E7E7EB' }}
			>
				7-DAY FORECAST
			</Typography>
			<Grid container spacing={2}>
				{dailyForecast.map((forecast) => {
					const date = new Date(forecast.dt * 1000);
					const formattedDate = formatDate(date);
					return (
						<Grid item xs={12} key={forecast.dt}>
							<Paper
								elevation={3}
								sx={{
									padding: 2,
									display: 'flex',
									alignItems: 'center', // Centers items vertically within the card
									justifyContent: 'space-between', // Spreads out items horizontally
									backgroundColor: '#1E213A',
									color: '#E7E7EB',
								}}
							>
								<Typography
									variant="subtitle2"
									sx={{ flex: 1 }}
								>
									{formattedDate}
								</Typography>
								<img
									src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
									alt={forecast.weather[0].description}
									style={{ width: '50px', flex: 'none' }} // flex: 'none' to prevent the image from growing or shrinking
								/>
								<Typography
									variant="h6"
									sx={{ flex: 1 }}
								>{`${Math.round(forecast.main.temp_max)}°/${Math.round(forecast.main.temp_min)}°`}</Typography>
								<Typography variant="body2" sx={{ flex: 1 }}>
									{forecast.weather[0].main}
								</Typography>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default WeekForecast;
