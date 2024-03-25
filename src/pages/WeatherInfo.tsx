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
							<Paper sx={{
									borderRadius: 3,
                  padding: 2,
								}}>
								<CityTemperature />
							</Paper>
						</Grid>
						{/* Middle Paper - Air Conditions */}
						<Grid item xs={12}>
							<Paper
								sx={{
									borderRadius: 3,
                  padding: 2,
								}}
							>
								<HourLyForecast />
							</Paper>
						</Grid>
						{/* Bottom Paper - See More */}
						<Grid item xs={12}>
							<Paper sx={{
									borderRadius: 3,
                  padding: 2,
								}}>
								<AirConditions />
							</Paper>
						</Grid>
					</Grid>
				</Grid>

				{/* Right Column - Forecast */}
				<Grid item xs={12} md={5} lg={4}>
					<Paper style={{ textAlign: 'center', height: '100%' }}>
						<DailyForecast />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}

export default WeatherInfo;
