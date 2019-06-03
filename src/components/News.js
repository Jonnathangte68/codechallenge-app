import React from 'react';
import NewsList from "./NewsList";
import SearchBox from './SearchBox';
import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleInput = (e) => {
    this.setState({
        filter: e.target.value
    });
}

  render() {
    return (
      <div className="container">
        <div className="header">
          <p className="title">Hacker News</p>
          <div><a href="/">new</a></div>
          <div><a href="/">past</a></div>
          <div><a href="/">jobs</a></div>
          <div><a href="/">submit</a></div>
          <SearchBox handleInput={this.handleInput}/>
        </div>
        <NewsList filter={this.state.filter}/>
      </div>      
    )
  }
}

export default News;
