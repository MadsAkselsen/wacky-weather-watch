import React, { useContext } from 'react';
import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import { Typography, Paper, Box } from '@mui/material';

interface CityInfoProps {
	transparent?: boolean;
}

const CityInfo: React.FC<CityInfoProps> = ({ transparent = true }) => {
	const { weatherData } = useContext(WeatherContext) as WeatherContextType;

	if (!weatherData) {
		return null;
	}

	const todayForecast = weatherData.forecastData.list[0];

	const backgroundColor = transparent
		? 'transparent'
		: 'default background color here';

	return (
		<Paper
			style={{
				backgroundColor,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
                
                // height: '200px',
			}}
			elevation={transparent ? 0 : 3}
		>
			<Box
				display="flex" flexDirection="column"  justifyContent={'space-between'} height={'100%'} gap={6}
			>
				<Box>
					<Typography variant="h4" component="h1">
						{weatherData.weatherData.name}
					</Typography>
					<Typography variant="subtitle1">
						Chance of rain:{' '}
						{weatherData.weatherData.weather[0].description.includes(
							'rain',
						)
							? 'Yes'
							: 'No'}
					</Typography>
				</Box>
				<Typography variant="h2">
					{Math.round(weatherData.weatherData.main.temp)}°
				</Typography>
			</Box>
			<img
				src={`http://openweathermap.org/img/wn/${todayForecast.weather[0].icon}.png`}
				alt={todayForecast.weather[0].description}
				style={{ width: '200px', flex: 'none' }}
			/>
		</Paper>
	);
};

export default CityInfo;
