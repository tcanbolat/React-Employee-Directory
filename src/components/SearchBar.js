import React from "react";

function SearchBar({ userSearch }) {
  return (
    <div className="container">
      <form className="col col-sm form-inline">
        <div className="form-group mb-5 mt-5">
          <label className="mr-3 text-dark font-weight-bolder">Search by Name:</label>
          <input
            type="text"
            onChange={e => userSearch(e)}
            className="form-control"
            placeholder="Name"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
