import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../../../API/api";

const BackgroundDetail = () => {
  // State variable to store movie details
  const [movieDetails, setMovieDetails] = useState([]);

  // Extracting movie id from URL parameters
  const { id } = useParams();

  // Base image URL
  const baseImgUrl = process.env.REACT_APP_BASE_IMG_URL;

  // Fetch movie details on component mount
  useEffect(() => {
    getDetailMovie(id).then((details) => {
      setMovieDetails(details);
    });
  }, [id]);

  return (
    <>
      {/* Background image */}
      <img
        src={`${baseImgUrl}/${movieDetails.backdrop_path}`}
        alt="backdrop"
        className="absolute top-0 h-[75dvh] w-dvw object-cover md:h-full"
      />
      {/* Overlay for background */}
      <div className="absolute top-0 h-[75dvh] w-full bg-black/70 md:h-full" />
    </>
  );
};

export default BackgroundDetail;
