import "./NavBar.css";
import logo from "./img/logo.png";
import CartLogo from "../misc/CartLogo";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img className="navbar-logo" alt="logo" src={logo}></img>
        <CartLogo />
      </nav>
    </div>
  );
};

export default NavBar;
