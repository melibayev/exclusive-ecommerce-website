import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../contexts/cartContext";

import styles from './CartProduct.module.scss'

const CartProduct = ({ name, img, price, rating, id }) => {
const { removeFromCart, increaseQuantity, decreaseQuantity, getQuantityById } = useCart()

const [ productPrice, setProductPrice ] = useState(price) 
const [ productPiece, setProductPiece ] = useState(1)

useEffect(() => {
    const initialQuantity = getQuantityById(id);
    setProductPiece(initialQuantity);
}, [getQuantityById, id]);


const updateProductPrice = (quantity) => {
    setProductPrice(price * quantity);
};

const increase = () => {
    let productCounter = productPiece + 1;
    setProductPiece(productCounter)
    updateProductPrice(productCounter);
    increaseQuantity(id)
}
const decrease = () => {
    let productCounter = Math.max(productPiece - 1, 1);
    setProductPiece(productCounter)
    updateProductPrice(productCounter);
    decreaseQuantity(id)
}

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
                <p>{price}$</p>
            </div>
            <div className={styles.product_piece}>
                <button onClick={decrease}>-</button>
                <div>{productPiece}</div>
                <button onClick={increase}>+</button>
            </div>
            <div className={styles.product_totalPrice}>
                <span>Total</span>
                <p>{productPrice}$</p>
            </div>
            <div className={styles.product_delete} onClick={() => removeFromCart(id)}>
                <FaRegTrashAlt />
            </div>
        </div>
    </>
  )
}

export default CartProduct