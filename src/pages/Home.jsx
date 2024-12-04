import React, { useEffect, useState } from "react";
import useMovies from "../hooks/useMovies";
import Loader from "../components/Loader";
import MovieSlider from "../components/MovieSlider";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { nowPlaying, popular, topRated, upcoming, loading } = useMovies();
  const [query, setQuery] = useState("");

  const filteredMovies = popular.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.title = "Cinema Online";
  }, []);

  return (
    <div className="px-4 py-10 mt-32 md:px-32">
      <SearchBar query={query} setQuery={setQuery} />
      {query.length >= 3 && (
        <div className="w-full mb-8">
          <h2 className="mb-4 text-2xl font-bold">Hasil pencarian</h2>

          {filteredMovies.length > 0 ? (
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-5 xl:grid-cols-7">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-500">
              No movies found for "{query}".
            </p>
          )}
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MovieSlider movies={nowPlaying} title="Now Playing" />
          <MovieSlider movies={popular} title="Popular" />
          <MovieSlider movies={topRated} title="Top Rated" />
          <MovieSlider movies={upcoming} title="Upcoming" />
        </div>
      )}
      {query && filteredMovies.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No movies found for "{query}".
        </p>
      )}
    </div>
  );
};

export default Home;
