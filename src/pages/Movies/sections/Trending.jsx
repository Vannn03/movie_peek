import React, { Suspense, useEffect, useState } from "react";
import { getTrendingMovies } from "../../../API/api";
import CarouselLoader from "../../../components/Loader/CarouselLoader";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Lazy loading TrendingCards component
const TrendingCards = React.lazy(
  () => import("../../../components/Cards/TrendingCards"),
);

const Trending = () => {
  // State to hold the list of trending movies
  const [movieList, setMovieList] = useState([]);

  // Fetch trending movies when component mounts
  useEffect(() => {
    getTrendingMovies().then((result) => {
      setMovieList(result);
    });
  }, []);

  return (
    <>
      {/* Swiper carousel for trending movies */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
      >
        {/* Render each movie as a Swiper slide */}
        {movieList.map((movie, i) => (
          <SwiperSlide key={movie.id}>
            {/* Lazy-loaded TrendingCards component */}
            <Suspense fallback={<CarouselLoader />}>
              <TrendingCards movie={movie} index={i} />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Trending;
