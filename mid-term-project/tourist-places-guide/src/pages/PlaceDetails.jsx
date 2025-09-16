import React from "react";
import { useParams, Link } from "react-router-dom";
import places from "../data/places";

const PlaceDetails = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id, 10));

  if (!place)
    return <div className="p-6 text-center text-gray-500">Place not found</div>;

  return (
    <div className="p-4 text-xl sm:p-6 md:p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black-800">
        {place.name}
      </h1>
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-auto rounded-lg mb-4 object-cover shadow-sm"
      />
      <p className="text-blue-800  mb-2 font-bold">{place.region}</p>
      <p className="text-gray-600 text-sm">{place.category}</p>
      <p className="mt-2 font-medium">⭐ {place.rating}</p>
      
      <p className="mb-2 font-bold text-gray-700 whitespace-pre-line">
        {place.description}
      </p>
      {place.rating && <p className="mb-2 font-medium">⭐ {place.rating}</p>}
      {place.bestTime && (
        <p className="text-blue-600 mb-2 font-bold">Best time to visit: {place.bestTime}</p>
      )}
    </div>
  );
};

export default PlaceDetails;
