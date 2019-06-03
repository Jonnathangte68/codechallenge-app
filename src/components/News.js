import React from 'react';
import NewsList from "./NewsList";
//import './News.css';

function News() {
  return (
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
      <NewsList/>
    </div>
  );
}

export default News;
