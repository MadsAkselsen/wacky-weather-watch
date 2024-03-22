import { Menu } from '@mui/material';
import { WeatherContextProvider } from 'context/weatherContext';
import Cities from 'pages/Cities';
import Settings from 'pages/Settings';
import WeatherInfo from 'pages/WeatherInfo';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <WeatherContextProvider>
        <Menu open />
        <Routes>
          <Route path="/" element={<WeatherInfo />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </WeatherContextProvider>
    </Router>
  );
}

export default App;
