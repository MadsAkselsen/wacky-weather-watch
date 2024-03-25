import { Box, Container, Grid, Paper } from '@mui/material';
import AirConditions from 'components/Airconditions/AirConditions';
import CityTemperature from 'components/CityTemperature/CityTemperature';
import HourLyForecast from 'components/TodayForecast/HourlyForeacst';
import DailyForecast from 'components/DailyForecast.ts/DailyForecast';

function WeatherInfo() {
	return (
		<Container maxWidth="xl" disableGutters>
			<Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
				{/* Left Column */}
				<Grid item xs={12} md={7} lg={8}>
					<Grid container spacing={2}>
						{/* Top Box - Today's Forecast */}
						<Grid item xs={12}>
							<Box sx={{
									borderRadius: 3,
                  padding: 2,
									bgcolor: 'primary.main',
									'&:hover': {
										bgcolor: 'primary.dark',
									},
								}}>
								<CityTemperature />
							</Box>
						</Grid>
						{/* Middle Box - Air Conditions */}
						<Grid item xs={12}>
							<Box
								sx={{
									borderRadius: 3,
                  padding: 2,
									bgcolor: 'primary.main',
									'&:hover': {
										bgcolor: 'primary.dark',
									},
								}}
							>
								<HourLyForecast />
							</Box>
						</Grid>
						{/* Bottom Box - See More */}
						<Grid item xs={12}>
							<Box sx={{
									borderRadius: 3,
                  padding: 2,
									bgcolor: 'primary.main',
									'&:hover': {
										bgcolor: 'primary.dark',
									},
								}}>
								<AirConditions />
							</Box>
						</Grid>
					</Grid>
				</Grid>

				{/* Right Column - Forecast */}
				<Grid item xs={12} md={5} lg={4}>
					<Box style={{ textAlign: 'center', height: '100%' }}>
						<DailyForecast />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default WeatherInfo;
