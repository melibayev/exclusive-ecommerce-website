import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import LOGO from '../../assets/images/navbar_logo.svg'
import LOGO2 from '../../assets/images/navbar_logo2.png'
import LOGO3 from '../../assets/images/navbar_logo3.svg'
import LOGO4 from '../../assets/images/navbar_logo4.svg'


import "./Header.scss";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cartContext";


const Header = () => {
  const { wishlist } = useWishlist()
  const { cart } = useCart()
  const wishlistTotal = wishlist.length
  const cartTotal = cart.length

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrolledDown = currentScrollY > 50 && currentScrollY > prevScrollY;
      setIsScrolled(scrolledDown);

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className={`nav-top ${isScrolled ? "scrolled" : ""}`}>
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
                <NavLink to={'/'} className={'navbar_logo'}>
                  <img src={LOGO4} alt="" />
                  <h1>Shopify</h1>
                </NavLink>
            </div>
            <ul className="navbar-middle">
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink><li>Contact</li></NavLink>
                <NavLink><li>About</li></NavLink>
                <NavLink><li>Sign Up</li></NavLink>
            </ul>
            <ul className="navbar-right">
                <li className="navbar-right-input"><input type="text" placeholder="What are you looking for?" /><CiSearch /></li>
                <NavLink to={'/wishlist'}>
                  <li className="wishlist">
                    <FaRegHeart />
                    {wishlistTotal > 0 && <div className="wishlist_number">{wishlistTotal}</div>}
                  </li>
                  </NavLink>
                <NavLink to={'/cart'}>
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
