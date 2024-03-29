import React from 'react';
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';
import OptionToggle from 'components/Settings/OptionToggle';
import { Container, Paper, Box } from '@mui/material';
import { useThemeContext } from 'context/themeContext';
import { useSettingsContext } from 'context/SettingsContext';

const Settings: React.FC = () => {
  const { theme } = useThemeContext();
  const {
    temperatureUnit,
    setTemperatureUnit,
    windSpeedUnit,
    setWindSpeedUnit,
    useMockData,
    setUseMockData,
  } = useSettingsContext();


  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        margin: 0,
        width: { xs: '100%' },
        paddingTop: 2,
        paddingLeft: 2,
      }}
    >
      <Paper
        sx={{
          borderRadius: 3,
          padding: 2,
          bgcolor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
          <ToggleThemeButton />
        </Box>
        
        <OptionToggle
          title="TEMPERATURE"
          options={['Celsius', 'Fahrenheit']}
          onOptionChange={(newOption) => setTemperatureUnit(newOption)}
          currentValue={temperatureUnit}
        />
        <OptionToggle
          title="WIND SPEED"
          options={['km/h', 'm/s', 'Knots']}
          onOptionChange={(newOption) => setWindSpeedUnit(newOption)}
          currentValue={windSpeedUnit}
        />
        <OptionToggle
          title="USE MOCK DATA"
          options={['Yes', 'No']}
          onOptionChange={(newOption) => setUseMockData(newOption === 'Yes')}
          currentValue={useMockData ? 'Yes' : 'No'}
        />
      </Paper>
    </Container>
  );
};

export default Settings;
