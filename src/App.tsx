import { WeatherContextProvider } from 'context/weatherContext';
import ResponsiveLayout from 'layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<WeatherContextProvider>
				<ResponsiveLayout />
			</WeatherContextProvider>
		</Router>
	);
}

export default App;
