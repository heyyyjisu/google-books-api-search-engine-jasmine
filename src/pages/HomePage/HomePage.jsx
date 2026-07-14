import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookList from "../../components/BookList/BookList";
import { useState } from "react";
import { getBooks } from "../../services/BookApi";

function HomePage() {
  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const handleSearch = async (term) => {
    setIsLoading(true);
    setError(false);
    setNoResult(false);
    try {
      const result = await getBooks(term);
      setBooks(result);
      if (!result.length) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Heading />
      <SearchBar onSearch={handleSearch} />
      {books.length > 0 && <BookList books={books} />}
      {isLoading && <p>Loading...</p>}
      {noResult && <p>There is no books found</p>}
      {error && <p>Something went wrong</p>}
    </div>
  );
}

export default HomePage;
