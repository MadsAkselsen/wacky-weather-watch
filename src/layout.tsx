import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Box,
	useTheme,
	useMediaQuery,
	Grid,
	Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Cities from 'pages/Cities';
import WeatherInfo from 'pages/WeatherInfo';
import { Routes, Route } from 'react-router-dom';
import NavList from 'components/Navigation/NavList';
import Search from 'components/Search/Search';
import Map from 'pages/map';
import Settings from 'pages/Settings';
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';

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
							<Box
								display={'flex'}
								alignItems={'center'}
								flexDirection={'row'}
								justifyContent={'space-between'}
								width={'100%'}
								marginLeft={2}
							>
								<Search />
								<Box display={{ xs: 'none', sm: 'block' }}>
									<ToggleThemeButton />
								</Box>
							</Box>
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
					{/* Ensure content can scroll */}
					<Container maxWidth="xl" disableGutters>
						<Grid
							container
							spacing={2}
							sx={{ width: '100%', margin: 0 }}
							display={{ xs: 'none', md: 'flex' }}
						>
							<Grid item xs={12} md={7} lg={8}>
								<Search />
							</Grid>
							<Grid item xs={12} md={5} lg={4}>
								<Box marginRight={2}>
									<ToggleThemeButton />
								</Box>
							</Grid>
						</Grid>
					</Container>

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
