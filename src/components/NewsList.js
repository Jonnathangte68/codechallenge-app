import React from 'react';
import Link from './Link';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function NewsList(props) {

  const ExchangeRates = () => (
    <Query
        query={gql`
        {
            feeds {
                title
                author
                points
                website,
                url
            }
        }
        `}
    >
        {({ loading, error, data }) => {
        
        
        console.log("Aqui trae los datos");
        console.log(data);
        
        
        
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
    
        return data.feeds.map(({ title, author, points, website, url }) => (
            <div className="news-link">
                <div className="news-title">
                    {author}.- <a href={`${website}`}>{title}</a>
                    <span>(<a href={url}>{points}</a>)</span>
                </div>
                <div className="news-info"></div>
            </div>
        ));
        }}
    </Query>
    );

  const listItems = props.articleList.map((article, index) => (
    <Link
      data={article}
      key={index}
      index={index}
      filter={props.filter}
    ></Link>
  )
  );

  return (
    <div>
      {listItems}
      <ExchangeRates />
    </div>
  );
}

export default NewsList;
