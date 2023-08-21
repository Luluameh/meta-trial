import logo from "../../assets/logos/Logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav aria-label="secondary" className="footer__nav">
        <h3 className="footer__heading">Useful Links</h3>
        <ul className="footer__list">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
      </nav>
      <div className="footer_contact">
        <h3 className="footer__heading">Contact</h3>
        <span>3rd Avenue St. Louis</span>
        <span>+889 889 998 9921</span>
        <span>littlelemon@gmail.com</span>
      </div>
      <div className="footer__socials">
        <h3 className="footer__heading">Follow us!</h3>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </footer>
  );
};

export default Footer;
