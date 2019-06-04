import React from 'react';
import NewsList from "./NewsList";
import SearchBox from './SearchBox';
import AddLink from './AddLink';
import './News.css';

class News extends React.Component {

  constructor(props) {
    super(props)
    const list = [
      {
        url: 'https://www.tisource.net/1234',
        title: 'Big Tech Antitrust Scrutiny Extends to Facebook and Apple',
        website: 'https://www.tisource.net',
        author: 'Hacker666',
        points: 0
      },
      {
        url: 'https://www.tecsource.net/548',
        title: 'More tech news',
        website: 'https://www.tecsource.net/',
        author: 'John',
        points: 1
      },
      {
        url: 'https://www.tecsource.net/549',
        title: 'More tech news',
        website: 'https://www.tecsource.net/',
        author: 'Adam',
        points: 20
      },
    ];
    this.state = {
      filter: '',
      showForm: false,
      articleList: list,
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
          <NewsList
            articleList={this.state.articleList}
            filter={this.state.filter}
          />
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
