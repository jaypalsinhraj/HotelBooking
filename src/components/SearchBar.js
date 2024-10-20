import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHotels } from "../features/hotels/hotelsSlice";
import { useNavigate } from 'react-router-dom'; 

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHotels(query));
    navigate('/results');
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hotels..."
          className="input-field rounded-l-md"
        />
        <button type="submit" className="button rounded-r-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
