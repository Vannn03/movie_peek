import React, { Suspense, useEffect, useState } from "react";
import { getNowPlayingMovies, getUpcomingMovies } from "../../../API/api";
import { Link } from "react-router-dom";
import NowAndUpcomingLoader from "./../../../components/Loader/NowAndUpcomingLoader";

// Lazy loading NowAndUpcomingCards component
const NowAndUpcomingCards = React.lazy(
  () => import("../../../components/Cards/NowAndUpcomingCards"),
);

const NowAndUpcoming = () => {
  // State to hold the lists of now playing and upcoming movies
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);

  // Fetch now playing and upcoming movies when component mounts
  useEffect(() => {
    Promise.all([getNowPlayingMovies(), getUpcomingMovies()]).then(
      ([nowPlaying, upcoming]) => {
        setNowPlayingList(nowPlaying);
        setUpcomingList(upcoming);
      },
    );
  }, []);

  // Function to limit the number of displayed cards
  const displayedMovies = (movieType) => {
    return movieType.slice(0, 8);
  };

  return (
    <div className="mx-auto flex w-[75dvw] py-8 sm:flex-col sm:gap-8 lg:mx-0 lg:w-full lg:px-8">
      {/* Section for now playing movies */}
      <div className="w-[50%] border-r-2 border-r-red-800 pr-8 text-white sm:w-full sm:border-b-2 sm:border-r-0 sm:border-b-red-800 sm:pb-8 sm:pr-0">
        <h1 className="mb-6 text-center font-poppins text-2xl font-semibold xs:text-xl">
          Now Playing
        </h1>
        <div className="flex flex-col">
          {/* Render each now playing movie as a card */}
          {displayedMovies(nowPlayingList).map((movie) => (
            <Link to={`/movies/detail/${movie.id}`} key={movie.id}>
              {/* Lazy-loaded NowAndUpcomingCards component */}
              <Suspense fallback={<NowAndUpcomingLoader />}>
                <NowAndUpcomingCards movie={movie} />
              </Suspense>
            </Link>
          ))}
        </div>
        {/* Button to see all now playing movies (for design only!) */}
        <div className="mt-6 flex justify-center font-poppins">
          <button className="cursor-pointer rounded-sm bg-red-700 px-4 py-2 font-medium text-white">
            See all
          </button>
        </div>
      </div>

      {/* Section for upcoming movies */}
      <div className="w-[50%] pl-8 text-white sm:w-full sm:pl-0">
        <h1 className="mb-6 text-center font-poppins text-2xl font-semibold xs:text-xl">
          Upcoming
        </h1>
        <div className="flex flex-col">
          {/* Render each upcoming movie as a card */}
          {displayedMovies(upcomingList).map((movie) => (
            <Link to={`/movies/detail/${movie.id}`} key={movie.id}>
              {/* Lazy-loaded NowAndUpcomingCards component */}
              <Suspense fallback={<NowAndUpcomingLoader />}>
                <NowAndUpcomingCards movie={movie} />
              </Suspense>
            </Link>
          ))}
        </div>
        {/* Button to see all upcoming movies (for design only!) */}
        <div className="mt-6 flex justify-center font-poppins">
          <button className="cursor-pointer rounded-sm bg-red-700 px-4 py-2 font-medium text-white">
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowAndUpcoming;
