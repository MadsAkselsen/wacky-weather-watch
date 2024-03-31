import { test, expect } from '@playwright/test';

/* eslint-disable testing-library/prefer-screen-queries */
test.describe('Search Functionality', () => {
	test.beforeEach(async ({ page }) => {
		// Intercepting the network request and providing a mocked response
		await page.route(
			'https://wft-geo-db.p.rapidapi.com/v1/geo/cities*',
			(route) => {
				route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify({
						// Mock response body structure based on the actual API response
						data: [
							{
								name: 'Copenhagen',
								countryCode: 'DK',
								latitude: 40.7128,
								longitude: -74.006,
							},
							// Add more mocked cities as needed
						],
					}),
				});
			},
		);
		// Mocking getWeatherByCity API call for weather data
		await page.route(
			'http://localhost:8080/weather?city=Copenhagen,DK',
			(route) => {
				route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify({
						"weatherData": {
							"coord": {
								"lon": 55.3047,
								"lat": 25.2582
							},
							"weather": [
								{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
								}
							],
							"base": "stations",
							"main": {
								"temp": 25,
								"feels_like": 25.25,
								"temp_min": 24.96,
								"temp_max": 25.16,
								"pressure": 1016,
								"humidity": 65
							},
							"visibility": 10000,
							"wind": {
								"speed": 3.6,
								"deg": 270
							},
							"clouds": {
								"all": 0
							},
							"dt": 1711896899,
							"sys": {
								"type": 1,
								"id": 7537,
								"country": "AE",
								"sunrise": 1711851059,
								"sunset": 1711895669
							},
							"timezone": 14400,
							"id": 292223,
							"name": "Dubai",
							"cod": 200
						},
						"forecastData": {
							"cod": "200",
							"message": 0,
							"cnt": 40,
							"list": [
								{
									"dt": 1711897200,
									"main": {
										"temp": 25,
										"feels_like": 25.25,
										"temp_min": 23.76,
										"temp_max": 25,
										"pressure": 1016,
										"sea_level": 1016,
										"grnd_level": 1015,
										"humidity": 65,
										"temp_kf": 1.24
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 3.19,
										"deg": 274,
										"gust": 3.66
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-03-31 15:00:00"
								},
								{
									"dt": 1711908000,
									"main": {
										"temp": 24.47,
										"feels_like": 24.72,
										"temp_min": 23.4,
										"temp_max": 24.47,
										"pressure": 1016,
										"sea_level": 1016,
										"grnd_level": 1015,
										"humidity": 67,
										"temp_kf": 1.07
									},
									"weather": [
										{
											"id": 802,
											"main": "Clouds",
											"description": "scattered clouds",
											"icon": "03n"
										}
									],
									"clouds": {
										"all": 33
									},
									"wind": {
										"speed": 2.36,
										"deg": 241,
										"gust": 2.57
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-03-31 18:00:00"
								},
								{
									"dt": 1711918800,
									"main": {
										"temp": 23.77,
										"feels_like": 24,
										"temp_min": 23.15,
										"temp_max": 23.77,
										"pressure": 1015,
										"sea_level": 1015,
										"grnd_level": 1013,
										"humidity": 69,
										"temp_kf": 0.62
									},
									"weather": [
										{
											"id": 803,
											"main": "Clouds",
											"description": "broken clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 67
									},
									"wind": {
										"speed": 1.49,
										"deg": 272,
										"gust": 1.78
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-03-31 21:00:00"
								},
								{
									"dt": 1711929600,
									"main": {
										"temp": 22.89,
										"feels_like": 23.04,
										"temp_min": 22.89,
										"temp_max": 22.89,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1013,
										"humidity": 69,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 2.13,
										"deg": 254,
										"gust": 2.36
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-01 00:00:00"
								},
								{
									"dt": 1711940400,
									"main": {
										"temp": 23.01,
										"feels_like": 23.09,
										"temp_min": 23.01,
										"temp_max": 23.01,
										"pressure": 1015,
										"sea_level": 1015,
										"grnd_level": 1014,
										"humidity": 66,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 2.83,
										"deg": 226,
										"gust": 3.15
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-01 03:00:00"
								},
								{
									"dt": 1711951200,
									"main": {
										"temp": 24.6,
										"feels_like": 24.58,
										"temp_min": 24.6,
										"temp_max": 24.6,
										"pressure": 1016,
										"sea_level": 1016,
										"grnd_level": 1015,
										"humidity": 56,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 5.11,
										"deg": 236,
										"gust": 5.58
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-01 06:00:00"
								},
								{
									"dt": 1711962000,
									"main": {
										"temp": 24.89,
										"feels_like": 24.92,
										"temp_min": 24.89,
										"temp_max": 24.89,
										"pressure": 1014,
										"sea_level": 1014,
										"grnd_level": 1014,
										"humidity": 57,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 6.82,
										"deg": 258,
										"gust": 7.86
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-01 09:00:00"
								},
								{
									"dt": 1711972800,
									"main": {
										"temp": 24.43,
										"feels_like": 24.55,
										"temp_min": 24.43,
										"temp_max": 24.43,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 62,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 5.44,
										"deg": 277,
										"gust": 7.77
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-01 12:00:00"
								},
								{
									"dt": 1711983600,
									"main": {
										"temp": 24.05,
										"feels_like": 24.16,
										"temp_min": 24.05,
										"temp_max": 24.05,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 63,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 87
									},
									"wind": {
										"speed": 2.99,
										"deg": 269,
										"gust": 3.92
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-01 15:00:00"
								},
								{
									"dt": 1711994400,
									"main": {
										"temp": 23.63,
										"feels_like": 23.8,
										"temp_min": 23.63,
										"temp_max": 23.63,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 67,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 87
									},
									"wind": {
										"speed": 3.26,
										"deg": 232,
										"gust": 3.53
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-01 18:00:00"
								},
								{
									"dt": 1712005200,
									"main": {
										"temp": 23.35,
										"feels_like": 23.59,
										"temp_min": 23.35,
										"temp_max": 23.35,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 71,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 89
									},
									"wind": {
										"speed": 4.3,
										"deg": 235,
										"gust": 5.56
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-01 21:00:00"
								},
								{
									"dt": 1712016000,
									"main": {
										"temp": 23.1,
										"feels_like": 23.35,
										"temp_min": 23.1,
										"temp_max": 23.1,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1010,
										"humidity": 72,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 94
									},
									"wind": {
										"speed": 3.89,
										"deg": 246,
										"gust": 5.2
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-02 00:00:00"
								},
								{
									"dt": 1712026800,
									"main": {
										"temp": 23.3,
										"feels_like": 23.51,
										"temp_min": 23.3,
										"temp_max": 23.3,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 70,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 3.03,
										"deg": 229,
										"gust": 3.7
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-02 03:00:00"
								},
								{
									"dt": 1712037600,
									"main": {
										"temp": 24.74,
										"feels_like": 24.78,
										"temp_min": 24.74,
										"temp_max": 24.74,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 58,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 4.35,
										"deg": 247,
										"gust": 5.16
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-02 06:00:00"
								},
								{
									"dt": 1712048400,
									"main": {
										"temp": 25.29,
										"feels_like": 25.28,
										"temp_min": 25.29,
										"temp_max": 25.29,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 54,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 5.61,
										"deg": 270,
										"gust": 6.74
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-02 09:00:00"
								},
								{
									"dt": 1712059200,
									"main": {
										"temp": 24.88,
										"feels_like": 24.94,
										"temp_min": 24.88,
										"temp_max": 24.88,
										"pressure": 1010,
										"sea_level": 1010,
										"grnd_level": 1009,
										"humidity": 58,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 92
									},
									"wind": {
										"speed": 5.73,
										"deg": 277,
										"gust": 7.56
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-02 12:00:00"
								},
								{
									"dt": 1712070000,
									"main": {
										"temp": 24.21,
										"feels_like": 24.28,
										"temp_min": 24.21,
										"temp_max": 24.21,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1010,
										"humidity": 61,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 95
									},
									"wind": {
										"speed": 4.32,
										"deg": 277,
										"gust": 6.44
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-02 15:00:00"
								},
								{
									"dt": 1712080800,
									"main": {
										"temp": 24.06,
										"feels_like": 24.11,
										"temp_min": 24.06,
										"temp_max": 24.06,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 61,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 86
									},
									"wind": {
										"speed": 2.74,
										"deg": 237,
										"gust": 3
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-02 18:00:00"
								},
								{
									"dt": 1712091600,
									"main": {
										"temp": 23.69,
										"feels_like": 23.73,
										"temp_min": 23.69,
										"temp_max": 23.69,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1010,
										"humidity": 62,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 3.27,
										"deg": 238,
										"gust": 3.7
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-02 21:00:00"
								},
								{
									"dt": 1712102400,
									"main": {
										"temp": 23.35,
										"feels_like": 23.36,
										"temp_min": 23.35,
										"temp_max": 23.35,
										"pressure": 1010,
										"sea_level": 1010,
										"grnd_level": 1009,
										"humidity": 62,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 100
									},
									"wind": {
										"speed": 3.88,
										"deg": 217,
										"gust": 4.36
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-03 00:00:00"
								},
								{
									"dt": 1712113200,
									"main": {
										"temp": 23.34,
										"feels_like": 23.3,
										"temp_min": 23.34,
										"temp_max": 23.34,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1011,
										"humidity": 60,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 9
									},
									"wind": {
										"speed": 2.94,
										"deg": 212,
										"gust": 3.12
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-03 03:00:00"
								},
								{
									"dt": 1712124000,
									"main": {
										"temp": 25.22,
										"feels_like": 25.1,
										"temp_min": 25.22,
										"temp_max": 25.22,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 50,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 8
									},
									"wind": {
										"speed": 2.81,
										"deg": 257,
										"gust": 3.16
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-03 06:00:00"
								},
								{
									"dt": 1712134800,
									"main": {
										"temp": 25.86,
										"feels_like": 25.75,
										"temp_min": 25.86,
										"temp_max": 25.86,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 48,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 7
									},
									"wind": {
										"speed": 4.52,
										"deg": 283,
										"gust": 4.8
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-03 09:00:00"
								},
								{
									"dt": 1712145600,
									"main": {
										"temp": 25.6,
										"feels_like": 25.6,
										"temp_min": 25.6,
										"temp_max": 25.6,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1010,
										"humidity": 53,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 802,
											"main": "Clouds",
											"description": "scattered clouds",
											"icon": "03d"
										}
									],
									"clouds": {
										"all": 46
									},
									"wind": {
										"speed": 4.95,
										"deg": 297,
										"gust": 6.79
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-03 12:00:00"
								},
								{
									"dt": 1712156400,
									"main": {
										"temp": 24.9,
										"feels_like": 24.99,
										"temp_min": 24.9,
										"temp_max": 24.9,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1010,
										"humidity": 59,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 804,
											"main": "Clouds",
											"description": "overcast clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 94
									},
									"wind": {
										"speed": 1.82,
										"deg": 307,
										"gust": 2.67
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-03 15:00:00"
								},
								{
									"dt": 1712167200,
									"main": {
										"temp": 24.82,
										"feels_like": 24.77,
										"temp_min": 24.82,
										"temp_max": 24.82,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 54,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 803,
											"main": "Clouds",
											"description": "broken clouds",
											"icon": "04n"
										}
									],
									"clouds": {
										"all": 82
									},
									"wind": {
										"speed": 2.52,
										"deg": 284,
										"gust": 2.5
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-03 18:00:00"
								},
								{
									"dt": 1712178000,
									"main": {
										"temp": 24.23,
										"feels_like": 24.2,
										"temp_min": 24.23,
										"temp_max": 24.23,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 57,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 6
									},
									"wind": {
										"speed": 2.97,
										"deg": 262,
										"gust": 3.19
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-03 21:00:00"
								},
								{
									"dt": 1712188800,
									"main": {
										"temp": 23.75,
										"feels_like": 23.72,
										"temp_min": 23.75,
										"temp_max": 23.75,
										"pressure": 1011,
										"sea_level": 1011,
										"grnd_level": 1011,
										"humidity": 59,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 6
									},
									"wind": {
										"speed": 3.97,
										"deg": 297,
										"gust": 5.28
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-04 00:00:00"
								},
								{
									"dt": 1712199600,
									"main": {
										"temp": 23.5,
										"feels_like": 23.55,
										"temp_min": 23.5,
										"temp_max": 23.5,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1012,
										"humidity": 63,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 802,
											"main": "Clouds",
											"description": "scattered clouds",
											"icon": "03d"
										}
									],
									"clouds": {
										"all": 39
									},
									"wind": {
										"speed": 2.3,
										"deg": 312,
										"gust": 2.76
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-04 03:00:00"
								},
								{
									"dt": 1712210400,
									"main": {
										"temp": 25.12,
										"feels_like": 25.1,
										"temp_min": 25.12,
										"temp_max": 25.12,
										"pressure": 1014,
										"sea_level": 1014,
										"grnd_level": 1014,
										"humidity": 54,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 802,
											"main": "Clouds",
											"description": "scattered clouds",
											"icon": "03d"
										}
									],
									"clouds": {
										"all": 39
									},
									"wind": {
										"speed": 2.94,
										"deg": 266,
										"gust": 3.75
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-04 06:00:00"
								},
								{
									"dt": 1712221200,
									"main": {
										"temp": 25.84,
										"feels_like": 25.81,
										"temp_min": 25.84,
										"temp_max": 25.84,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 51,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 803,
											"main": "Clouds",
											"description": "broken clouds",
											"icon": "04d"
										}
									],
									"clouds": {
										"all": 79
									},
									"wind": {
										"speed": 4.99,
										"deg": 282,
										"gust": 6.39
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-04 09:00:00"
								},
								{
									"dt": 1712232000,
									"main": {
										"temp": 25.49,
										"feels_like": 25.61,
										"temp_min": 25.49,
										"temp_max": 25.49,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 58,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 802,
											"main": "Clouds",
											"description": "scattered clouds",
											"icon": "03d"
										}
									],
									"clouds": {
										"all": 40
									},
									"wind": {
										"speed": 5.22,
										"deg": 276,
										"gust": 6.51
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-04 12:00:00"
								},
								{
									"dt": 1712242800,
									"main": {
										"temp": 24.64,
										"feels_like": 24.86,
										"temp_min": 24.64,
										"temp_max": 24.64,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 65,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 5.1,
										"deg": 267,
										"gust": 6.77
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-04 15:00:00"
								},
								{
									"dt": 1712253600,
									"main": {
										"temp": 24.09,
										"feels_like": 24.33,
										"temp_min": 24.09,
										"temp_max": 24.09,
										"pressure": 1014,
										"sea_level": 1014,
										"grnd_level": 1013,
										"humidity": 68,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 4.44,
										"deg": 244,
										"gust": 5.84
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-04 18:00:00"
								},
								{
									"dt": 1712264400,
									"main": {
										"temp": 23.6,
										"feels_like": 23.82,
										"temp_min": 23.6,
										"temp_max": 23.6,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1013,
										"humidity": 69,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 4.47,
										"deg": 231,
										"gust": 5.95
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-04 21:00:00"
								},
								{
									"dt": 1712275200,
									"main": {
										"temp": 23.18,
										"feels_like": 23.3,
										"temp_min": 23.18,
										"temp_max": 23.18,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1012,
										"humidity": 67,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01n"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 3.96,
										"deg": 227,
										"gust": 4.82
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "n"
									},
									"dt_txt": "2024-04-05 00:00:00"
								},
								{
									"dt": 1712286000,
									"main": {
										"temp": 23.1,
										"feels_like": 23.19,
										"temp_min": 23.1,
										"temp_max": 23.1,
										"pressure": 1014,
										"sea_level": 1014,
										"grnd_level": 1013,
										"humidity": 66,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 3.23,
										"deg": 226,
										"gust": 3.87
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-05 03:00:00"
								},
								{
									"dt": 1712296800,
									"main": {
										"temp": 25.1,
										"feels_like": 25.05,
										"temp_min": 25.1,
										"temp_max": 25.1,
										"pressure": 1015,
										"sea_level": 1015,
										"grnd_level": 1014,
										"humidity": 53,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 3.16,
										"deg": 255,
										"gust": 3.7
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-05 06:00:00"
								},
								{
									"dt": 1712307600,
									"main": {
										"temp": 25.88,
										"feels_like": 25.83,
										"temp_min": 25.88,
										"temp_max": 25.88,
										"pressure": 1013,
										"sea_level": 1013,
										"grnd_level": 1013,
										"humidity": 50,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 4.53,
										"deg": 272,
										"gust": 5.23
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-05 09:00:00"
								},
								{
									"dt": 1712318400,
									"main": {
										"temp": 25.71,
										"feels_like": 25.72,
										"temp_min": 25.71,
										"temp_max": 25.71,
										"pressure": 1012,
										"sea_level": 1012,
										"grnd_level": 1011,
										"humidity": 53,
										"temp_kf": 0
									},
									"weather": [
										{
											"id": 800,
											"main": "Clear",
											"description": "clear sky",
											"icon": "01d"
										}
									],
									"clouds": {
										"all": 0
									},
									"wind": {
										"speed": 4.79,
										"deg": 268,
										"gust": 5.36
									},
									"visibility": 10000,
									"pop": 0,
									"sys": {
										"pod": "d"
									},
									"dt_txt": "2024-04-05 12:00:00"
								}
							],
							"city": {
								"id": 292223,
								"name": "Dubai",
								"coord": {
									"lat": 25.2582,
									"lon": 55.3047
								},
								"country": "AE",
								"population": 1137347,
								"timezone": 14400,
								"sunrise": 1711851059,
								"sunset": 1711895669
							}
						}
					}),
				});
			},
		);

		// Mocking getWeatherByCity API call for forecast data
		// await page.route(
		// 	'**/data/2.5/forecast?q=Copenhagen,DK*&appid=*',
		// 	(route) => {
		// 		route.fulfill({
		// 			status: 200,
		// 			contentType: 'application/json',
		// 			body: JSON.stringify({
		// 				cod: '200',
		// 				message: 0,
		// 				cnt: 40,
		// 				list: [
		// 					{
		// 						dt: 1605198000,
		// 						main: {
		// 							temp: 280.15,
		// 							feels_like: 277.75,
		// 							temp_min: 279.15,
		// 							temp_max: 281.15,
		// 							pressure: 1021,
		// 							sea_level: 1021,
		// 							grnd_level: 1016,
		// 							humidity: 81,
		// 							temp_kf: 1,
		// 						},
		// 						weather: [
		// 							{
		// 								id: 500,
		// 								main: 'Rain',
		// 								description: 'light rain',
		// 								icon: '10d',
		// 							},
		// 						],
		// 						clouds: { all: 100 },
		// 						wind: { speed: 3.6, deg: 356, gust: 7.2 },
		// 						visibility: 10000,
		// 						pop: 0.48,
		// 						sys: { pod: 'd' },
		// 						dt_txt: '2020-11-12 15:00:00',
		// 					},
		// 				],
		// 				city: {
		// 					id: 2618425,
		// 					name: 'Copenhagen',
		// 					coord: { lat: 55.6761, lon: 12.5683 },
		// 					country: 'DK',
		// 					population: 615993,
		// 					timezone: 3600,
		// 					sunrise: 1605168023,
		// 					sunset: 1605196501,
		// 				},
		// 			}),
		// 		});
		// 	},
		// );
	});

	test.afterEach(async ({ page }) => {
		// Example: Clearing local storage and cookies
		await page.evaluate(() => localStorage.clear());
		await page.context().clearCookies();
		// Add any other cleanup steps necessary for your tests
	});

	test('End-to-end: should allow the user to search for a city and display weather information', async ({
		page,
	}) => {
		page.on('console', (message) => {
			console.log(`Page log: ${message.text()}`);
		});
		await page.goto('http://localhost:3000/'); // Adjust if your Search component is on a different route

		// Just before the failing line
		await page.fill('input[role="combobox"]', 'Copenhagen', {
			timeout: 2000,
		});

		await page.waitForResponse(
			(response) =>
				response
					.url()
					.includes(
						'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
					) && response.status() === 200,
			{ timeout: 2000 },
		);

		// Wait for the options to appear. This selector might need adjustment based on your actual implementation.
		await page.waitForSelector('text=Copenhagen, DK', { timeout: 2000 }); // Adjust to match an option's text

		// Click on the specific option. You might need to adjust this to fit how your options are structured.
		// await page.locator('text=Copenhagen, DK').first.waitFor({ state: "attached", timeout: 5000 });
		// await page.click('text=Copenhagen, DK', { timeout: 2000 });
		// const renderResult = render(<App />);
		await page
			.getByRole('option', { name: 'Copenhagen, DK' })
			.click({ force: true });

		// await page.screenshot({ path: 'debug-screenshot.png' });
		// await page.waitForResponse(
		// 	(response) =>
		// 		response
		// 			.url()
		// 			.includes(
		// 				'http://localhost:8080/weather',
		// 			) && response.status() === 200,
		// 	{ timeout: 2000 },
		// );
		// await page.waitForResponse(
		// 	(response) =>
		// 		response
		// 			.url()
		// 			.includes(
		// 				'http://localhost:8080/forecast',
		// 			) && response.status() === 200,
		// 	{ timeout: 2000 },
		// );
		// Wait for UI to update
		// await page.waitForTimeout(500);
		await page.waitForSelector('text=AIR CONDITIONS', { timeout: 2000 }); // Adjust to match an option's text
		// Verify something changes in the UI to reflect the search.
		// For instance, check if a specific element that indicates successful search is present.
		// This is an example and might need adjustment to match your application's behavior.
		// console.log(await page.content());
		// await page.screenshot({ path: 'debug-screenshot.png' });
		await expect(page.locator('text="AIR CONDITIONS"')).toHaveCount(1); // Adjust the expected text to match your app
	});
});
