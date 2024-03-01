import React from "react";

const SimilarCards = (props) => {
  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    <div className="relative font-poppins">
      {/* Displaying the movie poster */}
      <img src={`${baseImgUrl}/${props.movie.poster_path}`} alt="movie-img" />

      {/* Truncating long titles */}
      <h4 className="mt-2 sm:text-sm">
        {props.movie.title.length > 19
          ? `${props.movie.title.slice(0, 20)}...`
          : props.movie.title}
      </h4>
    </div>
  );
};

export default SimilarCards;
