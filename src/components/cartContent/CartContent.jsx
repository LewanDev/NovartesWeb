import { useContext } from "react";

import NavBar from "../navbar/NavBar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import { Context } from "../../context/Context";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(Context);
  return (
    <>
      <NavBar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">El carrito está vacío</h2>
      )}
    </>
  );
};

export default CartContent;
