import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1 text-gray-800">{place.name}</h2>
        <p className="text-gray-600 mb-1">{place.region}</p>
        <p className="text-gray-500 text-sm">{place.category}</p>
        <p className="mt-2 font-medium">Rating: {place.rating}</p>
        <Link
          to={`/place/${place.id}`}
          className="text-blue-600 hover:underline mt-3 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
