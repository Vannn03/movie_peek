import React from "react";

const PopularCards = (props) => {
  // Base image URL for fetching movie poster
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    // Container for each popular movie card
    <div className="flex items-center gap-4 rounded-md p-4 font-poppins transition-colors hover:bg-zinc-800">
      {/* Displaying movie poster */}
      <img
        src={`${baseImgUrl}/${props.movie?.poster_path}`}
        alt="movie-img"
        className="max-w-[75px]"
      />
      {/* Container for movie title and release date */}
      <div className="flex flex-col gap-2">
        {/* Displaying movie title */}
        <h4 className="text-lg md:text-base">{props.movie.title}</h4>
        {/* Displaying movie release date */}
        <p className="text-sm text-white/85">{props.movie.release_date}</p>
      </div>
    </div>
  );
};

export default PopularCards;
