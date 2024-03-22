import React from 'react';
import { Grid, AppBar, Toolbar, IconButton, TextField, Drawer, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Settings } from '@mui/icons-material';
import Cities from 'pages/Cities';
import WeatherInfo from 'pages/WeatherInfo';
import { Routes, Route } from 'react-router-dom';

function ResponsiveLayout() {
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
          {/* Top bar for mobile */}
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
              {/* Search input for mobile */}
              <TextField label="Search" variant="outlined" size="small" style={{ marginLeft: 8, flexGrow: 1 }} />
            </Toolbar>
          </AppBar>

          {/* Navigation Drawer for mobile */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* Navigation items here */}
            <Box p={2}>Navigation Menu</Box>
          </Drawer>
        </>
      )}

      {/* Main layout grid */}
      <Grid container spacing={0}>
        {!isMobile && (
          <Grid item md={3} lg={2} style={{ border: '1px solid black', height: '100vh' }}>Navigation Menu - Desktop</Grid>
        )}
        <Grid item xs={12} md={9} lg={10}>
          {/* Search bar for desktop */}
          <Box display={{ xs: 'none', md: 'block' }}>
            <TextField label="Search" variant="outlined" fullWidth margin="normal" />
          </Box>
          <Box p={3} style={{ border: '1px solid black' }}>
            <Routes>
                <Route path="/" element={<WeatherInfo />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ResponsiveLayout;