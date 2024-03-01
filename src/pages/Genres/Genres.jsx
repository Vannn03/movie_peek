import React, { Suspense, useEffect, useState } from "react";
import { getGenresMovie, getPopularMovies } from "../../API/api";
import { Link } from "react-router-dom";
import SimilarLoader from "./../../components/Loader/SimilarLoader";

const SimilarCards = React.lazy(
  () => import("./../../components/Cards/SimilarCards"),
);

// Genres Component: Displays movies categorized by genres with pagination
const Genres = () => {
  // State variables for managing genre list, movie list, selected genre, and current page
  const [genreList, setGenreList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [page, setPage] = useState(1);

  // Fetch genres and movies when page state changes
  useEffect(() => {
    // Fetch genres and movies based on the selected page
    Promise.all([getGenresMovie(), getPopularMovies(page)]).then(
      ([genres, movies]) => {
        setGenreList(genres);
        setMovieList(movies);
      },
    );
  }, [page]);

  // Function to handle genre selection
  const handleGenreClick = (genreId) => {
    setSelectedGenreId(genreId);
    setPage(1); // Reset page when a new genre is selected
  };

  // Filter movies based on selected genre
  const filteredMovies = selectedGenreId
    ? movieList.filter((movie) => movie.genre_ids.includes(selectedGenreId))
    : [];

  // Function to navigate to the next page
  const nextPage = () => {
    setPage(page + 1);
  };

  // Function to navigate to the previous page
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="bg-zinc-900 pb-8 font-poppins">
      {/* Display genre buttons */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-b-3xl bg-zinc-800 px-8 pb-6 pt-28">
        {genreList.map((genre) => (
          <div
            className={`cursor-pointer rounded-full text-sm ${
              selectedGenreId === genre.id
                ? "border-red-700 bg-red-700"
                : "bg-zinc-700 hover:bg-zinc-600"
            } px-3 py-2 text-white`}
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      {filteredMovies.length > 0 ? (
        <div className="mb-6 flex items-center justify-center gap-4">
          {/* Button to navigate to the previous page */}
          <button
            className={`rounded-sm bg-zinc-700 px-4 py-3 text-white transition-colors hover:bg-red-400 hover:text-black ${page === 1 ? "hidden" : "flex"}`}
            onClick={previousPage}
          >
            Back
          </button>

          <p className="text-white/75">{page}</p>
          {/* Button to navigate to the next page */}
          <button
            className={`rounded-sm bg-red-700 px-4 py-3 text-white`}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ) : (
        <div
          className={`mb-6 flex items-center justify-center gap-4 ${page === 1 ? "hidden" : "flex"}`}
        >
          <button
            className="rounded-sm bg-zinc-700 px-4 py-3 text-white transition-colors hover:bg-red-400 hover:text-black"
            onClick={previousPage}
          >
            Back
          </button>
          <p className="text-white/75">{page}</p>
        </div>
      )}

      <hr className="mx-8 mb-6 border-white/50" />

      {/* Display movies or no results message */}
      <div className="flex flex-wrap gap-6 px-8 font-poppins text-white">
        {filteredMovies.length === 0 ? (
          <div className="mx-auto h-[75dvh]">
            <p className="text-white/50">No results found</p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <div
              className="min-w-[200px] max-w-[300px] flex-1 ss:min-w-[125px] ss:max-w-[200px]"
              key={movie.id}
            >
              <Link to={`/movies/detail/${movie.id}`}>
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

export default Genres;
