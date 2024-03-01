import React from "react";

const TopRatedCards = (props) => {
  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    <div className="relative font-poppins">
      {/* Displaying the vote average */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        {/* Styling the vote average based on rating */}
        <p
          className={`rounded-full px-4 py-1 font-medium ${
            props.movie.vote_average?.toFixed(1) > 8
              ? "bg-green-700"
              : props.movie.vote_average?.toFixed(1) > 6.4
                ? "bg-yellow-700"
                : "bg-red-700"
          }`}
        >
          {props.movie.vote_average?.toFixed(1)}
        </p>
      </div>

      {/* Movie poster */}
      <img
        src={`${baseImgUrl}/${props.movie.poster_path}`}
        alt="popular-movie"
      />

      {/* Gradient overlay for styling */}
      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/0 via-zinc-950/35 to-zinc-950" />

      {/* Movie title */}
      <h4 className="absolute bottom-3 left-3 right-3 xs:text-sm">
        {/* Truncating long titles */}
        {props.movie.title.length > 19
          ? `${props.movie.title.slice(0, 20)}...`
          : props.movie.title}
      </h4>
    </div>
  );
};

export default TopRatedCards;
