import { WeatherContextProvider } from './weatherContext';
import { ThemeContextProvider } from './themeContext';
import { UIContextProvider } from './uiContextProvider';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<WeatherContextProvider>
			<ThemeContextProvider>
				<UIContextProvider>{children}</UIContextProvider>
			</ThemeContextProvider>
		</WeatherContextProvider>
	);
};

export default ContextProvider;
