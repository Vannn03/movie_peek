import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DefaultNavlinks = () => {
  // Hook to get current location
  const loc = useLocation();
  // Hook to navigate between routes
  const nav = useNavigate();

  // Function to determine styling based on location
  const HandleLocChange = (location) => {
    return loc.pathname === location
      ? "border-b-2 border-red-600 text-white"
      : "text-white/60";
  };

  // Effect to scroll to the top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);

  return (
    <ul className="flex flex-1 list-none items-center justify-end gap-10 font-poppins sm:hidden">
      {/* Navigation links with conditional styling */}
      <li
        className={`cursor-pointer ${HandleLocChange("/home")}`}
        onClick={() => nav("/home")}
      >
        Home
      </li>
      <li
        className={`cursor-pointer ${HandleLocChange("/movies")}`}
        onClick={() => nav("/movies")}
      >
        Movies
      </li>
      <li
        className={`cursor-pointer ${HandleLocChange("/genres")}`}
        onClick={() => nav("/genres")}
      >
        Genres
      </li>
    </ul>
  );
};

export default DefaultNavlinks;
