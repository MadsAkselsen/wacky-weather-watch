import List from '@mui/material/List';
import WeatherIcon from '@mui/icons-material/WbSunny';
import CitiesIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkEntry from './LinkEntry';

export default function NavList() {
	return (
		<List
			sx={{ width: '100%', bgcolor: 'background.paper' }}
			component="nav"
		>
			<LinkEntry href="/" icon={<WeatherIcon />} text="Weather" />
			<LinkEntry href="/cities" icon={<CitiesIcon />} text="Cities" />
			<LinkEntry href="/map" icon={<MapIcon />} text="Map" />
			<LinkEntry
				href="/settings"
				icon={<SettingsIcon />}
				text="Settings"
			/>
		</List>
	);
}
