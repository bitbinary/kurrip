import { Box, LinearProgress } from '@mui/material';
import React from 'react';
import loading from '../../assets/loading.gif';

export default function Loading() {
  return (
    <div>
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <Box sx={{ width: '100px' }}>
          <LinearProgress />
        </Box>
      </header>
    </div>
  );
}
