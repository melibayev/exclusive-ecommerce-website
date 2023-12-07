import styles from './WishlistP.module.scss'
import  WishlistProductCard  from '../../components/products/wishlistProductCard'
import { useWishlist } from '../../components/contexts/wishlist-context'
const WishlistP = () => {
  const { wishlist } = useWishlist()
  const wishlistTotal = wishlist.length
  window.scrollTo({top: 0})
  return (
    <section id={styles.wishlist}>
        <div className="container">
            <div className={styles.wishlist__title}>
                <p>Wishlist ({wishlistTotal})</p>
            </div>
            <div className={styles.wishlist__subtitle}>
              {wishlistTotal < 1 && <p>No Items Yet</p>}
            </div>
            <div className={styles.wishlist__products}>
                {wishlist.map(product => (
                  <WishlistProductCard {...product} key={product.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WishlistP