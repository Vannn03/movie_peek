import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie, getTrailerMovie } from "../../../../API/api";
import { FaPlay } from "react-icons/fa";

const MainDetails = () => {
  // State variables to store movie details and trailer list
  const [movieDetails, setMovieDetails] = useState([]);
  const [trailerList, setTrailerList] = useState([]);

  // Extracting movie id from URL parameters
  const { id } = useParams();

  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  // Fetch movie details and trailer on component mount
  useEffect(() => {
    Promise.all([getDetailMovie(id), getTrailerMovie(id)]).then(
      ([details, trailer]) => {
        setMovieDetails(details);
        setTrailerList(trailer);
      },
    );
  }, [id]);

  // Function to display flag image based on original language
  const flagImage = () => {
    const flags = {
      en: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      ko: "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
      ja: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
      hi: "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
      cn: "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
      es: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
      id: "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png",
      ms: "https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png",
      fr: "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",
    };

    let flagUrl = "";

    switch (movieDetails.original_language) {
      case "en":
        flagUrl = flags.en;
        break;
      case "ko":
        flagUrl = flags.ko;
        break;
      case "ja":
        flagUrl = flags.ja;
        break;
      case "hi":
        flagUrl = flags.hi;
        break;
      case "cn":
        flagUrl = flags.cn;
        break;
      case "es":
        flagUrl = flags.es;
        break;
      case "id":
        flagUrl = flags.id;
        break;
      case "ms":
        flagUrl = flags.ms;
        break;
      case "fr":
        flagUrl = flags.fr;
        break;
      default:
        flagUrl = "";
    }
    return <img src={flagUrl} alt="flag" className="h-4 w-6" />;
  };

  // Function to find trailer URL
  const findTrailer = () => {
    return trailerList.find(
      (element) =>
        element.name.includes("Official Trailer") ||
        element.name.includes("Trailer"),
    )?.key;
  };

  return (
    <div className="z-10 flex w-2/3 items-start gap-8 pl-40 font-poppins ss:flex-col ss:items-center md:w-full md:pt-24 xl:px-20">
      {/* Display movie poster */}
      <img
        src={`${baseImgUrl}/${movieDetails.poster_path}`}
        alt="backdrop"
        className="w-[175px]"
      />
      <div className="flex flex-col gap-4 ss:items-center">
        {/* Display movie title */}
        <h1 className="text-4xl font-semibold text-white/90 ss:text-center lg:text-2xl">
          {movieDetails.title}
        </h1>
        {/* Display original language and tagline */}
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            {flagImage()}
            <p className="font-medium text-white/50 lg:text-sm">
              {movieDetails.original_language?.toUpperCase()}
            </p>
          </div>
          <h3 className="font-medium italic text-white/50 ss:hidden lg:text-sm">
            {movieDetails.tagline}
          </h3>
        </div>
        {/* Display overview */}
        <div className="mt-4 w-20 border-4 border-red-500 ss:hidden" />
        <p className=" text-white/90 ss:hidden lg:text-sm">
          {movieDetails.overview}
        </p>
        {/* Display watch trailer button */}
        <div className="mt-2 flex">
          <a
            href={`https://www.youtube.com/watch?v=${findTrailer()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center rounded-sm bg-red-700 px-4 py-3 text-white"
          >
            <FaPlay className="mr-2 inline size-3" />
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
