import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useThemeContext } from 'context/themeContext';
import { Typography } from '@mui/material';

interface OptionProps {
	title: string;
	options: string[];
	onOptionChange: (selectedOption: string) => void;
	currentValue: string;
}

const OptionToggle: React.FC<OptionProps> = ({
	title,
	options,
	onOptionChange,
	currentValue,
}) => {
	const { theme } = useThemeContext();
	const [selectedOption, setSelectedOption] = useState<string>(options[0]);

	useEffect(() => {
		setSelectedOption(currentValue);
	}, [currentValue]);

	const handleSelection = (
		event: React.MouseEvent<HTMLElement>,
		newOption: string,
	) => {
		if (newOption !== null) {
			// Prevent deselecting all options
			setSelectedOption(newOption);
			onOptionChange(newOption); // Notify the parent component of the change
		}
	};

	const toggleButtonStyle = {
		color: theme.palette.text.primary,
		flexGrow: 1, // Make buttons take up equal width
		'&:not(:first-of-type)': {
			borderLeft: `1px solid ${theme.palette.divider}`,
		},
		'&:first-of-type': {
			borderTopLeftRadius: theme.shape.borderRadius,
			borderBottomLeftRadius: theme.shape.borderRadius,
			borderRight: `1px solid ${theme.palette.divider}`,
		},
		'&:last-of-type': {
			borderTopRightRadius: theme.shape.borderRadius,
			borderBottomRightRadius: theme.shape.borderRadius,
			borderLeft: `1px solid ${theme.palette.divider}`,
		},
		'&.Mui-selected, &.Mui-selected:hover': {
			color: theme.palette.primary.contrastText,
			backgroundColor: theme.palette.primary.main,
			borderRadius: 2,
		},
		// Remove border radius for unselected middle buttons
		borderRadius: selectedOption ? 0 : theme.shape.borderRadius,
	};

	return (
		<>
			<Typography
				variant="overline"
				display="block"
				sx={{ color: theme.palette.text.primary, mb: 1 }} // Use text color from theme
			>
				{title}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					marginBottom: 2,
					backgroundColor: theme.palette.background.default,
					borderRadius: 3,
					p: 1,
					maxWidth: 500,
					'& .MuiToggleButtonGroup-root': {
						display: 'flex',
						width: '100%',
					},
					'& .MuiToggleButtonGroup-grouped': {
						margin: 0,
						borderRadius: 0, // Remove border-radius for the group
					},
				}}
			>
				<ToggleButtonGroup
					size="small"
					value={selectedOption}
					exclusive
					onChange={handleSelection}
					aria-label={`${title} option`}
					sx={{
						display: 'flex',
						width: '100%',
					}}
				>
					{options.map((option, index) => (
						<ToggleButton
							value={option}
							key={option}
							sx={{
								...toggleButtonStyle,
								...(selectedOption === option && {
									borderRadius: 5,
								}),
								border: 'none',
							}}
						>
							{option}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>
		</>
	);
};

export default OptionToggle;
