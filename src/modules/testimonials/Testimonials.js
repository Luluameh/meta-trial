import TestimonialCard from "./components/TestimonialCard";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import user4 from "../../assets/images/user4.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__row">
        <TestimonialCard
          img={user1}
          rating={4.7}
          name="Ricardo Bonnuci"
          review="The food was excellent, and the service was great!"
        />
        <TestimonialCard
          img={user2}
          rating={4.9}
          name="Mark Altury"
          review="One of the best restaurants in town!"
        />
        <TestimonialCard
          img={user3}
          rating={5.0}
          name="Jackie Willer"
          review="Everything was perfect"
        />
        <TestimonialCard
          img={user4}
          rating={4.6}
          name="George Jacobs"
          review="Would definitely visit again."
        />
      </div>
    </section>
  );
};

export default Testimonials;
