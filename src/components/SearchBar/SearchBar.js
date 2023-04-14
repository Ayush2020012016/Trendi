import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch, onSearchBarClick }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
 

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder=""
      />
    </div>
  );
};

export default SearchBar;
