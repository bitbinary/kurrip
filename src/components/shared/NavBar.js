import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@mui/material';
import LoginButton from '../LoginButton';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavBar({ isAuthenticated }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout, user, isLoading } = useAuth0();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (isLoading) return null;
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {isAuthenticated ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={user.name} src={user.picture} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <RouterNavLink to="/" className="nav-link" exact>
                    Dashboard
                  </RouterNavLink>
                </MenuItem>
                <MenuItem>
                  <RouterNavLink to="/profile" exact>
                    Profile
                  </RouterNavLink>
                </MenuItem>
                <MenuItem
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  LogOut
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
