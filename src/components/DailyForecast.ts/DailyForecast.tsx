import { Grid, Box, Typography, Divider } from '@mui/material';
import { useSettingsContext } from 'context/SettingsContext';

import { useWeatherContext } from 'context/weatherContext';
import { convertTemperature, formatDate } from 'utils/utils';

const DailyForecast = () => {
	const { weatherData } = useWeatherContext();
	const { temperatureUnit } = useSettingsContext();

	if (!weatherData) {
		return null;
	}

	const dailyForecast = weatherData.forecastData.list.filter(
		(item, index) => index % 8 === 4,
	);

	return (
		<Box sx={{ padding: 2, borderRadius: 3 }}>
			<Typography
				variant="subtitle2"
				gutterBottom
				fontSize={{ xs: '0.7rem', sm: '0.7rem' }}
			>
				5-DAY FORECAST
			</Typography>
			<Grid container spacing={2} >
				{dailyForecast.map((forecast, index) => {
					const date = new Date(forecast.dt * 1000);
					const formattedDate = formatDate(date);
					return (
						<Grid item xs={12} key={forecast.dt}>
							<Box
								sx={{
									padding: 2,
									display: 'flex',
									alignItems: 'center', // Centers items vertically within the card
									justifyContent: 'space-between', // Spreads out items horizontally
									textAlign: 'center',
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
								>{`${Math.round(forecast.main.temp_max)}°/${Math.round(convertTemperature(forecast.main.temp_min, temperatureUnit))}°${temperatureUnit === 'Celsius' ? 'C' : 'F'}`}</Typography>
								<Typography variant="body2" sx={{ flex: 1 }}>
									{forecast.weather[0].main}
								</Typography>
							</Box>
							{index !== dailyForecast.length - 1 && <Divider sx={{ bgcolor: 'grey.900' }} />}
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default DailyForecast;
