const Hero = () => {
  return (
    // Hero container with flexbox alignment
    <div className="mx-8 flex h-dvh items-center justify-center gap-20 sm:gap-0">
      {/* Left section with text content */}
      <div className="max-w-[40dvw] font-poppins sm:max-w-[100dvw]">
        {/* Title with gradient text effect and animation */}
        <h1 className="animate__animated animate__fadeInRight mb-6 bg-gradient-to-r from-red-600 to-white bg-clip-text text-5xl font-black leading-tight tracking-widest text-transparent md:text-4xl">
          Welcome to Movie Peek!
        </h1>
        {/* Description with animation */}
        <p className="desc-delay animate__animated animate__fadeInRight mb-12 text-xl text-white md:text-lg">
          Dive into a World of Entertainment - Instantly Access Trailers,
          Details, and More with Our Comprehensive Movie Database
        </p>
        {/* Statistics section */}
        <div className="flex text-white">
          {/* Movies count with animation */}
          <div className="movie-delay animate__animated animate__fadeInRight border-r-2 border-white/50 pr-7">
            <h3 className="text-4xl font-bold text-red-500 md:text-3xl">
              978K+
            </h3>
            <p className="font-medium text-slate-400 md:text-sm">Movies</p>
          </div>
          {/* Genres count with animation */}
          <div className="tv-delay animate__animated animate__fadeInRight pl-7">
            <h3 className="text-4xl font-bold text-red-500 md:text-3xl">15+</h3>
            <p className="font-medium text-slate-400 md:text-sm">Genres</p>
          </div>
        </div>
      </div>
      {/* Right section with film roll image (not visible on small screens) */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/Film-rolls-amico.png"}
          alt="film-roll"
          className="animate__animated animate__fadeIn size-[35rem] select-none object-contain sm:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
