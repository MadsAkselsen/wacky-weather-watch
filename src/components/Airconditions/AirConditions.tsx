// AirConditions.tsx
import { Box, Typography, Grid } from '@mui/material';
import { useSettingsContext } from 'context/SettingsContext';
import { useWeatherContext } from 'context/weatherContext';
import { convertSpeed, convertTemperature } from 'utils/utils';

const AirConditions = () => {
	const { weatherData } = useWeatherContext();
	const { temperatureUnit, windSpeedUnit } = useSettingsContext();

	if (!weatherData) {
		return null;
	}

	const { feels_like, humidity } = weatherData.weatherData.main;
	const { speed } = weatherData.weatherData.wind;
	const uvIndex = 3; // Assuming a static value for UV Index as it's not provided in the data

	return (
		<Box>
			<Typography
				variant="subtitle2"
				gutterBottom
				fontSize={{ xs: '0.7rem', sm: '0.7rem' }}
			>
				AIR CONDITIONS
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Box>
						<Typography variant="subtitle2" component="p">
							Real Feel
						</Typography>
						<Typography variant="h6" component="span">
							{Math.round(convertTemperature(feels_like, temperatureUnit))}°{temperatureUnit === 'Celsius' ? 'C' : 'F'}
						</Typography>
					</Box>
					<Box>
						<Typography variant="subtitle2" component="p">
							Wind
						</Typography>
						<Typography variant="h6" component="span">
							{convertSpeed(speed, windSpeedUnit)}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant="subtitle2" component="p">
							Chance of rain
						</Typography>
						<Typography variant="h6" component="span">
							{humidity}%
						</Typography>
					</Box>
					<Box>
						<Typography variant="subtitle2" component="p">
							UV Index
						</Typography>
						<Typography variant="h6" component="span">
							{uvIndex}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AirConditions;
