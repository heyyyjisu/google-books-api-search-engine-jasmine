import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookList from "../../components/BookList/BookList";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/BookApi";
import classes from "./HomePage.module.scss";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (term) => {
    setIsLoading(true);
    setError(false);
    setNoResult(false);
    try {
      const result = (await getBooks(term)) || [];
      console.log("result: ", result);
      setBooks(result || []);
      if (!result.length) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("bestseller");
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <Heading />
        <SearchBar onSearch={handleSearch} />
      </div>
      {books?.length > 0 && (
        <BookList books={books} onBookClick={setSelectedBook} />
      )}
      {selectedBook && (
        <Modal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
      {isLoading && <p>Loading...</p>}
      {noResult && <p>There is no books found</p>}
      {error && <p>Something went wrong</p>}
      <Footer />
    </div>
  );
}

export default HomePage;
