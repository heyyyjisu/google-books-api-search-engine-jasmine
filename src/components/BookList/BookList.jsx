import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

function BookList({ books, onBookClick }) {
  return (
    <div className={classes.bookList}>
      {books.map((b) => (
        <BookCard book={b} onClick={onBookClick} key={b.id} />
      ))}
    </div>
  );
}

export default BookList;
