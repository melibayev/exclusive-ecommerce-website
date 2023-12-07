import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../../data";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const localStorageWishlist = localStorage.getItem("wishlist");
    if (localStorageWishlist) {
      setWishlist(JSON.parse(localStorageWishlist));
    }
  }, []);

  const addToWishlist = (id) => {
    const wishlistProducts = [...wishlist];
    const isProductExist = wishlistProducts.find((product) => product.id === id);

    if (isProductExist) {
      isProductExist.quantity++;
    } else {
      const product = products.find((product) => product.id === id);
      wishlistProducts.push({ ...product, quantity: 1 });
    }

    setWishlist(wishlistProducts);
    localStorage.setItem("wishlist", JSON.stringify(wishlistProducts));
  };

  const contextValue = {
    wishlist,
    addToWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
