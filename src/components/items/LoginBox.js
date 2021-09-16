import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import LoginButton from '../LoginButton';

export default function LoginBox() {
  return (
    <Card
      elevation={5}
      variant="outlined"
      style={{
        width: '379px',
        minHeight: '362px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        transform: `translate(50px, 20px)`,
      }}
      justifyContent="center"
    >
      <CardContent>
        <Typography
          color="textPrimary"
          variant="h3"
          color="primary"
          gutterBottom
        >
          hi there!
        </Typography>

        <Typography color="textSecondary">discover new ways to “do”</Typography>
      </CardContent>
      <CardActions>
        <LoginButton />
      </CardActions>
    </Card>
  );
}
