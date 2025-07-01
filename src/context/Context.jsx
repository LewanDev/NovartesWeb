import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quanty: item.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quanty: 1 }]);
    }
  };

  return (
    <Context.Provider value={{ cart, setCart, addProduct }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
