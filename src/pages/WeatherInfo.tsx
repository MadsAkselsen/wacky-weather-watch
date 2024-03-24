import { Grid, Paper, Container } from '@mui/material';
import { WeatherContext, WeatherContextType } from 'context/weatherContext';
import React, { useContext } from 'react';

const WeatherInfo: React.FC = () => {
    const { weatherData } = useContext(WeatherContext) as WeatherContextType;
    console.log('weatherData ==>: ', weatherData);
    return (
        <Container maxWidth="xl" disableGutters>
            <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
                {/* First Column */}
                <Grid item xs={12} sm={12} md={6}>
                    <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                        Column 1 Content
                    </Paper>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} sm={12} md={6}>
                    <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                        Column 2 Content
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WeatherInfo;
