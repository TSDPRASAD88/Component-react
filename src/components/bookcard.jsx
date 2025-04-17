
import React from 'react';
import './bookcard.css'; 

function BookCard({ image, name, genre, author }) {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h3 className="book-title">{name}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
}

export default BookCard;
