import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies/Movies";
import "animate.css";
import Search from "./pages/Search/Search";
import Footer from './components/Footer/Footer';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Genres from "./pages/Genres/Genres";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current location is the sign-up or sign-in page
  const isSignUpPage = location.pathname === '/';
  const isSignInPage = location.pathname === '/sign-in';

  return (
    <>
      {/* Render Navbar component if not on sign-up or sign-in page */}
      {(!isSignUpPage && !isSignInPage) && <Navbar />}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/detail/:id" element={<DetailMovie />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {/* Render Footer component if not on sign-up or sign-in page */}
      {(!isSignUpPage && !isSignInPage) && <Footer />}
    </>
  );
};

export default App;
