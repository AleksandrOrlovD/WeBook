import React from 'react';
import './book-item.scss';

import imageNotFound from '../../assets/images/image-not-found.jpg';
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, authors, image, description, publishedDate }) => {
  if (description && description.length > 300) {
    description = description.slice(0, 300) + '...';
  }

  return (
    <div className="book-item">
      <img
        src={image || imageNotFound}
        className="book-item__image"
        alt="title"
      />
      <div className="book-item__info">
        <Link to={`/book/${id}`} className="book-item__title">{true && title}</Link>
        <div className="book-item__author">{authors && authors.join(', ')}</div>
        <div className="book-item__publdate">Published date: {true && publishedDate}</div>
        <p className="book-item__description">{true && description}</p>
      </div>
    </div>
  );
};

export default BookItem;
