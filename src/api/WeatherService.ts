export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '', // enter your rapid api key here
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = ''; // enter your key from openweather API



// const fetch












// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// export const fetchAllBeaches = async (): Promise<Beach[]> => {
//   const endpoint = 'https://api.coastal.ca.gov/access/v1/locations';
//   let dataExpanded;
//   try {
//     const data = await (await fetch(endpoint)).json();

//     // expanding data to store favourite status
//     dataExpanded = data.map((beach: Beach) => ({
//       ...beach,
//       favourite: false,
//     }));
//   } catch (error) {
//     console.log('Error fetching beaches:', error);
//   }

//   return dataExpanded;
// };

// export const fetchWeather = async (beach: Beach): Promise<Weather> => {
//   const metaweatherAPI = `https://www.metaweather.com/api/location/search/?lattlong=${beach.LATITUDE},${beach.LONGITUDE}`;
//   let weatherResp;
//   try {
//     const data = await (await fetch(proxyUrl + metaweatherAPI)).json();
//     const woeid = data[0].woeid;

//     const weatherAPIWithWoeid = `https://www.metaweather.com/api/location/${woeid}/`;
//     weatherResp = await (await fetch(proxyUrl + weatherAPIWithWoeid)).json();
//   } catch (error) {
//     console.log('Error fetching weather', error);
//   }

//   return weatherResp;
// };
export {};
