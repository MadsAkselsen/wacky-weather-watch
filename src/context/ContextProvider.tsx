import { WeatherContextProvider } from './weatherContext';
import { ThemeContextProvider } from './themeContext';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<WeatherContextProvider>
			<ThemeContextProvider>
							{children}
			</ThemeContextProvider>
		</WeatherContextProvider>
	);
};

export default ContextProvider;
