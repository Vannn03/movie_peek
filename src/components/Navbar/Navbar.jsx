import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import DefaultNavlinks from "./Navlinks/DefaultNavlinks";
import ResponsiveNavlinks from "./Navlinks/ResponsiveNavlinks";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  // State variables for toggling sidebar and profile card visibility
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  // State variable for tracking scrolling
  const [scrolled, setScrolled] = useState(false);
  // Hook for navigating between routes
  const nav = useNavigate();

  // Effect for tracking scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to render profile card
  const profileCard = () => {
    return (
      <div
        className={`absolute right-9 top-20 flex flex-col gap-4 rounded-md bg-white/10 p-4 font-poppins shadow-lg ring-1 ring-black/5 backdrop-blur-xl ${
          toggleProfile ? "flex" : "hidden"
        }`}
      >
        <h1 className="text-white">
          Hello,{" "}
          <strong>{localStorage.getItem("username").toUpperCase()}</strong> !
        </h1>
        <button
          className="w-full rounded-sm bg-red-700 px-4 py-3 text-white"
          onClick={() => nav("/")}
        >
          Logout
        </button>
      </div>
    );
  };

  // Function to render sidebar
  const sidebar = () => {
    return (
      <div
        className={`${
          toggleSidebar ? "flex" : "hidden"
        } animate__animated animate__slideInRight animate__faster absolute right-0 top-0 z-50 flex h-dvh flex-col gap-6 bg-zinc-900 p-8`}
      >
        <GrClose
          className="size-7 cursor-pointer text-white"
          onClick={() => setToggleSidebar((prev) => !prev)}
        />

        <div className="flex h-full flex-col justify-between">
          <ResponsiveNavlinks setToggleSidebar={setToggleSidebar} />
          <div className="border-t-2 border-white/50">
            <button
              className="hover:border-white/2 mt-4 w-full rounded-sm border-2 border-white/0 px-4 py-3 font-medium text-red-400 transition-colors hover:bg-white/10"
              onClick={() => nav("/")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 z-50 flex w-dvw items-center justify-between px-8 py-6 transition-colors ${
        scrolled ? "bg-zinc-950" : ""
      }`}
    >
      {/* Logo and default navigation links */}
      <div className="flex gap-10">
        <h1 className="select-none rounded-full bg-red-800 px-5 py-1 text-3xl font-extrabold tracking-tighter text-white">
          MP
        </h1>
        <DefaultNavlinks />
      </div>
      {/* Search icon, profile card, and menu icon */}
      <div className="flex items-center">
        {/* Search icon */}
        <CiSearch
          className="size-11 cursor-pointer rounded-sm p-2 text-white transition-colors hover:bg-white/10"
          onClick={() => nav("/search")}
        />
        {/* Profile card */}
        {profileCard()}
        {/* Menu icon and sidebar */}
        <div className="hidden items-center justify-end sm:flex">
          <div onClick={() => setToggleSidebar((prev) => !prev)}>
            <HiOutlineMenuAlt3 className="size-11 cursor-pointer rounded-sm p-2 text-white transition-colors hover:bg-white/10" />
          </div>
          {sidebar()}
        </div>
        {/* Profile icon and profile card toggle */}
        <IoPersonCircle
          className="ml-2 size-12 cursor-pointer text-white"
          onClick={() => setToggleProfile((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
