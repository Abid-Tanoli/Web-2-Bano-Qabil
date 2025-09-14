import React, { useState, useEffect } from "react";
import places from "../data/places";
import PlaceList from "../components/PlaceList";

const Home = ({ regionFilter, categoryFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const placesPerPage = 10;
  const totalPages = 5;

  const filteredPlaces = places.filter(
    (place) =>
      (regionFilter === "All" || place.region === regionFilter) &&
      (categoryFilter === "All" || place.category === categoryFilter)
  );

  const shuffledPlaces = [...filteredPlaces].sort(() => Math.random() - 0.5);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = shuffledPlaces.slice(indexOfFirstPlace, indexOfLastPlace);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [regionFilter, categoryFilter]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 text-center md:text-left">
        Tourist Places Guide
      </h1>
      <PlaceList places={currentPlaces} />
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-4 py-2 rounded-md border font-medium transition ${
              currentPage === num
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
