import { Container } from '@mui/material';
import MapComponent from 'components/Map/Map';
import React from 'react';

const Map: React.FC = () => {
	return (
		<Container maxWidth="xl" disableGutters sx={{height: '90vh', borderRadius: '5px', marginTop: '16px', marginLeft: '16px'}}>
			<MapComponent />
		</Container>
	);
};

export default Map;
