import { Container, TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import './search-page.scss';

import { booksRequested, booksLoaded } from '../../../actions';
import BookList from '../../book-list/book-list';
import withService from '../../hoc/with-service';

const SearchPage = ({ fetchBooks, unmountBooks, books, loading }) => {
  const onSearchChange = () => {
    const query = document.getElementById('searchLine').value;
    if (query === '') {
      unmountBooks();
    } else fetchBooks(query);
  };

  return (
    <Container maxWidth="md">
      <TextField
        id="searchLine"
        label="Search Books"
        variant="filled"
        style={{ marginBottom: '50px' }}
        onChange={onSearchChange}
        fullWidth
      />
      <BookList books={books} loading={loading} />
    </Container>
  );
};

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: (query) => {
      dispatch(booksRequested());
      ownProps.service
        .getBooksArray(query)
        .then((books) => dispatch(booksLoaded(books)));
    },
    unmountBooks: () => {
      dispatch(booksLoaded([]));
    },
  };
};

export default withService()(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
