import classes from "./Modal.module.scss";

function Modal({ book, onClose }) {
  function formatPubDate(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  }

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modalWrapper}>
        <button className={classes.closeBtn} onClick={onClose}>
          x
        </button>
        <article
          className={classes.selectedbook}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.inner}>
            <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
            <div className={classes.info}>
              <h2>{book.volumeInfo.title}</h2>
              {book.volumeInfo.subtitle && <h3>{book.volumeInfo.subtitle}</h3>}
              {book.volumeInfo.authors?.length > 0 && (
                <div>
                  <p className={classes.label}>Authors</p>
                  <p>{book.volumeInfo.authors.join(", ")}</p>
                </div>
              )}
              {book.volumeInfo.categories?.length > 0 && (
                <div>
                  <p className={classes.label}>Categories</p>
                  <p>{book.volumeInfo.categories.join(", ")}</p>
                </div>
              )}
              {book.volumeInfo.publishedDate && (
                <div>
                  <p className={classes.label}>Published</p>
                  <p>{formatPubDate(book.volumeInfo.publishedDate)}</p>
                </div>
              )}
              {book.volumeInfo.averageRating != null && (
                <div>
                  <p className={classes.label}>Rating</p>
                  <p>{book.volumeInfo.averageRating} / 5</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Modal;
