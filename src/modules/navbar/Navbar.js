import { useState } from "react";
import logo from "../../assets/logos/Logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className="nav" aria-label="main">
      <img src={logo} className="nav__img" alt="logo" />
      <ul
        className={`nav__list ${
          mobileNavOpen ? "nav__list--mobile-open" : ""
        }`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Menu</li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <div className="nav--mobile" onClick={toggleMobileNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
