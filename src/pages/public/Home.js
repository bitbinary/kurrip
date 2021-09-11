import React from 'react';
import LogoWhite from '../../assets/LogoWhite.png';
// import logo from '../../assets/logo.png';
import LogoTextWhite from '../../assets/LogoTextWhite.png';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import Profile from '../../components/Profile';
import { Container, Box, Grid } from '@mui/material';
import { themes } from '../../constants/themes';
import NoteLines from '../../components/items/NoteLines';

export default function Home() {
  return (
    <div>
      <Box sx={{ width: '100%', backgroundColor: themes.palette.primary.main }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <header className="App-header">
              <img src={LogoWhite} className="App-logo" alt="logo" />
              <img src={LogoTextWhite} className="App-logo-text" alt="logo" />
            </header>
          </Grid>
          <Grid
            item
            display="flex"
            xs={12}
            md={6}
            lg={6}
            justifyContent="center"
            alignItems="center"
          >
            <NoteLines />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
