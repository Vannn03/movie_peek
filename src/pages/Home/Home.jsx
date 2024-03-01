import "../../App.css";
import Facts from "./sections/Facts";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
      <Hero />
      <Facts />
    </div>
  );
};

export default Home;
