import DishCard from "./components/DishCard";
import greekSalad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/restauranfood.jpg";
import lemonDessert from "../../assets/images/lemon dessert.jpg";

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials__header">
        <h2 className="specials__heading">Specials</h2>
        <button className="specials__btn">Online Menu</button>
      </div>
      <div className="specials__row">
        <DishCard
          img={greekSalad}
          alt="greek salad"
          title="Greek Salad"
          price="$12.99"
          desc="A traditional Greek salad consisting of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."
        />
        <DishCard
          img={bruchetta}
          alt="bruchetta"
          title="Bruchetta"
          price="$5.99"
          desc="A starter dish from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. "
        />
        <DishCard
          img={lemonDessert}
          alt="lemon dessert"
          title="Lemon Dessert"
          price="$5.00"
          desc="Lemon Lush is a layered dessert with a pecan crust topped with a lemon cheesecake layer and lemon pudding."
        />
      </div>
    </section>
  );
};

export default Specials;
