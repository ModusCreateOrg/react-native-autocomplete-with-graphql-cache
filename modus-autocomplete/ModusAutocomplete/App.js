/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Home from './src/components/Home';
import client from './ApolloClient';

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
