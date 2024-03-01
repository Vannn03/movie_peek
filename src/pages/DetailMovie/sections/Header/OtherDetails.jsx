import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../../../API/api";

const OtherDetails = () => {
  // State variable to store movie details
  const [movieDetails, setMovieDetails] = useState([]);

  // Extracting movie id from URL parameters
  const { id } = useParams();

  // Fetch movie details on component mount
  useEffect(() => {
    getDetailMovie(id).then((details) => {
      setMovieDetails(details);
    });
  }, [id]);

  return (
    <div className="z-10 flex h-full w-1/3 flex-col justify-center gap-4 bg-black/35 p-8 font-poppins text-sm text-white md:h-fit md:w-full">
      {/* Display original title */}
      <p>
        <strong>Original title:</strong> {movieDetails.original_title}
      </p>
      <hr />
      {/* Display tagline (hidden on small screens) */}
      <p className="hidden ss:block">
        <strong>Tagline:</strong> {movieDetails.tagline}
      </p>
      <hr className="hidden ss:block" />
      {/* Display overview (hidden on small screens) */}
      <p className="hidden ss:block">
        <strong>Overview:</strong> {movieDetails.overview}
      </p>
      <hr className="hidden ss:block" />
      {/* Display release date */}
      <p>
        <strong>Release date:</strong> {movieDetails.release_date}
      </p>
      <hr />
      {/* Display genres */}
      <div className="flex items-center gap-1">
        <strong>Genres:</strong>
        <div className="flex flex-wrap gap-2">
          {movieDetails.genres?.map((genre) => {
            return (
              <div
                key={genre.id}
                className="cursor-pointer rounded-full border-2 bg-opacity-75 px-3 py-1 text-xs text-white transition-colors hover:border-red-500 hover:text-red-500"
              >
                {genre.name}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      {/* Display status */}
      <p>
        <strong>Status:</strong> {movieDetails.status}
      </p>
      <hr />
      {/* Display rating */}
      <p>
        <strong>Rating: </strong>
        {`${movieDetails.vote_average?.toFixed(1)} (${movieDetails.vote_count} votes)`}
      </p>
      <hr />
      {/* Display producers */}
      <div className="flex gap-1">
        <strong>Producers: </strong>
        <div className="flex flex-col">
          {movieDetails.production_companies?.map((company) => {
            return (
              <div key={company.id}>
                {`${company.name}, ${company.origin_country}`}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
