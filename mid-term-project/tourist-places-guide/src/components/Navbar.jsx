import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  regions = [],
  categories = [],
  regionFilter,
  setRegionFilter,
  categoryFilter,
  setCategoryFilter,
}) => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 flex flex-wrap md:flex-nowrap justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="text-2xl font-bold text-white">
        <Link to="/">Tourist Guide</Link>
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-2 md:mt-0">
        <Link
          to="/"
          className={`font-medium transition-colors ${
            location.pathname === "/" ? "text-white underline" : "text-gray-100 hover:text-white"
          }`}
        >
          Home
        </Link>

        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="p-2 rounded shadow-sm border focus:outline-none focus:ring-2 focus:ring-white transition duration-200 bg-white text-gray-800"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region === "All" ? "Region" : region}
            </option>
          ))}
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 rounded shadow-sm border focus:outline-none focus:ring-2 focus:ring-white transition duration-200 bg-white text-gray-800"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "Places" : cat}
            </option>
          ))}
        </select>

        <Link
          to="/about"
          className={`font-medium transition-colors ${
            location.pathname === "/about" ? "text-white underline" : "text-gray-100 hover:text-white"
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
