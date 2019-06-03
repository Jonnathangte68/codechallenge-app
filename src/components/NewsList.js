import React from 'react';
import Link from './Link';

function NewsList(props) {

  const list = [
    {
      id: 1,
      url: 'https://www.tisource.net/1234',
      title: 'Big Tech Antitrust Scrutiny Extends to Facebook and Apple',
      sourceUrl: 'https://www.tisource.net',
      sourceName: 'tisource.net',
      timestamp: '03/06/19'
    },
    {
      id: 2,
      url: 'https://www.tecsource.net/548',
      title: 'More tech news',
      sourceUrl: 'https://www.tecsource.net/',
      sourceName: 'tecsource.net',
      timestamp: '03/05/19'
    },
    {
      id: 3,
      url: 'https://www.tecsource.net/549',
      title: 'More tech news',
      sourceUrl: 'https://www.tecsource.net/',
      sourceName: 'tecsource.net',
      timestamp: '03/05/19'
    },
  ];

  const listItems = list.map((article) => (
    <Link
      data={article}
      key={article.id}
      filter={props.filter}
    ></Link>
  )
  );

  return (
    <div>
      {listItems}
    </div>
  );
}

export default NewsList;
