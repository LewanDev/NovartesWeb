import { useContext } from "react";
import { Context } from "../../context/Context";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  // const deleteProduct = (id) => {
  //   const newCart = cart.filter((element) => element.id !== id);
  //   setCart(newCart);
  // };

  const deleteProduct = (id) => {
    setCart(cart.filter((element) => element.id !== id));
  };

  if (!Array.isArray(cart)) {
    return <p>Error: Cart data is invalid</p>;
  }

  return (
    <div className="cart-elements-container">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((product) => (
          <div className="product-card-container" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <CartItemCounter product={product} />
            <h4>${product.price * product.quanty}</h4>
            <h3
              onClick={() => deleteProduct(product.id)}
              className="cart-delete-product"
            >
              ❌
            </h3>
          </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CartElements;
