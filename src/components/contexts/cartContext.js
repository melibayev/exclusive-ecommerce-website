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
      const parsedCart = JSON.parse(localStorageCart);
      setCart(parsedCart);
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

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

  const getQuantityById = (id) => {
    const product = cart.find((product) => product.id === id);
    return product ? product.quantity : 0;
  };
  

  const contextValue = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getQuantityById,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
