import React from "react";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Hotel</h1>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
