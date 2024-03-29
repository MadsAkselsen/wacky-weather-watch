import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress'; // Import for the loading spinner
import IconButton from '@mui/material/IconButton';
import { getWeatherByCoords } from 'api/WeatherService';
import { useWeatherContext } from 'context/weatherContext';
import { useNavigate } from 'react-router-dom';
import { useFetchData } from 'hooks/useFetchData';

const CurrentPositionBtn = () => {
	const { setWeatherData } = useWeatherContext();
	const [isLoading, setIsLoading] = useState(false); // State to track loading status
	const navigate = useNavigate();
	const generalFetch = useFetchData();

	const handleLocation = async () => {

		if (navigator.geolocation) {
			navigate('/');
			setIsLoading(true); // Start loading
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;
					try {
						const weatherData = await generalFetch(
							getWeatherByCoords,
							latitude,
							longitude,
						);
						if (weatherData) {
							setWeatherData(weatherData);
						} else {
							console.error('Failed to fetch weather data.');
						}
					} catch (error) {
						console.error('Error getting weather data:', error);
					} finally {
						setIsLoading(false); // Stop loading regardless of the result
					}
				},
				(error) => {
					console.error('Error getting location:', error);
					setIsLoading(false); // Stop loading on error
				},
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	};

	return (
		<IconButton
			onClick={handleLocation}
			aria-label="get current location"
			color="inherit"
		>
			{isLoading ? <CircularProgress size={24} /> : <LocationOnIcon />}
		</IconButton>
	);
};

export default CurrentPositionBtn;
