import React, { useContext, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { ActionMeta, CSSObjectWithLabel } from 'react-select';
import { getCities, getWeather } from 'api/WeatherService';
import { CityOption } from 'types/types';
import { WeatherContext, WeatherContextType } from 'context/weatherContext';

// Custom styles for <AsyncPaginate >
const customStyles = () => {
	return {
		control: (
			provided: CSSObjectWithLabel,
			state: { isFocused: boolean },
		) => ({
			...provided,
			width: '300px',
			borderRadius: '5px',
			border: '2px solid #ccc',
			boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : 'none',
		}),
		option: (
			provided: CSSObjectWithLabel,
			state: { isFocused: boolean; isSelected: boolean },
		) => ({
			...provided,

			backgroundColor: state.isFocused
				? '#3699FF'
				: provided.backgroundColor,
			color: state.isFocused ? 'white' : provided.color,
			':active': {
				...provided[':active'],
				// backgroundColor: !state.isSelected ? '#3699FF' : provided[':active'].backgroundColor,
			},
		}),
	};
};

const Search: React.FC = () => {
	const [search, setSearch] = useState<CityOption | null>(null);
	const { setWeatherData } = useContext(WeatherContext) as WeatherContextType;

	const onSearchChange = (searchData: CityOption) => {
		updateWeather(searchData);
	};

	const updateWeather = async (searchData: CityOption) => {
		const weatherData = await getWeather(searchData);
        // console.log("Weather data: ", weatherData)
		setWeatherData(weatherData);
	};

	const loadOptions = (inputValue: string) => {
		return getCities(inputValue)
			.then((response) => {
				return {
					options: response.data.map((city: any) => {
						// Consider defining a specific type for city
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
				// You might want to generate a dummy or unique ID for the value
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
			console.log('New value: ', newValue);
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
			styles={customStyles()}
		/>
	);
};

export default Search;
