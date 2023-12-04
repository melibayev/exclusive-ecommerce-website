import styles from "./product.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Product = ({ name, img, price, rating, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="" />
        <div className={styles.addToCart}>
          Add To Cart
        </div>
        <div className={styles.like}>
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
