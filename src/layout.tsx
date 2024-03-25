import React from 'react';
import {
	Grid,
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Box,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Cities from 'pages/Cities';
import WeatherInfo from 'pages/WeatherInfo';
import { Routes, Route } from 'react-router-dom';
import NavList from 'components/Navigation/NavList';
import Search from 'components/Search/Search';
import Map from 'pages/map';
import Settings from 'pages/Settings';
import { Link } from 'react-router-dom';

function Layout() {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			{isMobile && (
				<>
					<AppBar position="static" color="default">
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Search />
						</Toolbar>
					</AppBar>
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
					>
						<Box p={2}>
							<NavList />
						</Box>
					</Drawer>
				</>
			)}

			<Box
				sx={{
					display: 'flex',
					height: isMobile ? 'auto' : '100vh', // Auto height for mobile, 100vh for desktop
					overflow: isMobile ? 'auto' : 'hidden', // Auto overflow for mobile, hidden for desktop
				}}
			>
				{!isMobile && (
					<Box
						sx={{
							height: '95%',
							width: '80px',
						}}
						marginLeft={2}
						marginTop={2}
						marginBottom={2}
						boxSizing={'border-box'}
					>
						<NavList />
					</Box>
				)}
				<Box sx={{ flexGrow: 1, overflow: 'auto', maxHeight: '100vh' }}>
					{' '}
					{/* Ensure content can scroll */}
					<Box
						display={{ xs: 'none', md: 'block' }}
						marginLeft={2}
						marginTop={2}
					>
						<Search />
					</Box>
					<Box
						// p={3}
						padding={0}
						marginRight={2}
						marginBottom={2}
						
						sx={{
							overflow: 'auto',
						}}
					>
						<Routes>
							<Route path="/" element={<WeatherInfo />} />
							<Route path="/cities" element={<Cities />} />
							<Route path="/map" element={<Map />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Layout;
