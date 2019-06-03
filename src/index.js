import React from 'react';
import { render } from "react-dom";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import News from './components/News';
import './Main.css';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

/*
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
*/

const App = () => (
  <ApolloProvider client={client}>
      <News></News>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));