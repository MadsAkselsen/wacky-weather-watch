import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
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

const MapComponent: React.FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstanceRef = useRef<Map | null>(null); // Hold the OpenLayers Map instance
	const [isMapReady, setIsMapReady] = useState(false);
	const [open, setOpen] = useState(false);
	const [selectedCoords, setSelectedCoords] = useState<
		[number, number] | null
	>(null);
	const navigate = useNavigate();
	const { setWeatherData } = useWeatherContext();
	const generalFetch = useFetchData();

	useEffect(() => {
		if (mapRef.current && !mapInstanceRef.current) {
			console.log('setting up map');
			const initMap = new Map({
				target: mapRef.current,
				layers: [
					new TileLayer({
						source: new XYZ({
							attributions:
								'© OpenStreetMap contributors, © CARTO',
							url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
						}),
					}),
				],
				view: new View({
					center: fromLonLat([0, 0]),
					zoom: 4,
				}),
			});

			mapInstanceRef.current = initMap; // Store the map instance

			initMap.on('postrender', () => {
				setIsMapReady(true);
			});

			initMap.on('singleclick', (evt) => {
				const lonLat = toLonLat(evt.coordinate);
				setSelectedCoords([lonLat[0], lonLat[1]]);
				setOpen(true);
			});
		}
	}, []);

	const flyTo = (location: [number, number], doneCallback: () => void) => {
		const view = mapInstanceRef.current?.getView();
		if (!view) return;

		view.animate(
			{
				center: fromLonLat(location),
				zoom: 10,
				duration: 2000,
			},
			() => {
				navigate('/');
			},
		);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleConfirm = async () => {
		if (selectedCoords) {
			await generalFetch(
				getWeatherByCoords,
				selectedCoords[1],
				selectedCoords[0],
			)
				.then(setWeatherData)
				.catch(console.error); // Always good to catch potential errors

			setOpen(false);
			if (isMapReady) {
				flyTo(selectedCoords, () => navigate('/'));
			}
		}
	};

	return (
		<>
			<Box
				ref={mapRef}
				sx={{
					height: '100%',
					overflow: 'hidden',
					borderRadius: '10px',
				}}
			/>
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
