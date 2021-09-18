import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import { onError } from '@apollo/client/link/error';
const httpLink = new createHttpLink({
  uri: 'https://kurrip.hasura.app/v1/graphql',
});

// const restLink = new RestLink({
//     uri: composeUrl('https://kurrip.hasura.app/v1/graphql', 'https'),
// })

// const authLink = new ApolloLink((operation, forward) => {
// const {isAuthenticated } = useAuth0()

//     const { token } = operation.getContext()
//     operation.setContext(({ headers }) => ({
//       headers: {
//         ...headers,
//         Authorization: isAuthenticated ? `Bearer ${token}` : null,
//       },
//     }))
//     return forward(operation)
//   })
// const withToken = setContext(() =>

//     useAuth0().getAccessTokenSilently().then(tkn => {
//       const token = tkn
//       return { token }
//     })
//   )
// const cache = new InMemoryCache({});

// export const client = new ApolloClient({
//     link: ApolloLink.from([withToken, authLink, httpLink]),
//     cache,
//   })
// cached storage for the user token
export const ApolloClientCreator = () => {
  let token;
  const { getAccessTokenSilently } = useAuth0();

  const withToken = setContext((_, { headers }) => {
    // if you have a cached value, return it immediately
    // if (token) return { token };
    // If there is no cached value, look up the authO token
    return getAccessTokenSilently().then((userToken) => {
      token = userToken;
      return {
        // Return the new header with Token
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });
  });
  // SetUp clear token for cases where the token is expired or is not authorized
  const resetToken = onError(({ networkError }) => {
    if (
      networkError &&
      networkError.name === 'ServerError' &&
      networkError.statusCode === 401
    ) {
      // remove cached token on 401 from the server
      token = null;
    }
  });
  // Initialising the cache
  const cache = new InMemoryCache();

  const authFlowLink = withToken.concat(resetToken);
  console.log(authFlowLink);
  const client = new ApolloClient({
    link: ApolloLink.from([authFlowLink, httpLink]),
    cache,
  });
  return client;
};
