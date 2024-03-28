import List from '@mui/material/List';
import WeatherIcon from '@mui/icons-material/WbSunny';
import CitiesIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkEntry from './LinkEntry';
import { Box, Paper } from '@mui/material';
import { useUIContext } from 'context/uiContextProvider';

export default function NavList() {
    const { setMobileOpen } = useUIContext();

    const handleNavItemClick = () => {
        setMobileOpen(false);
    };

    return (
        <Paper sx={{
            width: '100%',
            // Responsive height
            height: { xs: '100vh', md: '96vh' }, // 100vh for mobile and tablet, auto for desktop
            borderRadius: {xs: '0', md: '14px'},
            '.MuiList-root': {
                // Responsive padding and font size
                '& .MuiListItem-root': {
                    paddingLeft: { xs: 2, md: 'initial' }, // Larger padding for mobile and tablet
                    paddingRight: { xs: 2, md: 'initial' }, // Larger padding for mobile and tablet
                },
                '& .MuiListItemIcon-root': {
                    minWidth: { xs: 'auto', md: 'initial' }, // Auto for mobile and tablet, default for desktop
                    marginRight: { xs: 1, md: 'initial' }, // Space between icon and text for mobile and tablet
                    '& .MuiSvgIcon-root': { // Target the icons specifically
                        fontSize: { xs: '2rem', md: '1.25rem' }, // Bigger icons for mobile and tablet
                    },
                },
                '& .MuiListItemText-primary': {
                    fontSize: { xs: '1.25rem', md: 'initial' }, // Larger text for mobile and tablet
                },
            },
        }}>
            <List component="nav" onClick={handleNavItemClick}>
                <LinkEntry href="/" icon={<WeatherIcon />} text="Weather" />
                <LinkEntry href="/cities" icon={<CitiesIcon />} text="Cities" />
                <LinkEntry href="/map" icon={<MapIcon />} text="Map" />
                <LinkEntry href="/settings" icon={<SettingsIcon />} text="Settings" />
            </List>
        </Paper>
    );
}
