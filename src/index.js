import React from 'react';
import { render } from "react-dom";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
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
      <div>
            <div>
                <p>Hacker News</p>
            </div>
            <div>
                <a> | new</a>
                <a> | past</a>
                <a> | comments</a>
                <a> | ask</a>
                <a> | show</a>
                <a> | jobs</a>
                <a> | submit</a>
            </div>
      </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));