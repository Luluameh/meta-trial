import Footer from "../../modules/footer/Footer";
import Navbar from "../../modules/navbar/Navbar";
import { Link } from "react-router-dom";
import "./confirmation.css";

const Confirmation = () => {
  return (
    <>
      <Navbar />
      <div className="confirmation">
        <h1 className="confirmation__heading">
          Your reservation has been completed!
        </h1>
        <span className="confirmation__thank-you">
          Thank you for choosing us!
        </span>
        <Link role="button" to="/" className="confirmation__btn">
          Go to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
