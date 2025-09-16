import React, { useState } from "react";
import tours from "../data/tours";
import places from "../data/places";
import TourMap from "../components/TourMap";

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  const getPlaceDetails = (placeId) => {
    return places.find((p) => p.id === placeId);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 text-center md:text-left">
        Tour Packages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="border rounded-lg shadow-md bg-white p-5 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h2>
            <p className="text-gray-600 mb-2">{tour.description}</p>
            <p className="font-medium text-gray-700 mb-4">Duration: {tour.days} {tour.days > 1 ? "days" : "day"}</p>

            <h3 className="font-semibold text-gray-800 mb-2">Route:</h3>
            <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
              {tour.route.map((stop, index) => {
                const place = getPlaceDetails(stop.placeId);
                return (
                  <li key={index}>
                    Day {index + 1}: {place?.name || "Unknown Place"}{" "}
                    <span className="text-sm text-gray-500">({place?.lat}, {place?.lng})</span>
                  </li>
                );
              })}
            </ol>

            <button
              onClick={() =>
                setSelectedTour(tour.route.map((stop) => getPlaceDetails(stop.placeId)).filter(Boolean))
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View on Map
            </button>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Selected Tour Map</h2>
          <TourMap route={selectedTour} />
        </div>
      )}
    </div>
  );
};

export default Tours;
