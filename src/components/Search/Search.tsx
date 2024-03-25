import React, { useContext, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { ActionMeta, CSSObjectWithLabel } from 'react-select';
import { getCities, getWeather } from 'api/WeatherService';
import { CityOption } from 'types/types';
import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import { useThemeContext } from 'context/themeContext';

// Hook for custom styles for <AsyncPaginate >
const useSelectStyles = () => {
	const {theme} = useThemeContext();

	return {
		control: (styles: CSSObjectWithLabel) => ({
			...styles,
			background: theme.palette.background.paper,
			borderColor: theme.palette.mode === 'dark' ? 'transparent' : '#ccc',
			boxShadow: 'none',
			minHeight: '56px',
			minWidth: '300px', // Match the width in the screenshot
			borderRadius: '10px', // Match the border radius in the screenshot
			'&:hover': {
			  borderColor: theme.palette.mode === 'dark' ? 'transparent' : '#aaa',
			},
		  }),
		  input: (styles: CSSObjectWithLabel) => ({
			...styles,
			color: theme.palette.text.primary,
		  }),
		  placeholder: (styles: CSSObjectWithLabel) => ({
			...styles,
			color: theme.palette.text.secondary,
		  }),
		  singleValue: (styles: CSSObjectWithLabel) => ({
			...styles,
			color: theme.palette.text.primary,
		  }),
		option: (styles: CSSObjectWithLabel, { isFocused, isSelected }: { isFocused: boolean, isSelected: boolean }) => ({
			...styles,
			backgroundColor: isSelected
				? theme.palette.primary.main
				: isFocused
				? theme.palette.action.hover
				: theme.palette.background.paper,
			color: isSelected
				? theme.palette.primary.contrastText
				: theme.palette.text.primary,
			':active': {
				...styles[':active'],
				backgroundColor: isSelected ? theme.palette.primary.main : theme.palette.action.selected,
			},
		}),
		  menu: (styles: CSSObjectWithLabel) => ({
			...styles,
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[2],
			// You might want to add a border or different styles here
		  }),
		  menuList: (styles: CSSObjectWithLabel) => ({
			...styles,
			padding: 0,
			// Any additional styles if needed
		  }),
		  // Add other custom styles based on the theme
		};
};

const Search: React.FC = () => {
	const [search, setSearch] = useState<CityOption | null>(null);
	const { setWeatherData } = useContext(WeatherContext) as WeatherContextType;

	const styles = useSelectStyles();

	const onSearchChange = (searchData: CityOption) => {
		updateWeather(searchData);
	};

	const updateWeather = async (searchData: CityOption) => {
		const weatherData = await getWeather(searchData);
		setWeatherData(weatherData);
	};

	const loadOptions = (inputValue: string) => {
		return getCities(inputValue)
			.then((response) => {
				return {
					options: response.data.map((city: any) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((error) => {
				console.error('Failed to fetch geo locations', error);
				// Return the user input as a fallback option
				return {
					options: [
						{
							value: `fallback-${inputValue}`, // A fallback or dummy value
							label: `${inputValue}`, // Show the input as an option
						},
					],
				};
			});
	};

	const handleOnChange = (
		newValue: CityOption | null,
		actionMeta: ActionMeta<CityOption>,
	) => {
		if (newValue) {
			setSearch(newValue);
			onSearchChange(newValue);
		}
	};

	return (
		<AsyncPaginate
			placeholder="Search for city"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
			styles={styles}
		/>
	);
};

export default Search;
