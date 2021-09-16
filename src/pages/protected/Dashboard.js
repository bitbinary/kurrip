import { Paper, Box, Button, Grid } from '@mui/material';
import React from 'react';

export default function Dashboard() {
   return (
      <Box sx={{ display: 'flex', flexGrow: '1' }}>
         <Paper elevation={12}>
            Buttons
            <br />
            <Grid container spacing={3}>
               <Grid item xs={2}>
                  <Button variant='contained' color='primary'>
                     primary
                  </Button>
               </Grid>
               <Grid item xs={2}>
                  <Button variant='outlined' color='secondary'>
                     secondary
                  </Button>
               </Grid>
               <Grid item xs={2}>
                  <Button variant='outlined' color='error'>
                     error
                  </Button>
               </Grid>
               <Grid item xs={2}>
                  <Button variant='outlined' color='success'>
                     success
                  </Button>
               </Grid>
               <Grid item xs={2}>
                  <Button variant='outlined' color='warning'>
                     warning
                  </Button>
               </Grid>
               <Grid item xs={2}>
                  <Button variant='outlined' color='info'>
                     outlined
                  </Button>
               </Grid>
            </Grid>
         </Paper>
      </Box>
   );
}
