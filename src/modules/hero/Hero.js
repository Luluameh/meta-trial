import { Link } from "react-router-dom";
import image from "../../assets/images/restaurant.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Little Lemon</h1>
        <span className="hero__location">Chicago</span>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
          ratione itaque, fugiat id quaerat sint labore impedit quo molestiae
          asperiores totam voluptatem! Cumque magni blanditiis odio facilis.
          Voluptate, voluptatem?
        </p>
        <Link to={"/booking"} className="hero__btn" role="button">
          Reserve a Table
        </Link>
      </div>
      <img className="hero__img" src={image} alt="restaurant interior" />
    </section>
  );
};

export default Hero;
