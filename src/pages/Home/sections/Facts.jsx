import { MdMoneyOff } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaPhotoFilm } from "react-icons/fa6";
import { motion } from "framer-motion";

const Facts = () => {
  return (
    // Container for facts section
    <div className="mx-8 flex h-dvh flex-col items-center justify-center gap-28 sm:h-full sm:pb-20 md:gap-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="text-4xl font-bold tracking-wider text-white/85 md:text-2xl"
      >
        WHY CHOOSE US?
      </motion.h1>
      {/* Facts section */}
      <div className="flex w-[75dvw] gap-12 text-center font-poppins text-white  sm:flex-col sm:items-center lg:w-full">
        {/* Fact: Completely Free Access */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex w-1/3 flex-col items-center gap-4 sm:w-full"
        >
          <MdMoneyOff className="size-28 text-green-500 md:size-20" />
          <h3 className="mt-2 text-2xl font-semibold text-red-500 md:text-xl">
            Completely Free Access
          </h3>
          <p className="text-lg leading-relaxed md:text-sm">
            Enjoy unlimited access to all movies without any cost barriers
          </p>
        </motion.div>
        {/* Fact: Comprehensive Collection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex w-1/3 flex-col items-center gap-4 sm:w-full"
        >
          <FaPhotoFilm className="size-28 text-blue-500 md:size-20" />
          <h3 className="mt-2 text-2xl font-semibold text-red-500 md:text-xl">
            Comprehensive Collection
          </h3>
          <p className="text-lg leading-relaxed md:text-sm">
            Whether you are searching for classic films, the latest
            blockbusters, or other popular movies, you can find them all in one
            place
          </p>
        </motion.div>
        {/* Fact: Ad-Free Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex w-1/3 flex-col items-center gap-4 sm:w-full"
        >
          <RiAdvertisementFill className="size-28 text-yellow-500 md:size-20" />
          <h3 className="mt-2 text-2xl font-semibold text-red-500 md:text-xl">
            Ad-Free Experience
          </h3>
          <p className="text-lg leading-relaxed md:text-sm">
            Immerse yourself in your chosen content without any distractions,
            allowing for an immersive and enjoyable entertainment experience
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Facts;
