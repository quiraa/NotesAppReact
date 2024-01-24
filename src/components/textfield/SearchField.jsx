import React from "react";

function SearchField({ query, onInput }) {
  return (
    <div className="input-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        placeholder="Search notes"
        value={query}
        onInput={onInput}
      />
    </div>
  );
}

export default SearchField;
