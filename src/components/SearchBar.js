import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHotels } from "../features/hotels/hotelsSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(searchHotels({ location, fromDate, toDate }));

    navigate("/results");
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="flex flex-col">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="input-field mb-4"
        />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          placeholder="From Date"
          className="input-field mb-4"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          placeholder="To Date"
          className="input-field mb-4"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
