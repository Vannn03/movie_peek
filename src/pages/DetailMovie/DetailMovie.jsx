import React, { Suspense, useRef } from "react";
import DetailLoader from "../../components/Loader/DetailLoader";
import Casts from "./sections/Casts";
import Reviews from "./sections/Reviews";
import SimilarMovies from "./sections/SimilarMovies";
import { FaArrowUp } from "react-icons/fa6";

// Lazy-loaded component for the detail header
const DetailHeader = React.lazy(() => import("./sections/Header/DetailHeader"));

const DetailMovie = () => {
  // Ref for scrolling to the top
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
      {/* Suspense for lazy-loaded DetailHeader */}
      <Suspense fallback={<DetailLoader />}>
        <DetailHeader />
      </Suspense>

      {/* Container for various sections */}
      <div className="mx-auto flex w-[75dvw] flex-col gap-8 py-8 ss:pb-0 md:w-full">
        {/* Section for casts */}
        <div className="w-full">
          <Casts />
        </div>
        {/* Section for similar movies */}
        <div className="w-full">
          <SimilarMovies />
        </div>
        {/* Section for reviews */}
        <div className="w-full">
          <Reviews />
        </div>
      </div>

      {/* Button to scroll to top */}
      <button
        className="fixed bottom-10 right-10 z-30 cursor-pointer rounded-full bg-red-700 p-4 shadow-2xl shadow-gray-600"
        onClick={() => goTo(linkRef.current)}
      >
        <FaArrowUp className="size-8 text-white xs:size-6" />
      </button>
    </div>
  );
};

export default DetailMovie;
