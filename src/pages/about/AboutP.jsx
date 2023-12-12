import { Slide } from 'react-awesome-reveal';
import styles from './AboutP.module.scss';

import HOMEBANNER from '../../assets/images/about_banner.png'
import PERSON1 from '../../assets/images/person1.png'
import PERSON2 from '../../assets/images/person2.png'
import PERSON3 from '../../assets/images/person3.png'

import ICON1 from "../../assets/images/icon1.svg";
import ICON2 from "../../assets/images/icon2.svg";
import ICON3 from "../../assets/images/icon3.svg";

const AboutP = () => {
  return (
    <>
       {/* ABOUT US BANNER (start) */}
       <section id={styles.about_us}>
            <div className="container">
                <div className={styles.about_us_title}>
                    <p>Home</p>
                    <p>/</p>
                    <p>About</p>
                </div>
                <div className={styles.about_us_banner}>
                    <div className={styles.about_us_banner_info}>
                        <h1>Our Story</h1>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className={styles.about_us_banner_img}>
                        <img src={HOMEBANNER} alt="" />
                    </div>
                </div>
            </div>
        </section>
       {/* ABOUT US BANNER (end) */}

        {/* COMPANY DETAILS (start) */}
      <section id={styles.company_details}>
        <div className="container">
          <div className={styles.company_details}>
            <Slide direction='up' triggerOnce>
              <div className={styles.company_details_item}>
                <div className={styles.company_details_item_logo}>
                <div className={styles.item}>
                  <img src={ICON1} alt=''/>
                </div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                </div>
                <div className={styles.company_details_item_description}>
                  <h4>FREE AND FAST DELIVERY</h4>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className={styles.company_details_item}>
                <div className={styles.company_details_item_logo}>
                <div className={styles.item}>
                  <img src={ICON2} alt='' />
                </div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                </div>
                <div className={styles.company_details_item_description}>
                  <h4>24/7 CUSTOMER SERVICE</h4>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className={styles.company_details_item}>
              <div className={styles.company_details_item_logo}>
                <div className={styles.item}>
                  <img src={ICON3} alt='' />
                </div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                </div>
                <div className={styles.company_details_item_description}>
                  <h4>MONEY BACK GUARANTEE</h4>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
      {/* COMPANY DETAILS (end) */}

      {/* EMPLOYEE DETAILS (start) */}
      <section id={styles.employee_details}>
        <div className="container">
            <div className={styles.employee_details}>
                <Slide direction='up' triggerOnce>
                <div className={styles.employee}>
                    <div className={styles.employee_img}>
                        <img src={PERSON1} alt="" />
                    </div>
                    <div className={styles.employee_info}>
                        <h4>Tom Cruise</h4>
                        <p>Founder & Chairman</p>
                    </div>
                </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                <div className={styles.employee}>
                    <div className={styles.employee_img}>
                        <img src={PERSON2} alt="" />
                    </div>
                    <div className={styles.employee_info}>
                        <h4>Emma Watson</h4>
                        <p>Managing Director</p>
                    </div>
                </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                <div className={styles.employee}>
                    <div className={styles.employee_img}>
                        <img src={PERSON3} alt="" />
                    </div>
                    <div className={styles.employee_info}>
                        <h4>Will Smith</h4>
                        <p>Product Designer</p>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
      </section>
      {/* EMPLOYEE DETAILS (end) */}
    </>
  )
}

export default AboutP