import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Dashboard from './pages/protected/Dashboard';
import Home from './pages/public/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/shared/Loading';
import NavBar from './components/shared/NavBar';
// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <div>
        <NavBar isAuthenticated={isAuthenticated} />
        <Switch>
          <Route path="/public">
            <Home />
          </Route>
          <Route path="/login">
            <Home />
          </Route>
          <PrivateRoute path="/">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
