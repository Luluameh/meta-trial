import deliveryLogo from "../../../assets/logos/Basket.svg";

const DishCard = ({ img, alt, title, price, desc }) => {
  return (
    <div className="dish-card">
      <img className="dish-card__image" src={img} alt={alt} />
      <div className="dish-card__details">
        <div>
          <h3 className="dish-card__title">{title}</h3>
          <span className="dish-card__price">{price}</span>
        </div>
        <p className="dish-card__desc">{desc}</p>
        <a className="dish-card__order" href="">
          Order a delivery <img src={deliveryLogo} />
        </a>
      </div>
    </div>
  );
};

export default DishCard;
