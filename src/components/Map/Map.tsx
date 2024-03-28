// MapComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useWeatherContext } from 'context/weatherContext';
import { getWeatherByCoords } from 'api/WeatherService';

const MapComponent: React.FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const [selectedCoords, setSelectedCoords] = useState<
		[number, number] | null
	>(null);
	const navigate = useNavigate();
	const { setWeatherData } = useWeatherContext();

	useEffect(() => {
		if (mapRef.current) {
			const map = new Map({
				target: mapRef.current,
				layers: [
					new TileLayer({
						source: new OSM(),
					}),
				],
				view: new View({
					center: fromLonLat([0, 0]),
					zoom: 4,
				}),
			});

			map.on('singleclick', (evt) => {
				const coords = fromLonLat(evt.coordinate) as [number, number];
				setSelectedCoords(coords);
				setOpen(true);
			});
		}
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	const handleConfirm = async () => {
		if (selectedCoords) {
			// Here, you'd fetch the weather data for the selectedCoords
			// For this example, let's pretend we have a function to fetch weather data
			const weatherData = await getWeatherByCoords(selectedCoords[0], selectedCoords[1]);
			setWeatherData(weatherData);

			navigate('/');
		}
	};

	return (
		<>
			<div ref={mapRef} style={{ width: '100%', height: '100%', overflow: 'hidden', margin: '16px' }}></div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Confirm Location</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Do you want to show weather for this location?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>No</Button>
					<Button onClick={handleConfirm} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default MapComponent;
