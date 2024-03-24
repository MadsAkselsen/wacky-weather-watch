import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import WeatherIcon from '@mui/icons-material/WbSunny';
import CitiesIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';

// LinkEntry component
interface LinkEntryProps {
  href: string;
  icon: React.ReactElement;
  text: string;
}

export default function LinkEntry({ href, icon, text }: LinkEntryProps) {
    return (
      <Link href={href} color="black" underline="none">
        <ListItemButton dense={true} sx={{ flexDirection: 'column' }}>
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    );
  }