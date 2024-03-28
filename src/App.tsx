import Layout from 'layout/layout';
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
