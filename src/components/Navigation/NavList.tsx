import List from '@mui/material/List';
import WeatherIcon from '@mui/icons-material/WbSunny';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkEntry from './LinkEntry';
import { Paper } from '@mui/material';
import { useUIContext } from 'context/uiContextProvider';

export default function NavList() {
    const { setMobileOpen } = useUIContext();

    const handleNavItemClick = () => {
        setMobileOpen(false);
    };

    return (
        <Paper sx={{
            width: '100%',
            height: { xs: '100vh', md: '96vh' },
            borderRadius: {xs: '0', md: '14px'},
            '.MuiList-root': {
                // Responsive padding and font size
                '& .MuiListItem-root': {
                    paddingLeft: { xs: 2, md: 'initial' },
                    paddingRight: { xs: 2, md: 'initial' },
                },
                '& .MuiListItemIcon-root': {
                    minWidth: { xs: 'auto', md: 'initial' },
                    marginRight: { xs: 1, md: 'initial' },
                    '& .MuiSvgIcon-root': {
                        fontSize: { xs: '2rem', md: '1.25rem' },
                    },
                },
                '& .MuiListItemText-primary': {
                    fontSize: { xs: '1.25rem', md: 'initial' },
                },
            },
        }}>
            <List component="nav" onClick={handleNavItemClick}>
                <LinkEntry href="/" icon={<WeatherIcon />} text="Weather" />
                {/* <LinkEntry href="/cities" icon={<CitiesIcon />} text="Cities" /> */}
                <LinkEntry href="/map" icon={<MapIcon />} text="Map" />
                <LinkEntry href="/settings" icon={<SettingsIcon />} text="Settings" />
            </List>
        </Paper>
    );
}
