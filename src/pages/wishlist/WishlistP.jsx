import { FaRegHeart } from "react-icons/fa";


import styles from './WishlistP.module.scss'
import  WishlistProductCard  from '../../components/products/wishlistProductCard'
import { useWishlist } from '../../components/contexts/wishlist-context'
import { NavLink } from "react-router-dom";
const WishlistP = () => {
  const { wishlist } = useWishlist()
  const wishlistTotal = wishlist.length
  window.scrollTo({top: 0})
  return (
    <section id={styles.wishlist}>
        <div className="container">
            {wishlistTotal < 1 && 
              <div className={styles.wishlist__subtitle}>
                <h4>Wishlist</h4>
                <FaRegHeart />
                <p>You haven't added products to your Wishlist yet</p>
                <span>This list will contain products that interest you.</span>
                <NavLink to={'/'}><button>Go to catalog</button></NavLink>
              </div>
            }
            { wishlistTotal > 0 &&
              <>
              <div className={styles.wishlist__title}>
                <p>Wishlist ({wishlistTotal})</p>
              </div>
              <div className={styles.wishlist__products}>
                  {wishlist.map(product => (
                    <WishlistProductCard {...product} key={product.id}/>
                  ))}
              </div>
              </>
            }
        </div>
    </section>
  )
}

export default WishlistP