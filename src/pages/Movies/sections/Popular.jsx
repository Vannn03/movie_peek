import React, { Suspense, useEffect, useState } from "react";
import { getPopularMovies } from "../../../API/api";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import PopularLoader from "../../../components/Loader/PopularLoader";

// Lazy loading PopularCards component
const PopularCards = React.lazy(
  () => import("../../../components/Cards/PopularCards"),
);

const Popular = () => {
  // State to hold the list of popular movies
  const [movieList, setMovieList] = useState([]);
  // Access swiper instance
  const popularSwiper = useSwiper();

  // Fetch popular movies when component mounts
  useEffect(() => {
    getPopularMovies(1).then((result) => {
      setMovieList(result);
    });
  }, []);

  return (
    <div className="relative p-8 text-white">
      <div className="mb-6 flex items-center justify-between">
        {/* Title */}
        <h1 className="font-poppins text-2xl font-semibold xs:text-xl">
          Popular Movies
        </h1>
        {/* Button to see all popular movies (for design only!) */}
        <button className="cursor-pointer rounded-sm bg-red-700 px-4 py-2 font-poppins font-medium text-white">
          See all
        </button>
      </div>
      <div className="flex gap-2">
        {/* Swiper carousel for popular movies */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={"auto"}
          grabCursor={true}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            clickable: true,
          }}
        >
          {/* Render each popular movie as a Swiper slide */}
          {movieList.map((movie) => (
            <SwiperSlide className="max-w-[500px]" key={movie.id}>
              {/* Link to movie details */}
              <Link to={`/movies/detail/${movie.id}`}>
                {/* Lazy-loaded PopularCards component */}
                <Suspense fallback={<PopularLoader />}>
                  <PopularCards movie={movie} />
                </Suspense>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Buttons for navigation in the carousel */}
        <div className="flex flex-col gap-2">
          {/* Button to navigate to the previous slide */}
          <button
            className="btn-prev h-1/2 rounded-sm bg-zinc-700 px-2 transition-colors hover:bg-red-400 hover:text-black"
            onClick={() => popularSwiper?.slidePrev()}
          >
            <FaChevronLeft className="size-5" />
          </button>
          {/* Button to navigate to the next slide */}
          <button
            className="btn-next h-1/2 rounded-sm bg-zinc-700 px-2 transition-colors hover:bg-red-400 hover:text-black"
            onClick={() => popularSwiper?.slideNext()}
          >
            <FaChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
