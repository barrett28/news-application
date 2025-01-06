// 

import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card" style={{ maxWidth: '345px' }}>
      {/* Use curly braces to pass src as a JavaScript expression */}
      <img className="card-img-top" src={src} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* Use curly braces for url */}
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
