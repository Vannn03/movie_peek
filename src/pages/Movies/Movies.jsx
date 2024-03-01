import React, { useRef } from "react";
import Trending from "./sections/Trending";
import Popular from "./sections/Popular";
import TopRated from "./sections/TopRated";
import NowAndUpcoming from "./sections/NowAndUpcoming";
import { FaArrowUp } from "react-icons/fa";

const Movies = () => {
  // Ref for the scroll-to-top button
  const linkRef = useRef(null);

  // Function to scroll to the top of the page
  const goTo = () => {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-zinc-900">
      {/* Sections displaying different categories of movies */}
      <Trending />
      <Popular />
      <TopRated />
      <NowAndUpcoming />

      {/* Button to scroll to the top */}
      <button
        ref={linkRef}
        className="fixed bottom-10 right-10 z-30 cursor-pointer rounded-full bg-red-700 p-4 shadow-2xl shadow-gray-600"
        onClick={goTo}
      >
        {/* Icon for scroll-to-top button */}
        <FaArrowUp className="size-8 text-white xs:size-6" />
      </button>
    </div>
  );
};

export default Movies;
