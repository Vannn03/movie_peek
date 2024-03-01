import React, { Suspense, useEffect, useState } from "react";
import { getTopRatedMovies } from "../../../API/api";
import { Link } from "react-router-dom";
import TopRatedLoader from "../../../components/Loader/TopRatedLoader";

// Lazy loading TopRatedCards component
const TopRatedCards = React.lazy(
  () => import("../../../components/Cards/TopRatedCards"),
);

const TopRated = () => {
  // State to hold the list of top rated movies
  const [movieList, setMovieList] = useState([]);

  // Fetch top rated movies when component mounts
  useEffect(() => {
    getTopRatedMovies().then((result) => {
      setMovieList(result);
    });
  }, []);

  // Limit to display only 8 cards
  const displayedMovies = movieList.slice(0, 8);

  return (
    <div className="bg-zinc-800 p-8 text-white">
      <div className="mx-auto max-w-[75dvw] md:max-w-full">
        {/* Title */}
        <h1 className="mb-6 text-center font-poppins text-2xl font-semibold xs:text-xl">
          Top Rated Movies
        </h1>
        <div className="flex flex-wrap gap-6">
          {/* Render each top rated movie as a card */}
          {displayedMovies.map((movie) => (
            <div
              className="relative w-[225px] flex-auto pt-4 ss:w-[125px]"
              key={movie.id}
            >
              {/* Link to movie details */}
              <Link to={`/movies/detail/${movie.id}`}>
                {/* Lazy-loaded TopRatedCards component */}
                <Suspense fallback={<TopRatedLoader />}>
                  <TopRatedCards movie={movie} />
                </Suspense>
              </Link>
            </div>
          ))}
        </div>
        {/* Button to see all top rated movies (for design only!) */}
        <div className="mt-6 flex justify-center font-poppins">
          <button className="cursor-pointer rounded-sm bg-red-700 px-4 py-2 text-white xs:text-sm">
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
