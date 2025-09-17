import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white">
      <img src={place.image} alt={place.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1 text-gray-800">{place.name}</h2>
        <Link to={`/place/${place.id}`} className="text-blue-600 hover:underline mt-3 inline-block">View Details →</Link>
      </div>
    </div>
  );
};

export default PlaceCard;
