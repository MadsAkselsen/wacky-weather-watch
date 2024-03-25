// HourlyEntry.tsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface HourlyEntryProps {
	time: string;
	iconUrl: string;
	temperature: number;
}

const HourlyEntry: React.FC<HourlyEntryProps> = ({
	time,
	iconUrl,
	temperature,
}) => {
	const theme = useTheme();

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			padding={theme.spacing(1)}
		>
			<Typography variant="subtitle2">{time}</Typography>
			<img
				src={iconUrl}
				alt="Weather icon"
				style={{ width: '50px', height: '50px' }}
			/>
			<Typography variant="h6">{`${Math.round(temperature)}°`}</Typography>
		</Box>
	);
};

export default HourlyEntry;
