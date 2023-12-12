import styles from './ContactP.module.scss'

import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


const ContactP = () => {
  return (
    <section id={styles.contact}>
        <div className="container">
            <div className={styles.contact_title}>
                <p>Home</p>
                <p>/</p>
                <p>Contact</p>
            </div>
            <div className={styles.contact}>
                <div className={styles.contact_info}>
                    <div className={styles.contact_info_call_us}>
                        <div className={styles.contact_info_call_us_logo}>
                            <div><FiPhone /></div>
                            <p>Call To Us</p>
                        </div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div className={styles.contact_info_write_us}>
                        <div className={styles.contact_info_write_us_logo}>
                            <div><CiMail /></div>
                            <p>Write To Us</p>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@shopify.com</p>
                    </div>
                </div>
                <div className={styles.contact_message}>
                    <form>
                        <div className={styles.form_info}>
                            <input type="text" placeholder='Your Name' required/>
                            <input type="text" placeholder='Your Email' required/>
                            <input type="text" placeholder='Your Phone' required/>
                        </div>
                        <textarea placeholder='Your Massage'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactP