import classes from "./SearchBar.module.scss";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div className={classes.searchBar}>
      <input
        className={classes.searchInput}
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className={classes.searchBtn} onClick={() => onSearch(term)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
