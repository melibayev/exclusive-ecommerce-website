import styles from './LoginP.module.scss'
import PAGEIMG from '../../assets/images/login_img.png'
import { NavLink } from 'react-router-dom'

const LoginP = () => {
  return (
    <>
    <div id={styles.login}>
        <div className="container">
            <div className={styles.login}>
                <div className={styles.login_img}>
                    <img src={PAGEIMG} alt="" />
                </div>
                <div className={styles.login_info}>
                    <h2>Log in to Shopify</h2>
                    <p>Enter your details below</p>
                    <form>
                        <input type="email"placeholder='Your Email' />
                        <input type="password" placeholder='Password'/>
                        <button>Login</button>
                    </form>
                    <p>Do not have an account? <NavLink to={'/sign-up'}><span>Sign Up</span></NavLink></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginP