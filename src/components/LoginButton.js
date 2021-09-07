import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <Button variant="dark" onClick={() => loginWithPopup()}>
      Log In
    </Button>
  );
};

export default LoginButton;
