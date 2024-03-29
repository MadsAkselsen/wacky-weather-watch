import React from 'react';
import { useWeatherContext } from 'context/weatherContext';
import { Typography, Box } from '@mui/material';
import { useSettingsContext } from 'context/SettingsContext';
import { convertTemperature } from 'utils/utils';

interface CityInfoProps {
	transparent?: boolean;
}

const CityInfo: React.FC<CityInfoProps> = ({ transparent = true }) => {
	const { weatherData } = useWeatherContext();
	const { temperatureUnit } = useSettingsContext();

	if (!weatherData) {
		return null;
	}

	const todayForecast = weatherData.forecastData.list[0];

	const backgroundColor = transparent
		? 'transparent'
		: 'default background color here';

	return (
		<Box
			style={{
				backgroundColor,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent={'space-between'}
				height={'100%'}
				gap={6}
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
					{Math.round(
						convertTemperature(
							weatherData.weatherData.main.temp,
							temperatureUnit,
						),
					)}
					°{temperatureUnit === 'Celsius' ? 'C' : 'F'}
				</Typography>
			</Box>
			<img
				src={`http://openweathermap.org/img/wn/${todayForecast.weather[0].icon}.png`}
				alt={todayForecast.weather[0].description}
				style={{ width: '200px', flex: 'none' }}
			/>
		</Box>
	);
};

export default CityInfo;
