import Layout from 'layout';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from 'context/ContextProvider';

function App() {
	return (
		<ContextProvider>
			<Router>
				<Layout />
			</Router>
		</ContextProvider>
	);
}

export default App;
