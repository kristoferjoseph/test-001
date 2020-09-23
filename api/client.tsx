import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://graphql.anilist.co',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json',
    },
    cache: new InMemoryCache()
  });
};
