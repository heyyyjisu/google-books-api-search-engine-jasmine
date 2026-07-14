import { useState } from "react";
import { getBooks } from "../../services/BookApi";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => onSearch(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
