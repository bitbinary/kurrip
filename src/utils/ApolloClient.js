import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import { onError } from '@apollo/client/link/error';
import { useState } from 'react';
const httpLink = new createHttpLink({
  uri: 'https://kurrip.hasura.app/v1/graphql',
});

export const ApolloClientCreator = () => {
  const [token, setToken] = useState(null);
  console.log(token);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const withToken = setContext((_, { headers }) => {
    // if you have a cached value, return it immediately
    if (isAuthenticated) {
      if (token)
        return {
          // Return the new header with Token
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
          },
        };
      else {
        return getAccessTokenSilently().then((userToken) => {
          setToken(userToken);
          return {
            // Return the new header with Token
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : '',
            },
          };
        });
      }
    }
    // If there is no cached value, look up the authO token
  });
  // SetUp clear token for cases where the token is expired or is not authorized
  const resetToken = onError(({ networkError }) => {
    if (
      networkError &&
      networkError.name === 'ServerError' &&
      networkError.statusCode === 401
    ) {
      // remove cached token on 401 from the server
      setToken(null);
    }
  });
  // Initialising the cache
  const cache = new InMemoryCache();

  const authFlowLink = withToken.concat(resetToken);
  const client = new ApolloClient({
    link: ApolloLink.from([authFlowLink, httpLink]),
    cache,
    connectToDevTools: true,
  });
  return client;
};
