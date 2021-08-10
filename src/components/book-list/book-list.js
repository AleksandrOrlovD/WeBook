import { Container } from '@material-ui/core';
import React from 'react';

import BookItem from '../book-item/book-item';
import LoadingIndicator from '../loading-indicator/loading-indicator';

const BookList = ({ books, loading }) => {
  if (loading) return <LoadingIndicator />;

  if (!books) return null;

  const items = books.map((book) => {
    const { id, title, authors, image, description, publishedDate } = book;
    return (
      <BookItem
        id={id}
        title={title}
        authors={authors}
        image={image}
        description={description}
        publishedDate={publishedDate}
        key={id}
      />
    );
  });

  return <Container maxWidth="lg">{items}</Container>;
};

export default BookList;
