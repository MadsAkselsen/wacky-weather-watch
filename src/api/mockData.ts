import { WeatherAndForecastData } from "types/types";

export const WeatherAndForecastMockData: WeatherAndForecastData = {
    "weatherData": {
        "coord": {
            "lon": 55.4033,
            "lat": 25.3573
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
            "temp": 29.16,
            "feels_like": 29.28,
            "temp_min": 29.16,
            "temp_max": 29.99,
            "pressure": 1010,
            "humidity": 45
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.63,
            "deg": 20
        },
        "clouds": {
            "all": 0
        },
        "dt": 1711293526,
        "sys": {
            "type": 1,
            "id": 7545,
            "country": "AE",
            "sunrise": 1711246678,
            "sunset": 1711290667
        },
        "timezone": 14400,
        "id": 292672,
        "name": "Sharjah city",
        "cod": 200
    },
    "forecastData": {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1711303200,
                "main": {
                    "temp": 28.52,
                    "feels_like": 28.95,
                    "temp_min": 27.23,
                    "temp_max": 28.52,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
                    "humidity": 49,
                    "temp_kf": 1.29
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
                    "speed": 6.96,
                    "deg": 45,
                    "gust": 10.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-24 18:00:00"
            },
            {
                "dt": 1711314000,
                "main": {
                    "temp": 27.88,
                    "feels_like": 28.32,
                    "temp_min": 27.24,
                    "temp_max": 27.88,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1009,
                    "humidity": 50,
                    "temp_kf": 0.64
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
                    "all": 53
                },
                "wind": {
                    "speed": 4.92,
                    "deg": 93,
                    "gust": 6.68
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-24 21:00:00"
            },
            {
                "dt": 1711324800,
                "main": {
                    "temp": 27.14,
                    "feels_like": 27.49,
                    "temp_min": 27.14,
                    "temp_max": 27.14,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1007,
                    "humidity": 49,
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
                    "all": 80
                },
                "wind": {
                    "speed": 7.54,
                    "deg": 120,
                    "gust": 11.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-25 00:00:00"
            },
            {
                "dt": 1711335600,
                "main": {
                    "temp": 26.74,
                    "feels_like": 27.29,
                    "temp_min": 26.74,
                    "temp_max": 26.74,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
                    "humidity": 52,
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
                    "speed": 3.29,
                    "deg": 103,
                    "gust": 5
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-25 03:00:00"
            },
            {
                "dt": 1711346400,
                "main": {
                    "temp": 28.58,
                    "feels_like": 29.02,
                    "temp_min": 28.58,
                    "temp_max": 28.58,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1012,
                    "humidity": 49,
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
                    "all": 98
                },
                "wind": {
                    "speed": 3.17,
                    "deg": 216,
                    "gust": 4.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-25 06:00:00"
            },
            {
                "dt": 1711357200,
                "main": {
                    "temp": 28.46,
                    "feels_like": 28.98,
                    "temp_min": 28.46,
                    "temp_max": 28.46,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 50,
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
                    "speed": 2.27,
                    "deg": 15,
                    "gust": 3.91
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-25 09:00:00"
            },
            {
                "dt": 1711368000,
                "main": {
                    "temp": 28.75,
                    "feels_like": 29.23,
                    "temp_min": 28.75,
                    "temp_max": 28.75,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1009,
                    "humidity": 49,
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
                    "speed": 1,
                    "deg": 358,
                    "gust": 6.12
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-25 12:00:00"
            },
            {
                "dt": 1711378800,
                "main": {
                    "temp": 27.83,
                    "feels_like": 28.71,
                    "temp_min": 27.83,
                    "temp_max": 27.83,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
                    "humidity": 55,
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
                    "speed": 3.03,
                    "deg": 357,
                    "gust": 3.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-25 15:00:00"
            },
            {
                "dt": 1711389600,
                "main": {
                    "temp": 26.07,
                    "feels_like": 26.07,
                    "temp_min": 26.07,
                    "temp_max": 26.07,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
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
                    "speed": 5.93,
                    "deg": 5,
                    "gust": 7.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-25 18:00:00"
            },
            {
                "dt": 1711400400,
                "main": {
                    "temp": 25.53,
                    "feels_like": 25.91,
                    "temp_min": 25.53,
                    "temp_max": 25.53,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1009,
                    "humidity": 68,
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
                    "speed": 5.93,
                    "deg": 19,
                    "gust": 7.15
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-25 21:00:00"
            },
            {
                "dt": 1711411200,
                "main": {
                    "temp": 25.14,
                    "feels_like": 25.54,
                    "temp_min": 25.14,
                    "temp_max": 25.14,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1009,
                    "humidity": 70,
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
                    "speed": 5.88,
                    "deg": 357,
                    "gust": 8.17
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-26 00:00:00"
            },
            {
                "dt": 1711422000,
                "main": {
                    "temp": 24.56,
                    "feels_like": 25.03,
                    "temp_min": 24.56,
                    "temp_max": 24.56,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 75,
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
                    "speed": 5.57,
                    "deg": 322,
                    "gust": 7.29
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-26 03:00:00"
            },
            {
                "dt": 1711432800,
                "main": {
                    "temp": 24.8,
                    "feels_like": 25.19,
                    "temp_min": 24.8,
                    "temp_max": 24.8,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1013,
                    "humidity": 71,
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
                    "speed": 5.13,
                    "deg": 292,
                    "gust": 6.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-26 06:00:00"
            },
            {
                "dt": 1711443600,
                "main": {
                    "temp": 25.52,
                    "feels_like": 25.56,
                    "temp_min": 25.52,
                    "temp_max": 25.52,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1012,
                    "humidity": 55,
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
                    "speed": 5.67,
                    "deg": 288,
                    "gust": 6.29
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-26 09:00:00"
            },
            {
                "dt": 1711454400,
                "main": {
                    "temp": 24.22,
                    "feels_like": 24.24,
                    "temp_min": 24.22,
                    "temp_max": 24.22,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1012,
                    "humidity": 59,
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
                    "speed": 6.61,
                    "deg": 264,
                    "gust": 7.99
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-26 12:00:00"
            },
            {
                "dt": 1711465200,
                "main": {
                    "temp": 23.74,
                    "feels_like": 23.66,
                    "temp_min": 23.74,
                    "temp_max": 23.74,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1013,
                    "humidity": 57,
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
                    "speed": 6.88,
                    "deg": 270,
                    "gust": 7.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-26 15:00:00"
            },
            {
                "dt": 1711476000,
                "main": {
                    "temp": 23.23,
                    "feels_like": 23.15,
                    "temp_min": 23.23,
                    "temp_max": 23.23,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
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
                    "all": 96
                },
                "wind": {
                    "speed": 6.85,
                    "deg": 281,
                    "gust": 7.69
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-26 18:00:00"
            },
            {
                "dt": 1711486800,
                "main": {
                    "temp": 22.73,
                    "feels_like": 22.68,
                    "temp_min": 22.73,
                    "temp_max": 22.73,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
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
                    "speed": 8.09,
                    "deg": 276,
                    "gust": 9.06
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-26 21:00:00"
            },
            {
                "dt": 1711497600,
                "main": {
                    "temp": 22.4,
                    "feels_like": 22.29,
                    "temp_min": 22.4,
                    "temp_max": 22.4,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
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
                    "all": 96
                },
                "wind": {
                    "speed": 6.25,
                    "deg": 281,
                    "gust": 7.41
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-27 00:00:00"
            },
            {
                "dt": 1711508400,
                "main": {
                    "temp": 22.53,
                    "feels_like": 22.35,
                    "temp_min": 22.53,
                    "temp_max": 22.53,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1015,
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
                    "speed": 6.81,
                    "deg": 288,
                    "gust": 7.72
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-27 03:00:00"
            },
            {
                "dt": 1711519200,
                "main": {
                    "temp": 23.49,
                    "feels_like": 23.23,
                    "temp_min": 23.49,
                    "temp_max": 23.49,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1016,
                    "humidity": 51,
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
                    "speed": 7.85,
                    "deg": 271,
                    "gust": 8.34
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-27 06:00:00"
            },
            {
                "dt": 1711530000,
                "main": {
                    "temp": 24.2,
                    "feels_like": 23.9,
                    "temp_min": 24.2,
                    "temp_max": 24.2,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1015,
                    "humidity": 47,
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
                    "speed": 9.01,
                    "deg": 270,
                    "gust": 9.29
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-27 09:00:00"
            },
            {
                "dt": 1711540800,
                "main": {
                    "temp": 23.79,
                    "feels_like": 23.45,
                    "temp_min": 23.79,
                    "temp_max": 23.79,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
                    "humidity": 47,
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
                    "all": 67
                },
                "wind": {
                    "speed": 9.36,
                    "deg": 269,
                    "gust": 9.73
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-27 12:00:00"
            },
            {
                "dt": 1711551600,
                "main": {
                    "temp": 22.93,
                    "feels_like": 22.61,
                    "temp_min": 22.93,
                    "temp_max": 22.93,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1014,
                    "humidity": 51,
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
                    "speed": 9.16,
                    "deg": 272,
                    "gust": 9.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-27 15:00:00"
            },
            {
                "dt": 1711562400,
                "main": {
                    "temp": 22.64,
                    "feels_like": 22.34,
                    "temp_min": 22.64,
                    "temp_max": 22.64,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1015,
                    "humidity": 53,
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
                    "speed": 7.21,
                    "deg": 261,
                    "gust": 7.87
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-27 18:00:00"
            },
            {
                "dt": 1711573200,
                "main": {
                    "temp": 22.33,
                    "feels_like": 22.08,
                    "temp_min": 22.33,
                    "temp_max": 22.33,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
                    "humidity": 56,
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
                    "speed": 6.97,
                    "deg": 265,
                    "gust": 8.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-27 21:00:00"
            },
            {
                "dt": 1711584000,
                "main": {
                    "temp": 22.1,
                    "feels_like": 21.88,
                    "temp_min": 22.1,
                    "temp_max": 22.1,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1012,
                    "humidity": 58,
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
                    "speed": 6.05,
                    "deg": 265,
                    "gust": 7.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-28 00:00:00"
            },
            {
                "dt": 1711594800,
                "main": {
                    "temp": 22.42,
                    "feels_like": 22.26,
                    "temp_min": 22.42,
                    "temp_max": 22.42,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1013,
                    "humidity": 59,
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
                    "speed": 6.29,
                    "deg": 263,
                    "gust": 7.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-28 03:00:00"
            },
            {
                "dt": 1711605600,
                "main": {
                    "temp": 24,
                    "feels_like": 23.92,
                    "temp_min": 24,
                    "temp_max": 24,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1014,
                    "humidity": 56,
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
                    "speed": 7.44,
                    "deg": 261,
                    "gust": 7.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-28 06:00:00"
            },
            {
                "dt": 1711616400,
                "main": {
                    "temp": 24.73,
                    "feels_like": 24.72,
                    "temp_min": 24.73,
                    "temp_max": 24.73,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1013,
                    "humidity": 56,
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
                    "all": 2
                },
                "wind": {
                    "speed": 8.93,
                    "deg": 268,
                    "gust": 10.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-28 09:00:00"
            },
            {
                "dt": 1711627200,
                "main": {
                    "temp": 24.56,
                    "feels_like": 24.66,
                    "temp_min": 24.56,
                    "temp_max": 24.56,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 61,
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
                    "all": 3
                },
                "wind": {
                    "speed": 9.9,
                    "deg": 280,
                    "gust": 12.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-28 12:00:00"
            },
            {
                "dt": 1711638000,
                "main": {
                    "temp": 24.16,
                    "feels_like": 24.15,
                    "temp_min": 24.16,
                    "temp_max": 24.16,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 58,
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
                    "speed": 8.44,
                    "deg": 278,
                    "gust": 13.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-28 15:00:00"
            },
            {
                "dt": 1711648800,
                "main": {
                    "temp": 23.97,
                    "feels_like": 23.99,
                    "temp_min": 23.97,
                    "temp_max": 23.97,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1011,
                    "humidity": 60,
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
                    "all": 10
                },
                "wind": {
                    "speed": 8.19,
                    "deg": 265,
                    "gust": 13.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-28 18:00:00"
            },
            {
                "dt": 1711659600,
                "main": {
                    "temp": 23.47,
                    "feels_like": 23.52,
                    "temp_min": 23.47,
                    "temp_max": 23.47,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 63,
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
                    "speed": 8.24,
                    "deg": 265,
                    "gust": 12.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-28 21:00:00"
            },
            {
                "dt": 1711670400,
                "main": {
                    "temp": 23.22,
                    "feels_like": 23.22,
                    "temp_min": 23.22,
                    "temp_max": 23.22,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1009,
                    "humidity": 62,
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
                    "speed": 9.06,
                    "deg": 269,
                    "gust": 12.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-29 00:00:00"
            },
            {
                "dt": 1711681200,
                "main": {
                    "temp": 23.07,
                    "feels_like": 23,
                    "temp_min": 23.07,
                    "temp_max": 23.07,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
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
                    "all": 1
                },
                "wind": {
                    "speed": 9.09,
                    "deg": 267,
                    "gust": 11.09
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-29 03:00:00"
            },
            {
                "dt": 1711692000,
                "main": {
                    "temp": 24.29,
                    "feels_like": 24.21,
                    "temp_min": 24.29,
                    "temp_max": 24.29,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1012,
                    "humidity": 55,
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
                    "all": 10
                },
                "wind": {
                    "speed": 7.25,
                    "deg": 274,
                    "gust": 7.96
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-29 06:00:00"
            },
            {
                "dt": 1711702800,
                "main": {
                    "temp": 24.75,
                    "feels_like": 24.77,
                    "temp_min": 24.75,
                    "temp_max": 24.75,
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
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 8.69,
                    "deg": 272,
                    "gust": 9.07
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-29 09:00:00"
            },
            {
                "dt": 1711713600,
                "main": {
                    "temp": 24.32,
                    "feels_like": 24.32,
                    "temp_min": 24.32,
                    "temp_max": 24.32,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1010,
                    "humidity": 58,
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
                    "all": 2
                },
                "wind": {
                    "speed": 8.47,
                    "deg": 271,
                    "gust": 8.63
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-03-29 12:00:00"
            },
            {
                "dt": 1711724400,
                "main": {
                    "temp": 23.45,
                    "feels_like": 23.44,
                    "temp_min": 23.45,
                    "temp_max": 23.45,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1011,
                    "humidity": 61,
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
                    "speed": 7.03,
                    "deg": 276,
                    "gust": 7.36
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-03-29 15:00:00"
            }
        ],
        "city": {
            "id": 292672,
            "name": "Sharjah city",
            "coord": {
                "lat": 25.3573,
                "lon": 55.4033
            },
            "country": "AE",
            "population": 543733,
            "timezone": 14400,
            "sunrise": 1711246678,
            "sunset": 1711290667
        }
    }
}

export const GeoAPIMockData = {
    "data": [
        {
            "id": 25261,
            "wikiDataId": "Q1748",
            "type": "CITY",
            "city": "Copenhagen",
            "name": "Copenhagen",
            "country": "Denmark",
            "countryCode": "DK",
            "region": "Capital Region of Denmark",
            "regionCode": "84",
            "regionWdId": "Q26073",
            "latitude": 55.676111111,
            "longitude": 12.568888888,
            "population": 644431
        },
        {
            "id": 3100748,
            "wikiDataId": "Q504125",
            "type": "ADM2",
            "city": "Copenhagen Municipality",
            "name": "Copenhagen Municipality",
            "country": "Denmark",
            "countryCode": "DK",
            "region": "Capital Region of Denmark",
            "regionCode": "84",
            "regionWdId": "Q26073",
            "latitude": 55.675277777,
            "longitude": 12.570277777,
            "population": 633021
        }
    ],
    "metadata": {
        "currentOffset": 0,
        "totalCount": 2
    }
}