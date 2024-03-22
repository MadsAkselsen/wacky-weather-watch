import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WeatherIcon from '@mui/icons-material/WbSunny';
import CitiesIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from '@mui/material/Link';

export default function NavigationButtons() {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{ width: '100%', bgcolor: 'background.paper' }}
			component="nav"
		>
			<Link href="/" color="black" underline="none">
				<ListItemButton
					dense={true}
					sx={{ flexDirection: 'column' }}
					onClick={handleClick}
				>
					<ListItemIcon sx={{ justifyContent: 'center' }}>
						<WeatherIcon />
					</ListItemIcon>
					<ListItemText primary="Weather" />
				</ListItemButton>
			</Link>
			<Link href="/cities" color="black" underline="none">
				<ListItemButton
					dense={true}
					sx={{ flexDirection: 'column' }}
					onClick={handleClick}
				>
					<ListItemIcon sx={{ justifyContent: 'center' }}>
						<CitiesIcon />
					</ListItemIcon>
					<ListItemText primary="Cities" />
				</ListItemButton>
			</Link>
			<Link href="/settings" color="black" underline="none">
				<ListItemButton
					onClick={handleClick}
					dense={true}
					sx={{ flexDirection: 'column' }}
				>
					<ListItemIcon sx={{ justifyContent: 'center' }}>
						<MapIcon />
					</ListItemIcon>
					<ListItemText primary="Map" />
				</ListItemButton>
			</Link>
			<Link href="/settings" color="black" underline="none">
				<ListItemButton
					onClick={handleClick}
					dense={true}
					sx={{ flexDirection: 'column' }}
				>
					<ListItemIcon sx={{ justifyContent: 'center' }}>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItemButton>
			</Link>
		</List>
	);
}
