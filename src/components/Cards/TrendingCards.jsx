import { FaCalendar, FaStar, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getTrailerMovie } from "./../../API/api";
import { useEffect, useState } from "react";

const TrendingCards = (props) => {
  // Hook for navigation
  const nav = useNavigate();
  // State to hold trailer list
  const [trailerList, setTrailerList] = useState([]);
  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  // Fetch trailer list for the movie on component mount
  useEffect(() => {
    getTrailerMovie(props.movie.id).then((result) => {
      setTrailerList(result);
    });
  }, [props.movie.id]); // Dependency on movie ID to fetch correct trailer

  return (
    <div className="relative">
      {/* Background image */}
      <div>
        <img
          src={`${baseImgUrl}/${props.movie.backdrop_path}`}
          alt="trending-movie"
          className="h-[75dvh] w-dvw object-cover"
          loading="lazy"
        />
        {/* Gradient overlays for styling */}
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black/100 via-black/75 to-black/0" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/0 via-black/0 to-zinc-900" />
      </div>

      {/* Content overlay */}
      <div className="absolute top-0 flex h-[75dvh] w-dvw flex-col justify-center gap-5 px-40 font-poppins sm:px-20">
        {/* Trending label */}
        <h3 className="text-xl font-medium text-red-400 sm:text-sm">
          #{props.index + 1} Trending
        </h3>
        {/* Movie title */}
        <h1 className="text-4xl font-semibold text-white sm:text-2xl">
          {props.movie.title}
        </h1>
        {/* Release date and rating */}
        <div className="flex gap-10 text-white">
          <div className="flex items-center gap-2">
            <FaCalendar className="text" />
            <p className="text-lg sm:text-sm">{props.movie.release_date}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <p className="text-lg sm:text-sm">
              {props.movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
        {/* Buttons for watching trailer and viewing details */}
        <div className="mt-5 flex">
          {/* Watch Trailer button */}
          <a
            href={`https://www.youtube.com/watch?v=${
              trailerList.find(
                (element) =>
                  element.name.includes("Official Trailer") ||
                  element.name.includes("Trailer"),
              )?.key
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-sm bg-zinc-700 px-4 py-3 text-white transition-colors hover:bg-red-400 hover:text-black xs:w-fit sm:text-sm"
          >
            Watch Trailer
          </a>
          {/* See Detail button */}
          <button
            className="ml-5 flex items-center rounded-sm  bg-red-700 px-4 py-3 text-left text-white xs:w-fit sm:text-sm"
            onClick={() => nav(`/movies/detail/${props.movie.id}`)}
          >
            See Detail <FaChevronRight className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
