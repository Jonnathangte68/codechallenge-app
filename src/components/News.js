import React from 'react';
import NewsList from "./NewsList";
import SearchBox from './SearchBox';
import AddLink from './AddLink';
import './News.css';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class News extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      showForm: false,
      articleList: [],
    }
  }

  handleInput = (e) => {
    this.setState({
      filter: e.target.value
    });
  }

  handleAddclick = (e) => {
    e.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newLink = {
      url: data.get('url'),
      title: data.get('title'),
      website: data.get('website'),
      author: data.get('author'),
      points: 0
    }
    this.setState(state => ({
      articleList: [...state.articleList, newLink],
      showForm: false,
    }));
    e.target.reset();

  }


  render() {
    const NewsListRender = () => (
      <Query 
      query={gql`{ feeds {title, author, points, website, url} }`}
      onCompleted={data => this.setState({articleList: data.feeds})}
      >
        {({ loading, error, data }) => {

          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <NewsList
              articleList={this.state.articleList}
              filter={this.state.filter}
            />
          );
        }}
      </Query>
    );
    const newSymbol = this.state.showForm ? '- ' : '+ ';

    return (
      <div>
        <div className="container">
          <div className="header">
            <p className="title">Hacker News</p>
            <div>
              <a href="/" onClick={this.handleAddclick}>
                {newSymbol}New
            </a>
            </div>
            <SearchBox handleInput={this.handleInput} />
          </div>
          <NewsListRender />
        </div>
        <AddLink
          showForm={this.state.showForm}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default News;
