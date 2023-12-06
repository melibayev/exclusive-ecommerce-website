import './Footer.scss'
import { LuSendHorizonal } from "react-icons/lu";

// images
import qrcode from '../../assets/images/footer1.png'
import googleIcon from '../../assets/images/footer2.png'
import appstoreIcon from '../../assets/images/footer3.png'


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_links">
          <ul className="footer_links_items">
            <li className="footer_links_item"><h1>Exclusive</h1></li>
            <li className="footer_links_item"><p>Subscribe</p></li>
            <li className="footer_links_item">
              <input type="text" placeholder='Enter your email'/>
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