// MapComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useWeatherContext } from 'context/weatherContext';
import { getWeatherByCoords } from 'api/WeatherService';
import { useFetchData } from 'hooks/useFetchData';
import XYZ from 'ol/source/XYZ';

const MapComponent: React.FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const [selectedCoords, setSelectedCoords] = useState<
		[number, number] | null
	>(null);
	const navigate = useNavigate();
	const { setWeatherData } = useWeatherContext();
	const generalFetch = useFetchData();

	useEffect(() => {
		if (mapRef.current) {
			const map = new Map({
				target: mapRef.current,
				layers: [
					new TileLayer({
						source: new XYZ({
							attributions: '© OpenStreetMap contributors, © CARTO',
							url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
						  }),
					}),
				],
				view: new View({
					center: fromLonLat([0, 0]),
					zoom: 4,
				}),
			});

			map.on('singleclick', (evt) => {
				const lonLat = toLonLat(evt.coordinate);
				setSelectedCoords([lonLat[0], lonLat[1]]);
				setOpen(true);
			});
		}
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	const handleConfirm = async () => {
		if (selectedCoords) {
			const weatherData = await generalFetch(
				getWeatherByCoords,
				selectedCoords[1],
				selectedCoords[0],
			);
			setWeatherData(weatherData);

			navigate('/');
		}
	};

	return (
		<>
			<Box
				ref={mapRef}
				style={{
					height: '100%',
					overflow: 'hidden',
					borderRadius: '10px',
				}}
			></Box>
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
