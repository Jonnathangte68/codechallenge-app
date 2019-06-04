import React from 'react';
import { render } from "react-dom";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import News from './components/News';
import './Main.css';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
      <News></News>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));