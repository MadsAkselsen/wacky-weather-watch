import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import AirConditions from 'components/Airconditions/AirConditions';
import CityTemperature from 'components/CityTemperature/CityTemperature';
import HourLyForecast from 'components/TodayForecast/HourlyForeacst';
import DailyForecast from 'components/DailyForecast.ts/DailyForecast';
import { useWeatherContext } from 'context/weatherContext';

function WeatherInfo() {
	const { weatherData } = useWeatherContext();

	return (
		<Container maxWidth="xl" disableGutters>
			{weatherData ? (
				<Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
					{/* Left Column */}
					<Grid item xs={12} md={7} lg={8}>
						<Grid container spacing={2}>
							{/* Top Box - Today's Forecast */}
							<Grid item xs={12}>
								<Paper
									sx={{
										borderRadius: 3,
										padding: 2,
										background: 'none',
									}}
									elevation={0}
								>
									<CityTemperature />
								</Paper>
							</Grid>
							{/* Middle Paper - Hourly Forecast */}
							<Grid item xs={12}>
								<Paper
									sx={{
										borderRadius: 3,
										padding: 2,
									}}
									elevation={0}
								>
									<HourLyForecast />
								</Paper>
							</Grid>
							{/* Bottom Paper - Air Conditions */}
							<Grid item xs={12}>
								<Paper
									sx={{
										borderRadius: 3,
										padding: 2,
									}}
									elevation={0}
								>
									<AirConditions />
								</Paper>
							</Grid>
						</Grid>
					</Grid>

					{/* Right Column - Forecast */}
					<Grid item xs={12} md={5} lg={4}>
						<Paper
							sx={{
								height: '100%',
								borderRadius: 3,
							}}
							elevation={0}
						>
							<DailyForecast />
						</Paper>
					</Grid>
				</Grid>
			) : (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="90vh"
					textAlign="center"
				>
					<Typography variant="h6">
						Search for a city or use your current position to get
						weather
					</Typography>
				</Box>
			)}
		</Container>
	);
}

export default WeatherInfo;
