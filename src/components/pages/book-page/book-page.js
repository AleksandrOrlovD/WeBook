import React, { Component } from 'react';
import './book-page.scss';
import { withRouter } from 'react-router-dom';
import withService from '../../hoc/with-service';
import { connect } from 'react-redux';

import { booksRequested, bookLoaded } from '../../../actions';
import LoadingIndicator from '../../loading-indicator/loading-indicator';

import imageNotFound from '../../../assets/images/image-not-found.jpg';

class BookPage extends Component {
  componentDidMount = () => {
    this.props.fetchBook(this.props.match.params.id);
  };

  render() {
    const { loading, book = [] } = this.props;

    if (loading) return <LoadingIndicator />;

    const {
      image,
      title,
      authors,
      publishedDate,
      description,
      pageCount,
      category,
    } = book;

    return (
      <div className="book-page">
        <img
          src={image || imageNotFound}
          className="book-page__image"
          alt={title}
        />
        <div className="book-page__info">
          <h2 className="book-page__title">{true && title}</h2>
          <div className="book-page__author">
            {authors && authors.join(', ')}
          </div>
          <div className="book-page__publdate">
            Published date: {publishedDate ? publishedDate : '--'}
          </div>
          <div className="book-page__publdate">
            Page count: {pageCount ? pageCount : '--'}
          </div>
          <div className="book-page__publdate">
            Category: {category ? category : '--'}
          </div>
          <p className="book-page__description">{true && description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, book }) => {
  return {
    loading,
    book,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBook: (query) => {
      dispatch(booksRequested());
      ownProps.service
        .getBook(query)
        .then((book) => dispatch(bookLoaded(book)));
    },
  };
};

export default withService()(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(BookPage))
);
