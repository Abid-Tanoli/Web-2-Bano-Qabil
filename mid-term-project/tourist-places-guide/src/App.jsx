import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Booking from "./pages/Booking";
import Feedback from "./pages/Feedback";
import places from "./data/places";

function App() {
  const [regionFilter, setRegionFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const regions = ["All", ...new Set(places.map((p) => p.region))];
  const categories = ["All", ...new Set(places.map((p) => p.category))];

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    setSearchInput("");
    navigate("/"); 
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar
          regions={regions}
          categories={categories}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          setQuery={setQuery}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  regionFilter={regionFilter}
                  categoryFilter={categoryFilter}
                  query={query}
                />
              }
            />
            <Route path="/place/:id" element={<PlaceDetails />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
