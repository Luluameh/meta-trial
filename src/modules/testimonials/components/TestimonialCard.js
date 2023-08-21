const TestimonialCard = ({ rating, img, name, review }) => {
  return (
    <div className="card">
      <img src={img} className="card__img" alt="customer portrait" />
      <div className="card__details">
        <span className="card__name">{name}</span>
        <span className="card__review">"{review}"</span>
        <span className="card__rating">Rating {rating}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
