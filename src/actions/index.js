const booksRequested = () => 'FETCH_BOOKS_REQUESTED';

const booksLoaded = (payload) => {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload,
  };
};

const bookLoaded = (payload) => {
  return {
    type: 'FETCH_BOOK_LOADED',
    payload,
  };
};

export { booksRequested, booksLoaded, bookLoaded };
