import React from 'react';
import logo from '../../assets/logo.png';
import logoText from '../../assets/logotext.png';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import Profile from '../../components/Profile';
import { Container, Box, Grid, Paper } from '@mui/material';
import NoteLines from '../../components/items/NoteLines';
import LoginBox from '../../components/items/LoginBox';

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
          <Grid item xs={12} md={6} lg={6}>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logoText} className="App-logo-text" alt="logo" />
          </Grid>
          <Grid
            item
            display="flex"
            xs={12}
            md={6}
            lg={6}
            justifyContent="center"
            alignItems="flex-start"
            position="relative"
          >
            <NoteLines />
            <LoginBox />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
