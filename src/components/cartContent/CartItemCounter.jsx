import { useContext } from "react";
import { Context } from "../../context/Context";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, addProduct } = useContext(Context);

  const decrease = () => {
    const productExists = cart.find((item) => item.id === product.id);

    productExists.quanty !== 1 &&
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quanty: item.quanty - 1 } : item
      )
    );
  };
  return (
    <>
      <p className="counter-button" onClick={decrease}>➖</p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={() => addProduct(product)}>
        ➕
      </p>
    </>
  );
};

export default CartItemCounter;
