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
      <div className="flex flex-wrap gap-6">
        {movieList.map((movie) => (
          <div className="w-[225px] flex-auto ss:w-[125px]" key={movie.id}>
            {/* Link to the detail page of each similar movie */}
            <Link to={`/movies/detail/${movie.id}`}>
              {/* Lazy-loaded SimilarCards component */}
              <Suspense fallback={<SimilarLoader />}>
                <SimilarCards movie={movie} />
              </Suspense>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
