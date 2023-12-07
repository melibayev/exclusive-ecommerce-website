import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";




import "./Header.scss";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cartContext";
const Header = () => {
  const { wishlist } = useWishlist()
  const { cart } = useCart()
  const wishlistTotal = wishlist.length
  const cartTotal = cart.length

  return (
    <header>
      <nav>
        <div className="nav-top">
          <div className="container">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p>ShopNow</p>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="navbar-left">
                <h1>Exclusive</h1>
            </div>
            <ul className="navbar-middle">
                <NavLink><li>Home</li></NavLink>
                <NavLink><li>Contact</li></NavLink>
                <NavLink><li>About</li></NavLink>
                <NavLink><li>Sign Up</li></NavLink>
            </ul>
            <ul className="navbar-right">
                <li className="navbar-right-input"><input type="text" placeholder="What are you looking for?" /><CiSearch /></li>
                <NavLink>
                  <li className="wishlist">
                    <FaRegHeart />
                    {wishlistTotal > 0 && <div className="wishlist_number">{wishlistTotal}</div>}
                  </li>
                  </NavLink>
                <NavLink>
                  <li className="cart">
                    <FiShoppingCart />
                    {cartTotal > 0 && <div className="cart_number">{cartTotal}</div>}
                  </li>
                </NavLink>
                <button className="hamburger"><RxHamburgerMenu /></button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
