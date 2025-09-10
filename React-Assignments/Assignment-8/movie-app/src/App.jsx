import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [activeGenre, setActiveGenre] = useState(null);

  const API_KEY = "d39c9c33edd215e33c3ecb14fcbe1f2f";
  const BASE_URL = "https://api.themoviedb.org/3";

  const categories = [
    { id: 28, name: "Action" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romantic" },
    { id: 35, name: "Comedy" },
  ];

  const fetchMovies = async (searchQuery, genreId, newPage = 1) => {
    setLoading(true);

    let url = "";
    if (searchQuery) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${newPage}`;
    } else if (genreId) {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${newPage}`;
    } else {
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${newPage}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (newPage === 1) {
      setMovies(data.results || []);
    } else {
      setMovies((prev) => [...prev, ...(data.results || [])]);
    }

    setHasMore(data.page < data.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("", null, 1);
  }, []);

  const handleSearch = () => {
    setPage(1);
    setActiveGenre(null);
    fetchMovies(query, null, 1);
  };

  const handleCategory = (id) => {
    setPage(1);
    setActiveGenre(id);
    setQuery("");
    fetchMovies(null, id, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, activeGenre, nextPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col lg:flex-row">

      <aside className="hidden lg:flex flex-col w-64 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Genres</h2>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategory(cat.id)}
            className={`mb-3 px-4 py-2 rounded-lg font-medium transition ${
              activeGenre === cat.id
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-4 sm:p-6">
        <h1 className="text-center font-extrabold text-3xl sm:text-5xl py-4 mb-8 bg-gradient-to-r from-pink-400 via-purple-200 to-indigo-400 bg-clip-text text-transparent">
          Movie App
        </h1>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-600 bg-gray-800 text-white px-4 py-2 w-72 sm:w-80 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8 lg:hidden">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat.id)}
              className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${
                activeGenre === cat.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading && <p className="text-center text-gray-300">Loading movies...</p>}

        {!movies?.length && !loading ? (
          <p className="text-center text-gray-400">No movies found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => setSelectedMovie(movie)}
              />
            ))}
          </div>
        )}

        {hasMore && !loading && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-bold hover:opacity-90 transition"
            >
              Load More
            </button>
          </div>
        )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </main>
    </div>
  );
};

export default App;
