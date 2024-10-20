import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHotels } from "../features/hotels/hotelsSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHotels(query));
  };

  return (
    <div className="flex justify-center my-6">
      <form onSubmit={handleSearch} className="flex w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hotels..."
          className="input-field rounded-l-md" // Apply generic input-field class from Sass
        />
        <button
          type="submit"
          className="button rounded-r-md" // Apply generic button class from Sass
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
