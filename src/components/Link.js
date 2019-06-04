import React from 'react';

function Link(props) {

  const linkData = props.data;
  let renderLink = true;
  if (props.filter) {
    renderLink = linkData.title.toLowerCase().includes(props.filter.toLowerCase());
  }

  return renderLink ? (
    <div className="news-link">
      <div className="news-title">
        {props.index}.- <a href={`${linkData.url}`}>{linkData.title}</a>
        <span>(<a href={linkData.website}>{linkData.website}</a>)</span>
      </div>
      <div className="news-info">Points {linkData.points} by {linkData.author}</div>
    </div>
  ) : null;
}

export default Link;

/*<div class="news-link">
  <div class="news-title">
    1.- <a href="https://www.tisource.net/1234">Big Tech Antitrust Scrutiny Extends to Facebook and Apple</a>
    <span>(<a href="https://www.tisource.net">tisource.net</a>)</span>
  </div>
<div class="news-info">03/06/19</div>
</div>*/
