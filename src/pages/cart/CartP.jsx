import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";


import CartProduct from '../../components/cart/CartProduct'
import { useCart } from '../../components/contexts/cartContext'
import styles from './CartP.module.scss'

const CartP = () => {
    const { cart } = useCart()
    window.scrollTo({top: 0})

  return (
    <>
    <section id={styles.cart}>
        <div className="container">
            <div className={styles.cart_title}>
                <p>Home</p>
                <p>/</p>
                <p>Cart</p>
            </div>
            { cart.length > 0 && 
            <div className={styles.cart}>
                {cart.map(product => (
                    <CartProduct {...product} key={product.id}/>
                ))}
            </div>
            }
            { cart.length < 1 &&
            <div className={styles.empty_cart}>
                <GiShoppingCart />
                <p>Your cart is empty</p>
                <span> Select the product you need from the catalog online store and add it to cart</span>
                <NavLink to={'/'}><button>Go to catalog</button></NavLink>
            </div>
            }
        </div>
    </section>
    </>
  )
}

export default CartP