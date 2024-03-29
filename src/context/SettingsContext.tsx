import React, { useContext, useState, createContext, Dispatch, SetStateAction } from 'react';

interface SettingsState {
  temperatureUnit: string;
  windSpeedUnit: string;
  useMockData: boolean;
}

interface SettingsContextType extends SettingsState {
  setTemperatureUnit: Dispatch<SetStateAction<string>>;
  setWindSpeedUnit: Dispatch<SetStateAction<string>>;
  setUseMockData: Dispatch<SetStateAction<boolean>>;
}

const defaultSettingsState: SettingsState = {
  temperatureUnit: 'Celsius',
  windSpeedUnit: 'km/h',
  useMockData: false,
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState(defaultSettingsState.temperatureUnit);
  const [windSpeedUnit, setWindSpeedUnit] = useState(defaultSettingsState.windSpeedUnit);
  const [useMockData, setUseMockData] = useState(defaultSettingsState.useMockData);

  return (
    <SettingsContext.Provider value={{ temperatureUnit, setTemperatureUnit, windSpeedUnit, setWindSpeedUnit, useMockData, setUseMockData }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
};
