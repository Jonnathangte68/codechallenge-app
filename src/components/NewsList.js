import React from 'react';
import Link from './Link';

function NewsList(props) {
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
    </div>
  );
}

export default NewsList;
