import About from "../../modules/about/About";
import Footer from "../../modules/footer/Footer";
import Hero from "../../modules/hero/Hero";
import Navbar from "../../modules/navbar/Navbar";
import Specials from "../../modules/specials/Specials";
import Testimonials from "../../modules/testimonials/Testimonials";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
