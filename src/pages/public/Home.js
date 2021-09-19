import React from 'react';
import logo from '../../assets/logo.png';
import logoText from '../../assets/logotext.png';
import { Box, Grid, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            flexDirection="column"
            alignItems="center"
            display="flex"
          >
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logoText} className="App-logo-text" alt="logo" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
