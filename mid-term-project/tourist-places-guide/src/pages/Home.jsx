import React from "react";
import places from "../data/places";
import PlaceList from "../components/PlaceList";

const Home = ({ regionFilter, categoryFilter, query }) => {
  const filteredPlaces = places.filter((place) => {
    const matchesRegion =
      regionFilter === "All" || place.region === regionFilter;
    const matchesCategory =
      categoryFilter === "All" || place.category === categoryFilter;
    const matchesSearch =
      query === "" ||
      (place.name && place.name.toLowerCase().includes(query.toLowerCase())) ||
      (place.description &&
        place.description.toLowerCase().includes(query.toLowerCase()));
    return matchesRegion && matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="flex justify-center text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 text-center md:text-left">
        Tourist Places Guide
      </h1>

      <PlaceList places={filteredPlaces} />
    </div>
  );
};

export default Home;
