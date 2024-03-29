import React, { useContext, useState, Dispatch, SetStateAction } from 'react';
import { WeatherAndForecastData } from 'types/types';


export interface WeatherContextType {
    // API weather data
    weatherData: WeatherAndForecastData|null;
    setWeatherData: Dispatch<SetStateAction<WeatherAndForecastData|null>>;
    // Flag controlling use of mock data
    useMockData: boolean;
    setUseMockData: Dispatch<SetStateAction<boolean>>; 
}

const initialState: WeatherAndForecastData|null = null;

export const WeatherContext = React.createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherAndForecastData|null>(initialState);
    const [useMockData, setUseMockData] = useState<boolean>(false);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, useMockData, setUseMockData }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = (): WeatherContextType => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
