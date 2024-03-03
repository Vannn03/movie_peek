import React, { Suspense, useEffect, useState } from "react";
import { getSimilarMovies } from "../../../API/api";
import { Link, useParams } from "react-router-dom";
import SimilarLoader from "../../../components/Loader/SimilarLoader";

// Lazy-loaded component for similar movie cards
const SimilarCards = React.lazy(
  () => import("../../../components/Cards/SimilarCards"),
);

const SimilarMovies = () => {
  const [movieList, setMovieList] = useState([]); // State to store similar movies
  const { id } = useParams(); // Extracting movie ID from URL params

  // Fetch similar movies when the component mounts or movie ID changes
  useEffect(() => {
    getSimilarMovies(id).then((result) => {
      setMovieList(result);
    });
  }, [id]);

  return (
    <div className="px-8 text-white">
      {/* Title for similar movies */}
      <h1 className="mb-6 font-poppins text-3xl font-semibold ss:text-xl">
        Similar Movies
      </h1>
      {/* Displaying similar movie cards */}
      <div className="grid grid-cols-5 gap-6 sm:grid-cols-2">
        {movieList.length === 0 ? (
          // Display message if no results found
          <p className="col-span-5 flex justify-center text-white/50">
            No results found
          </p>
        ) : (
          movieList.map((movie) => (
            <div key={movie.id}>
              {/* Link to the detail page of each similar movie */}
              <Link to={`/movies/detail/${movie.id}`}>
                {/* Lazy-loaded SimilarCards component */}
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

export default SimilarMovies;
