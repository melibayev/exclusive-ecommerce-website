import styles from "./product.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { useWishlist } from '../contexts/wishlist-context'
import { useCart } from "../contexts/cartContext";

const Product = ({ name, img, price, rating, id }) => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart()
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="" />
        <div className={styles.addToCart} onClick={() => addToCart(id)}>
          Add To Cart
        </div>
        <div className={styles.like} onClick={() => addToWishlist(id)}>
          <FaRegHeart />
        </div>
        <div className={styles.view}>
          <FaEye />
        </div>
      </div>
      <div className={styles.card__description}>
        <h4>{name}</h4>
        <div className={styles.card__price}>
          <p>{price}</p>
          <div>
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} color={index < rating ? "#FFAD33" : "gray"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
