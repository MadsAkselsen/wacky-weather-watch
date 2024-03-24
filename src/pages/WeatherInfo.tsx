import { Container, Grid, Paper } from '@mui/material';
import WeekForecast from 'components/WeekForecast.ts/WeekForecast';

function WeatherLayout() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
        {/* Left Column */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container spacing={2}>
            {/* Top Box - Today's Forecast */}
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                Today's Forecast
              </Paper>
            </Grid>
            {/* Middle Box - Air Conditions */}
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                Air Conditions
              </Paper>
            </Grid>
            {/* Bottom Box - See More */}
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                See More
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column - Forecast */}
        <Grid item xs={12} md={5} lg={4}>
          <Paper elevation={3} style={{ padding: 20, textAlign: 'center', height: '100%' }}>
            <WeekForecast />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherLayout;
