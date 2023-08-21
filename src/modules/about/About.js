import staff1 from "../../assets/images/Mario and Adrian A.jpg";
import staff2 from "../../assets/images/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__heading">Little Lemon</h2>
        <h3 className="about__location">Chicago</h3>
        <p className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          numquam neque exercitationem ipsa, et nulla amet. Blanditiis, rerum!
          Veniam, consequatur repellendus impedit cum possimus rem aliquam
          nostrum! Quos, laboriosam facilis.
        </p>
      </div>
      <div className="about__img-container">
        <img src={staff1} className="about__img about__img--1" alt="staff" />
        <img src={staff2} className="about__img about__img--2" alt="staff" />
      </div>
    </section>
  );
};

export default About;
