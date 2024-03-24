import { WeatherContextProvider } from 'context/weatherContext';
import Layout from 'layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<WeatherContextProvider>
				<Layout />
			</WeatherContextProvider>
		</Router>
	);
}

export default App;
