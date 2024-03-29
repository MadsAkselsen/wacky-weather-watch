import React, {
	useContext,
	useState,
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react';

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

// Helper function to load settings from localStorage
const loadSettings = (): SettingsState => {
	const savedSettings = localStorage.getItem('settings');
	if (savedSettings) {
		return JSON.parse(savedSettings);
	}
	return defaultSettingsState;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const initialState = loadSettings(); // Load initial state from localStorage or fallback to default
	const [temperatureUnit, setTemperatureUnit] = useState(
		initialState.temperatureUnit,
	);
	const [windSpeedUnit, setWindSpeedUnit] = useState(
		initialState.windSpeedUnit,
	);
	const [useMockData, setUseMockData] = useState(initialState.useMockData);

	// Effect to save settings to localStorage on change
	useEffect(() => {
		const currentSettings = { temperatureUnit, windSpeedUnit, useMockData };
		localStorage.setItem('settings', JSON.stringify(currentSettings));
	}, [temperatureUnit, windSpeedUnit, useMockData]);

	return (
		<SettingsContext.Provider
			value={{
				temperatureUnit,
				setTemperatureUnit,
				windSpeedUnit,
				setWindSpeedUnit,
				useMockData,
				setUseMockData,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};

export const useSettingsContext = (): SettingsContextType => {
	const context = useContext(SettingsContext);
	if (!context) {
		throw new Error(
			'useSettingsContext must be used within a SettingsProvider',
		);
	}
	return context;
};
