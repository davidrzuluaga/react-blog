import React from 'react';
import DeleteBlogEntry from './blog-delete';

export default function BlogRead(props) {
  return (
    <div className="card">
        <div
          style={{backgroundImage: `url(${props.element.picture})`}}
          className="imgincard"
        />
        <div className="cardcontent">
          <h2>
            {props.element.title}
          </h2>
          <p>
            {props.element.description}
          </p>
        </div>
      <div className="cardactions">
        {window.location.pathname === '/userentries' ?
          <DeleteBlogEntry {...props} element={props.element} />
        : ""}
      </div>
    </div>
  );
}