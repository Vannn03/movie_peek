import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/scrollbar"; // Import Swiper scrollbar styles
import { Scrollbar } from "swiper/modules"; // Import Swiper scrollbar module
import React, { Suspense, useEffect, useState } from "react";
import { getCreditsMovie } from "../../../API/api";
import { useParams } from "react-router-dom";
import CastLoader from "../../../components/Loader/CastLoader";

// Lazy loading CastCards component
const CastCards = React.lazy(
  () => import("../../../components/Cards/CastCards"),
);

const Casts = () => {
  // State variable to store credits list
  const [creditsList, setCreditsList] = useState([]);

  // Extracting movie id from URL parameters
  const { id } = useParams();

  // Fetch credits for the movie on component mount
  useEffect(() => {
    getCreditsMovie(id).then((credits) => {
      setCreditsList(credits);
    });
  }, [id]);

  return (
    <div className="px-8">
      {/* Section title */}
      <h1 className="mb-6 font-poppins text-3xl font-semibold text-white ss:text-xl">
        Casts
      </h1>
      {/* Swiper component for displaying cast cards */}
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={25}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
      >
        {/* Mapping over credits list to render each cast card */}
        {creditsList.map((credit, i) => {
          return (
            <SwiperSlide className="max-w-[125px]" key={i}>
              {/* Lazy loaded CastCards component with fallback loader */}
              <Suspense fallback={<CastLoader />}>
                <CastCards credit={credit} />
              </Suspense>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Casts;
