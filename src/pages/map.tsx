import { Container } from '@mui/material';
import MapComponent from 'components/Map/Map';
import React from 'react';

const Map: React.FC = () => {
	return (
		<Container maxWidth="xl" disableGutters sx={{ height: '80vh' }}>
			<MapComponent />
		</Container>
	);
};

export default Map;
