
import Menu from 'components/Menu/Menu';
import { WeatherContextProvider } from 'context/weatherContext';
import ResponsiveLayout from 'layout';
import Cities from 'pages/Cities';
import Settings from 'pages/Settings';
import WeatherInfo from 'pages/WeatherInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
