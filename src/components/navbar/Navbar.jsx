import "./NavBar.css";
import logo from "./img/logo.png";
import cart from "./img/cart.png"
import CartLogo from "../misc/CartLogo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">
          <img className="navbar-logo" alt="logo" src={logo}></img>
        </Link>
        <Link to="/cart">
        <img className="navbar-cart-logo" alt="cart" src={cart}></img>
          {/* <CartLogo className="navbar-cart-logo" /> */}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
