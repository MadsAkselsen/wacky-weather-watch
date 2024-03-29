import { WeatherContextProvider } from './weatherContext';
import { ThemeContextProvider } from './themeContext';
import { UIContextProvider } from './uiContextProvider';
import { SettingsProvider } from './SettingsContext';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<WeatherContextProvider>
			<ThemeContextProvider>
				<UIContextProvider>
					<SettingsProvider>{children}</SettingsProvider>
				</UIContextProvider>
			</ThemeContextProvider>
		</WeatherContextProvider>
	);
};

export default ContextProvider;
