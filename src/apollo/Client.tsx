// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dymer.stepzen.net/api/connectIn/__graphql',
  headers: {'Authorization':'apikey dymer::stepzen.io+1000::2571881dee24b28ddc048ac65053cb7efdd6bef0d69dcb0689aa18d9e2bc1768'},
  cache: new InMemoryCache(),
});

export default client;