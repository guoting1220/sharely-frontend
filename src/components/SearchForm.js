import React, { useState } from "react";
// import "./SearchForm.css";

/** Search widget.
 *
 * Appears on TitleList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { TitileList } -> SearchForm
 */

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    evt.preventDefault();
    // take care of accidentally trying to search for just spaces
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm("");
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="SearchForm mb-4 w-75 mx-auto">
      <form className="d-flex form-inline justify-content-center w-100 input-group" onSubmit={handleSubmit}>
        <input
          className="form-control flex-grow-1"
          name="searchTerm"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-outline btn-secondary">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
