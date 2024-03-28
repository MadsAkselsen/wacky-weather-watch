import { Box, useTheme, useMediaQuery, Grid, Container } from '@mui/material';
import Cities from 'pages/Cities';
import WeatherInfo from 'pages/WeatherInfo';
import { Routes, Route } from 'react-router-dom';
import NavList from 'components/Navigation/NavList';
import Search from 'components/Search/Search';
import Map from 'pages/map';
import Settings from 'pages/Settings';
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';
import CurrentPositionBtn from 'components/CurrentPositionBtn/CurrentPositionBtn';
import AppBarCustom from 'components/AppBar/AppBar';
import NavDrawer from 'components/NavDrawer/NavDrawer';

function Layout() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{isMobile && (
				<>
					<AppBarCustom />
					<NavDrawer />
				</>
			)}

			<Box
				sx={{
					display: 'flex',
					height: isMobile ? 'auto' : '100vh', // Auto height for mobile, 100vh for desktop
					overflow: isMobile ? 'auto' : 'hidden', // Auto overflow for mobile, hidden for desktop
				}}
			>
				
				{/* DESKTOP NAVIGATION */}
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
								<Box
									marginRight={2}
									display={'flex'}
									justifyContent={'space-between'}
								>
									<CurrentPositionBtn />
									<ToggleThemeButton />
								</Box>
							</Grid>
						</Grid>
					</Container>

					{/* MAIN CONTENT */}
					<Box
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
