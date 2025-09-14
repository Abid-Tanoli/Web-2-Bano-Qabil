import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import About from "./pages/About";
import places from "./data/places";

function App() {
  const [regionFilter, setRegionFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const regions = ["All", ...new Set(places.map((p) => p.region))];
  const categories = ["All", ...new Set(places.map((p) => p.category))];

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
        />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  regionFilter={regionFilter}
                  categoryFilter={categoryFilter}
                />
              }
            />
            <Route path="/place/:id" element={<PlaceDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
