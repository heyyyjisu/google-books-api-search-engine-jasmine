import BookCard from "../BookCard/BookCard";

function BookList({ books }) {
  return (
    <div>
      {books.map((b) => (
        <BookCard
          title={b.volumeInfo.title}
          subtitle={b.volumeInfo.subtitle}
          authors={b.volumeInfo.authors}
          cat={b.volumeInfo.categories}
          pubDate={b.volumeInfo.publishedDate}
          imgLink={b.volumeInfo.imageLinks.smallThumbnail}
          avgRating={b.volumeInfo.averageRating}
        />
      ))}
    </div>
  );
}

export default BookList;
