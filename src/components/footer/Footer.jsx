import { LuSendHorizonal } from "react-icons/lu";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

// images
import qrcode from '../../assets/images/footer1.png'
import googleIcon from '../../assets/images/footer2.png'
import appstoreIcon from '../../assets/images/footer3.png'

import './Footer.scss'
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cartContext";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { wishlist } = useWishlist()
  const { cart } = useCart()
  const wishlistTotal = wishlist.length
  const cartTotal = cart.length
  return (
    <footer>
      <div className="container">
        <ul className="footer_mobile">
          <li className='footer_mobile_items'>
              <RxHamburgerMenu />
              <p>Catalog</p>
          </li>
          <NavLink to={'/cart'}>
          <li className='footer_mobile_items'>
            <FiShoppingCart />
            <p>Cart</p>
            {cartTotal > 0 && <div className="cart_number">{cartTotal}</div>}
          </li>
          </NavLink>
          <NavLink to={'/wishlist'}>
          <li className='footer_mobile_items'>
            <FaRegHeart />
            <p>Wishlist</p>
            {wishlistTotal > 0 && <div className="wishlist_number">{wishlistTotal}</div>}
          </li>
          </NavLink>
          <li className='footer_mobile_items'>
            <FaRegUser />
            <p>Account</p>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="footer_links">
          <ul className="footer_links_items">
            <li className="footer_links_item"><h1>Shopify</h1></li>
            <li className="footer_links_item"><p>Subscribe</p></li>
            <li className="footer_links_item">
              <input type="email" placeholder='Enter your email'/>
              <LuSendHorizonal />
            </li>
          </ul>
          <ul className="footer_links_items">
            <li className="footer_links_item"><h4>Support</h4></li>
            <li className="footer_links_item"><p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p></li>
            <li className="footer_links_item"><p>exclusive@gmail.com</p></li>
            <li className="footer_links_item"><p>+88015-88888-9999</p></li>
          </ul>
          <ul className="footer_links_items">
            <li className="footer_links_item"><h4>Account</h4></li>
            <li className="footer_links_item"><p>My Account</p></li>
            <li className="footer_links_item"><p>Login / Register</p></li>
            <li className="footer_links_item"><p>Cart</p></li>
            <li className="footer_links_item"><p>Wishlist</p></li>
            <li className="footer_links_item"><p>Shop</p></li>
          </ul>
          <ul className="footer_links_items">
            <li className="footer_links_item"><h4>Quick Link</h4></li>
            <li className="footer_links_item"><p>Privacy Policy</p></li>
            <li className="footer_links_item"><p>FAQ</p></li>
            <li className="footer_links_item"><p>Contact</p></li>
          </ul>
        </div>
        <div className="footer_social_medias">
            <h4>Download App</h4>
            <p>Save $3 with App New User Only</p>
            <div className="social_media_items">
                <div className="social_media_items_left">
                  <img src={qrcode} alt="" />
                </div>
                <div className="social_media_items_right">
                  <img src={googleIcon} alt="" />
                  <img src={appstoreIcon} alt="" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer