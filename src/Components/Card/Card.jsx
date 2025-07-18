import React from 'react';
import './Card.css';

export default function Card({Title, image}) {
  return (
      <div className="card-1">
        <h1>{Title}</h1>
        <div className="hovercard">
          <img src={image} alt="image not available" />
        </div>
    </div>
  );
}
