import React from "react";
import SearchBar from "./components/SearchBar";
import HotelList from "./components/HotelList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 p-4 text-white text-center">
        <h1 className="header-title">Hotel Search</h1>
      </header>
      <main className="container mx-auto py-6">
        <SearchBar />
        <HotelList />
      </main>
    </div>
  );
};

export default App;
