import React from "react";
import { useParams, Link } from "react-router-dom";
import places from "../data/places";

const PlaceDetails = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));

  if (!place) return <div className="p-6 text-center text-gray-500">Place not found</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{place.name}</h1>
      <p className="text-gray-600 mb-2 font-medium">{place.region}</p>
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-auto rounded-lg mb-4 object-cover shadow-sm"
      />
      <p className="mb-2 text-gray-700">{place.description}</p>
      {place.rating && <p className="mb-2 font-medium">Rating: {place.rating}</p>}
      {place.bestTime && <p className="mb-2 font-medium">Best time to visit: {place.bestTime}</p>}
      {place.mapLink && (
        <a
          href={place.mapLink}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          View on Google Maps
        </a>
      )}
    </div>
  );
};

export default PlaceDetails;
