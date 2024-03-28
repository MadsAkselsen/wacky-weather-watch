import React, { useContext, useState, Dispatch, SetStateAction } from 'react';
import { WeatherAndForecastData } from 'types/types';


export interface WeatherContextType {
    weatherData: WeatherAndForecastData|null;
    setWeatherData: Dispatch<SetStateAction<WeatherAndForecastData|null>>;
}

const initialState: WeatherAndForecastData|null = null;

export const WeatherContext = React.createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherAndForecastData|null>(initialState);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
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
