import classes from "./BookCard.module.scss";

function BookCard({ book, onClick }) {
  return (
    <article className={classes.bookcard} onClick={() => onClick(book)}>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <p>{book.volumeInfo.title}</p>
    </article>
  );
}

export default BookCard;
