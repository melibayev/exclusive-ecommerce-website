import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../contexts/cartContext";

import styles from './CartProduct.module.scss'

const CartProduct = ({ name, img, price, rating, id }) => {
    const { removeFromCart } = useCart()
  return (
    <>
        <div className={styles.product}>
            <div className={styles.product_img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.product_title}>
                {name}
            </div>
            <div className={styles.product_price}>
                <span>Price for 1 pc</span> 
                <p>{price}</p>
            </div>
            <div className={styles.product_piece}>
                <button>-</button>
                <div>1</div>
                <button>+</button>
            </div>
            <div className={styles.product_totalPrice}>
                <span>Total</span>
                <p>{price}</p>
            </div>
            <div className={styles.product_delete} onClick={() => removeFromCart(id)}>
                <FaRegTrashAlt />
            </div>
        </div>
    </>
  )
}

export default CartProduct