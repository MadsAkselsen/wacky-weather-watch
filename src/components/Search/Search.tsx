import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, WEATHER_API_KEY, WEATHER_API_URL, geoApiOptions } from 'api/WeatherService';
import { ActionMeta, CSSObjectWithLabel } from 'react-select';

// Custom styles
const customStyles = () => {
    return {
        control: (provided: CSSObjectWithLabel, state: { isFocused: boolean }) => ({
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
    
            backgroundColor: state.isFocused ? '#3699FF' : provided.backgroundColor,
            color: state.isFocused ? 'white' : provided.color,
            ':active': {
                ...provided[':active'],
                // backgroundColor: !state.isSelected ? '#3699FF' : provided[':active'].backgroundColor,
            },
        }),
    }
};

// Define the type for the city option
interface CityOption {
	value: string;
	label: string;
}

const Search: React.FC = () => {
	const [search, setSearch] = useState<CityOption | null>(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
  
    const onSearchChange = (searchData: CityOption) => {
      const [lat, lon] = searchData.value.split(" ");
  
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();
  
          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forcastResponse });

        })
        .catch(console.log);
    };

	const loadOptions = (inputValue: string) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
			geoApiOptions,
		)
			.then((response) => response.json())
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
    console.log("forecast", forecast)
    console.log("currentWeather", currentWeather)
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