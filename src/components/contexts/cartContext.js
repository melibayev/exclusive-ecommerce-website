import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../../data";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    }
  }, []);

  const addToCart = (id) => {
    const cartProducts = [...cart];
    const isProductExist = cartProducts.find((product) => product.id === id);

    if (isProductExist) {
      isProductExist.quantity++;
    } else {
      const product = products.find((product) => product.id === id);
      cartProducts.push({ ...product, quantity: 1 });
    }

    setCart(cartProducts);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
