import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResponsiveNavlinks = (props) => {
  // Hook to get current location
  const loc = useLocation();
  // Hook to navigate between routes
  const nav = useNavigate();

  // Function to determine styling based on location
  const HandleLocChange = (location) => {
    return loc.pathname === location
      ? "rounded-sm bg-red-900 hover:bg-opacity-80"
      : "rounded-sm hover:bg-zinc-800";
  };

  // Effect to scroll to the top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);

  return (
    <ul className="flex flex-col gap-4 text-center font-poppins text-white">
      {/* Navigation links with conditional styling */}
      <li
        className={`cursor-pointer px-16 py-3 transition-colors ${HandleLocChange("/home")}`}
        onClick={() => {
          // Navigate to Home route and toggle sidebar
          nav("/home");
          props.setToggleSidebar((prev) => !prev);
        }}
      >
        Home
      </li>
      <li
        className={`cursor-pointer px-16 py-3 transition-colors ${HandleLocChange("/movies")}`}
        onClick={() => {
          // Navigate to Movies route and toggle sidebar
          nav("/movies");
          props.setToggleSidebar((prev) => !prev);
        }}
      >
        Movies
      </li>
      <li
        className={`cursor-pointer px-16 py-3 transition-colors ${HandleLocChange("/genres")}`}
        onClick={() => {
          // Navigate to Genres route and toggle sidebar
          nav("/genres");
          props.setToggleSidebar((prev) => !prev);
        }}
      >
        Genres
      </li>
    </ul>
  );
};

export default ResponsiveNavlinks;
