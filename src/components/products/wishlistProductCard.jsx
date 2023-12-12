import styles from './product.module.scss'
import { FaEye, FaRegTrashAlt, FaStar } from "react-icons/fa";
import { useCart } from '../contexts/cartContext';
import { useWishlist } from '../contexts/wishlist-context';


const WishlistProductCard = ({ name, img, price, rating, id }) => {  
  const { addToCart } = useCart()
  const { removeFromwishlist } = useWishlist()
  return (
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={img} alt="" />
          <div className={styles.addToCart} onClick={() => addToCart(id)}>
            Add To Cart
          </div>
          <div className={styles.delete} onClick={() => removeFromwishlist(id)}>
            <FaRegTrashAlt />
          </div>
          <div className={styles.view}>
          <FaEye />
        </div>
        </div>
        <div className={styles.card__description}>
          <h4>{name}</h4>
          <div className={styles.card__price}>
            <p>{price}$</p>
            <div>
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} color={index < rating ? "#FFAD33" : "gray"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default WishlistProductCard