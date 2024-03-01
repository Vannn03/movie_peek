import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12 border-t-2 bg-slate-950 px-8 py-12 font-poppins">
      {/* Subscription section (for design only!)*/}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white ss:text-2xl">
          Enjoying our website?
        </h1>
        <p className="mt-4 text-white/50 ss:text-sm">
          Subscribe to get notified of new upcoming movies!
        </p>
      </div>
      {/* Subscription form */}
      <div className="xs:flex xs:flex-col xs:items-center xs:gap-8 ss:text-sm">
        <input
          type="text"
          placeholder="Email Address"
          className="w-96 border-b-2 border-white/75 bg-transparent pb-1 text-white outline-none transition-colors focus:border-red-500 ss:w-64"
        />
        <button className="rounded-sm border-2 border-white/75 px-4 py-3 text-white/75 transition-colors hover:border-red-500 hover:text-red-500">
          Subscribe
        </button>
      </div>
      {/* Social media icons*/}
      <div className="mt-8 flex gap-8 px-8 text-white xs:gap-4">
        <FaInstagram className="size-10 cursor-pointer rounded-full border-2 bg-pink-700 p-2 ss:size-9" />
        <FaTiktok className="size-10 cursor-pointer rounded-full border-2 bg-black p-2 ss:size-9" />
        <MdOutlineEmail className="size-10 cursor-pointer rounded-full border-2 bg-gray-700 p-2 ss:size-9" />
        <FaWhatsapp className="size-10 cursor-pointer rounded-full border-2 bg-green-700 p-2 ss:size-9" />
        <FaFacebookF className="size-10 cursor-pointer rounded-full border-2 bg-blue-700 p-2 ss:size-9" />
      </div>
    </footer>
  );
};

export default Footer;
