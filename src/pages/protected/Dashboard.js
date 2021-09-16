import { Paper, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', flexGrow: '1' }}>
      <Paper elevation={12} sx={{ flexGrow: '1' }}>
        <Typography p={2} variant="h4" component="div">
          Buttons
        </Typography>
        <Grid container p={2} spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="contained" color="primary">
              primary
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="outlined" color="secondary">
              secondary
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="outlined" color="error">
              error
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="outlined" color="success">
              success
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="outlined" color="warning">
              warning
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button variant="outlined" color="info">
              outlined
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
