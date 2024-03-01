import React, { Suspense, useEffect, useState } from "react";
import { searchMovie, getPopularMovies } from "../../API/api";
import { Link } from "react-router-dom";
import SimilarLoader from "./../../components/Loader/SimilarLoader";
import { CiSearch } from "react-icons/ci";

// Lazy loading SimilarCards component
const SimilarCards = React.lazy(
  () => import("./../../components/Cards/SimilarCards"),
);

const Search = () => {
  // State to hold the list of movies
  const [movieList, setMovieList] = useState([]);

  // Fetch popular movies when component mounts
  useEffect(() => {
    getPopularMovies(1).then((result) => {
      setMovieList(result);
    });
  }, []);

  // Function to search for movies based on query
  const search = async (q) => {
    if (q.length >= 3) {
      const query = await searchMovie(q);
      setMovieList(query.results);
    }
  };

  return (
    <div className="flex flex-col bg-zinc-900 pb-8">
      {/* Search input */}
      <div className="mb-6 rounded-b-3xl bg-zinc-800 px-8 pt-28">
        <div className={`mb-6 flex items-center rounded-sm bg-white`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-sm px-4 py-3 font-poppins text-sm outline-none"
            onChange={({ target }) => search(target.value)}
          />
          <CiSearch className="mr-3 size-5 text-slate-500" />
        </div>
      </div>
      {/* Movie list */}
      <div className="flex flex-wrap gap-6 px-8 font-poppins text-white">
        {movieList.length === 0 ? (
          // Display message if no results found
          <p className="mx-auto h-[80dvh] text-white/50">No results found</p>
        ) : (
          // Render movie cards
          movieList
            .filter(
              //! Due to Drama genre (18) and some keywords being the most movies that contain pornographic characters, we have to remove them to ensure a safe search
              (movie) =>
                !movie.genre_ids.includes(18) &&
                !(
                  movie.title.toLowerCase().includes("porn") ||
                  movie.title.toLowerCase().includes("sex") ||
                  movie.title.toLowerCase().includes("lesbian") ||
                  movie.title.toLowerCase().includes("gay") ||
                  movie.title.toLowerCase().includes("romance")
                ),
            )
            .map((movie) => (
              <div
                className="min-w-[200px] max-w-[300px] flex-1 ss:min-w-[125px] ss:max-w-[200px]"
                key={movie.id}
              >
                {/* Link to movie details */}
                <Link to={`/movies/detail/${movie.id}`}>
                  {/* Lazy-loaded movie card */}
                  <Suspense fallback={<SimilarLoader />}>
                    <SimilarCards movie={movie} />
                  </Suspense>
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Search;
