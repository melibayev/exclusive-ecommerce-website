import styles from './SignUpP.module.scss'
import PAGEIMG from '../../assets/images/login_img.png'
import GOOGLEICON from '../../assets/images/Icon-Google.svg'
import { NavLink } from 'react-router-dom'

const SignUpP = () => {
  return (
    <>
    <div id={styles.sign_up}>
        <div className="container">
            <div className={styles.sign_up}>
                <div className={styles.sign_up_img}>
                    <img src={PAGEIMG} alt="" />
                </div>
                <div className={styles.sign_up_info}>
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form>
                        <input type="text" placeholder='Name'/>
                        <input type="email"placeholder='Email' />
                        <input type="password" placeholder='Password'/>
                        <button>Create Account</button>
                        <button>
                            <img src={GOOGLEICON} alt="" />
                            <p>Sign up with Google</p>
                        </button>
                    </form>
                    <p>Already have account? <NavLink to={'/login'}><span>Log in</span></NavLink></p>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default SignUpP