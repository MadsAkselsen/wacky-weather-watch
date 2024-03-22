import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface WeatherData {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: {
        description: string;
    }[];
}

interface WeatherContextType {
    state: WeatherData|null;
    setState: Dispatch<SetStateAction<WeatherData|null>>;
}

const initialState: WeatherData|null = null;

const WeatherContext = React.createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, setState] = useState<WeatherData|null>(initialState);

    return (
        <WeatherContext.Provider value={{ state, setState }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useAppContext = (): WeatherContextType => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
