import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";


import CartProduct from '../../components/cart/CartProduct'
import { useCart } from '../../components/contexts/cartContext'
import styles from './CartP.module.scss'

const CartP = () => {
    const { cart, totalPrice } = useCart()
    
    const submit = (e) => {
        e.preventDefault()
    } 
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
            <>
            <div className={styles.cart}>
                {cart.map(product => (
                    <CartProduct {...product} key={product.id}/>
                ))}
            </div>
            <div className={styles.cart_check}>
                <div className={styles.cart_check_coupon}>
                    <form onSubmit={submit}>
                        <input type="text" placeholder="Coupon Code"/>
                        <button type="submit">Apply Coupon</button>
                    </form> 
                </div>
                <div className={styles.cart_check_checkout}>
                    <h4>Cart Total</h4>
                    <p>Subtotal: <span>{totalPrice}</span></p>
                    <p>Shipping: <span>Free</span></p>
                    <p>Total: <span>110$</span></p>
                    <button>Procees to checkout</button>
                </div>
            </div>
            </>
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