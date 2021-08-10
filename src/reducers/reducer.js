const initialState = {
  books: [],
  book: {},
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return { loading: true, error: null };

    case 'FETCH_BOOKS_LOADED':
      return { books: action.payload, loading: false };

    case 'FETCH_BOOK_LOADED':
      return { book: action.payload, loading: false };
  }

  return state;
}

export default reducer;