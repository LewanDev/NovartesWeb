import { useContext } from "react";
import { Context } from "../../context/Context";

const CartTotal = () => {
  const { cart } = useContext(Context);

  const total = cart.reduce(
    (sum, element) => sum + element.price * element.quanty,
    0
  );
  return (
    <>
      <div className="cart-total">
        <h3>Total a pagar: {total}</h3>
      </div>
    </>
  );
};

export default CartTotal;
