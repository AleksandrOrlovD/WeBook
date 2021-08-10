export default class WebookService {
  _base = 'https://www.googleapis.com/books/v1/volumes';

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg',
      descripion: 'lorem ipsum dolor sit ammet',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      coverImage: 'https://antonz.ru/content/images/2017/12/release-it.jpg',
      descripion: 'lorem ipsum dolor sit ammet',
    },
  ];

  getBooks = async (url) => {
    const res = await fetch(`${this._base}${url}`);

    if (!res.ok) {
      return [];
    }

    return await res.json();
  };

  getBooksArray = async (query) => {
    const res = await this.getBooks('?q=' + query.replaceAll(' ', '+'));

    if (!res) return [];

    const books = res.items;
    return books.map(this._transformBooks);
  };

  getBook = async (query) => {
    const res = await this.getBooks('/' + query);

    const { volumeInfo } = res;
    const { imageLinks } = volumeInfo;

    let image;
    if (imageLinks) {
      image =
        imageLinks.large ||
        imageLinks.extraLarge ||
        imageLinks.medium ||
        imageLinks.small ||
        imageLinks.thumbnail ||
        imageLinks.smallThumbnail;
    } else {
      image = null;
    }

    return {
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      description: volumeInfo.description,
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
      category: volumeInfo.mainCategory,
      image,
    };
  };

  _transformBooks = (book) => {
    const { id, volumeInfo } = book;
    const { imageLinks } = volumeInfo;

    let image;
    if (imageLinks) {
      image =
        imageLinks.small ||
        imageLinks.thumbnail ||
        imageLinks.medium ||
        imageLinks.smallThumbnail ||
        imageLinks.large ||
        imageLinks.extraLarge;
    } else {
      image = null;
    }

    return {
      id,
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      description: volumeInfo.description,
      publishedDate: volumeInfo.publishedDate,
      image,
    };
  };
}
