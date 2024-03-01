const PopularCards = (props) => {
  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  return (
    <div className="font-poppins">
      {/* Displaying the movie backdrop image */}
      <img
        src={`${baseImgUrl}/${props.movie?.backdrop_path}`}
        alt="popular-movie"
      />
      {/* Displaying movie title and popularity */}
      <div className="mt-3 flex flex-col gap-1 ss:flex-col ss:items-start">
        {/* Displaying movie title */}
        <h4 className="text-lg xs:text-base">{props.movie.title}</h4>
        {/* Displaying movie popularity */}
        <p className="text-sm text-white/75 ss:text-xs">
          <span className="text-red-400">Popularity: </span>
          {props.movie.popularity.toFixed(0)}
        </p>
      </div>
    </div>
  );
};

export default PopularCards;
