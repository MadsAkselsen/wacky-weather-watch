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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column', // Stack children vertically
				height: '100vh', // Make this Box fill the entire viewport height
				overflow: 'hidden', // Prevent the Box itself from scrolling
			}}
		>
			{isMobile && (
				<>
					<AppBarCustom />
					<NavDrawer />
				</>
			)}

			<Box
				sx={{
					display: 'flex',
					flex: 1, // This Box will take up all available space
					overflow: 'auto', // Allow this Box to scroll
				}}
			>
				{/* DESKTOP NAVIGATION */}
				{!isMobile && (
					<Box
						sx={{
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
				<Box
					sx={{
						overflow: 'auto',
						scrollbarWidth: 'thin', // For Firefox
						scrollbarColor: (theme) =>
							`${theme.palette.primary.main} ${theme.palette.background.default}`, // For Firefox, using theme colors
						'&::-webkit-scrollbar': {
							width: '8px', // Adjust as needed
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: (theme) =>
								theme.palette.background.default,
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: (theme) =>
								theme.palette.primary.main,
							borderRadius: '20px',
							border: (theme) =>
								`3px solid ${theme.palette.background.default}`, // Optional: Add some space between the thumb and track
						},
						width: '100%',
					}}
				>
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
							flexGrow: 1,
							display: 'flex',
							// flex: 1
							// overflow: 'auto',
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
		</Box>
	);
}

export default Layout;
