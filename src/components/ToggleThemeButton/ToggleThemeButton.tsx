import React from 'react';
import { useThemeContext } from 'context/themeContext';
import { Switch, FormGroup, FormControlLabel, Stack } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
        label={
          <Stack direction="row" spacing={1} alignItems="center">
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </Stack>
        }
        labelPlacement="start"
      />
    </FormGroup>
  );
};

export default ToggleThemeButton;
