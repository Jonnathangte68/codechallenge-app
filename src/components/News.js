import React from 'react';
import NewsList from "./NewsList";
import './News.css';

function News() {
  return (
    <div class="container">
      <div class="header">
        <p class="title">Hacker News</p>
        <div><a>new</a></div>
        <div><a>past</a></div>
        <div><a>jobs</a></div>
        <div><a>submit</a></div>
      </div>
      <NewsList/>
    </div>
  );
}

export default News;
