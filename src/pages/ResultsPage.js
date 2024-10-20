import React from "react";
import { useSelector } from "react-redux";
import HotelList from "../components/HotelList";

const ResultsPage = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Search Results</h1>
      </header>
      <main className="container mx-auto py-6">
        <HotelList hotels={hotels} />
      </main>
    </div>
  );
};

export default ResultsPage;
