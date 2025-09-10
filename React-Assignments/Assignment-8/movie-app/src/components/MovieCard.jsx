import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-pink-500/30 transition cursor-pointer bg-gradient-to-br from-blue-900/50 via-violet-800/50 to-gray-700/50 backdrop-blur-md border border-gray-700"
      onClick={onClick}
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 sm:h-72 object-cover"
        />
      ) : (
        <div className="w-full h-64 sm:h-72 bg-gray-700 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
      <div className="p-4 sm:p-5">
        <h3 className="font-extrabold text-lg sm:text-xl mb-2 line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
