import React, { useState } from 'react';
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
import Profile from './components/Profile';
import { ApolloProvider } from '@apollo/client';
import { ApolloClientCreator } from './utils/ApolloClient';

export default function App() {
  const [token, setToken] = useState(null);
  const { isAuthenticated } = useAuth0();
  // getAccessTokenSilently().then((token) => {
  //   setToken(token);
  // });
  // const apolloClient = useAppApolloClient(token);
  return (
    <ApolloProvider client={ApolloClientCreator()}>
      <Router>
        <NavBar isAuthenticated={isAuthenticated} />
        <Switch>
          <PublicRoute path="/login">
            <Home />
          </PublicRoute>
          <PrivateRoute path="/">
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

function PublicRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
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

function ProtectedRoutes() {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
      {/*  <Route path="/users">
        <Users />
      </Route>
      <Route path="/forum">
        <Forum />
      </Route>
      <Route path="/feeds">
        <Forum activePage="feeds" />
      </Route>
      <Route path="/search">
        <Forum activePage="search" />
      </Route>
      <Route path="/recommendations">
        <Forum activePage="recommendations" />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route> */}
    </Switch>
  );
}
