function BookCard({
  title,
  subtitle,
  authors,

  cat,
  pubDate,
  imgLink,
  avgRating,
}) {
  return (
    <div>
      <img src={imgLink} />
      <p>title: {title}</p>
      <p>subtitle: {subtitle}</p>
      <p>authors: {authors}</p>
      <p>categories: {cat}</p>
      <p>published Date: {pubDate}</p>
      <p>Average Rating: {avgRating}</p>
    </div>
  );
}

export default BookCard;
