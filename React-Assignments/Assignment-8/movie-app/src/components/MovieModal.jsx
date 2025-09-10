import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="rounded-none lg:rounded-2xl overflow-y-auto max-h-screen lg:max-h-[96vh] w-full lg:max-w-4xl h-full lg:h-auto relative shadow-xl bg-gray-900">
        
        <button
          className="absolute top-3 right-3 text-3xl text-white font-extrabold hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-h-80 object-cover"
          />
        )}

        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-600/80 via-violet-700/80 to-gray-700/80 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            {movie.title}
          </h2>
          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            {movie.overview || "No description available."}
          </p>
          <p className="text-gray-300 font-semibold mb-2 text-sm sm:text-base">
            Release Date:{" "}
            <span className="text-gray-100">
              {movie.release_date || "Unknown"}
            </span>
          </p>
          <p className="text-gray-300 font-semibold text-sm sm:text-base">
            Rating:{" "}
            <span className="text-yellow-400">
              {movie.vote_average || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
