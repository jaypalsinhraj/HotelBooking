import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/hotel/:hotelId" element={<HotelDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
