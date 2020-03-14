import React from "react";

function SearchBar() {
  return (
    <div className="container">
      <form className="col col-sm form-inline">
        <div className="form-group mb-5 mt-5">
          <label className="mr-5 text-dark">Search by Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
