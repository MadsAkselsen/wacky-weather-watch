// HourlyForecast.tsx
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
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
    <Box>
      <Typography
				variant="subtitle2"
				gutterBottom
				sx={{ color: '#E7E7EB' }}
			>
				TODAY'S FORECAST
			</Typography>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
      		
      {hourlyData.map((forecast) => (
        <HourlyEntry
          key={forecast.dt}
          time={new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          iconUrl={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
          temperature={forecast.main.temp}
        />
      ))}
    </Box>
    </Box>
    
  );
};

export default HourlyForecast;