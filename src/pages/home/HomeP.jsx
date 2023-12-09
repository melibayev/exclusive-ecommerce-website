import Countdown from "react-countdown";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
import styles from "./HomeP.module.scss";
import { categories, products } from "../../data";

// IMAGES AND ICONS
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import IPHONE from "../../assets/images/iphone.png";
import APPLE from "../../assets/images/logo.png";
import Product from "../../components/products";
import Category from "../../components/categories";
import MUSICPRODUCT from "../../assets/images/data/pr5.png";
import NEWPRODUCT1 from "../../assets/images/news1.png";
import NEWPRODUCT2 from "../../assets/images/news2.png";
import NEWPRODUCT3 from "../../assets/images/news3.png";
// import NEWPRODUCT4 from "../../assets/images/news4.png";

import ICON1 from "../../assets/images/icon1.svg";
import ICON2 from "../../assets/images/icon2.svg";
import ICON3 from "../../assets/images/icon3.svg";
import { useScrolled } from "../../components/contexts/scrollContext";

// countdown settings
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <span style={{ fontSize: "2rem", color: "green" }}>Sale is over!</span>
    );
  } else {
    const formattedDays = String(days).padStart(2, "0");
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return (
      <div
        className={styles["countdown-container"]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "50px ",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "8px",
            textTransform: "uppercase",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "500" }}>days</p>
          <p
            className={styles["countdown-numbers"]}
            style={{
              fontSize: "32px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}
          >
            {formattedDays}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "8px",
            textTransform: "uppercase",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "500" }}>hours</p>
          <p
            className={styles["countdown-numbers"]}
            style={{
              fontSize: "32px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}
          >
            {formattedHours}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "8px",
            textTransform: "uppercase",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "500" }}>minutes</p>
          <p
            className={styles["countdown-numbers"]}
            style={{
              fontSize: "32px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}
          >
            {formattedMinutes}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "8px",
            textTransform: "uppercase",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "500" }}>seconds</p>
          <p
            className={styles["countdown-numbers"]}
            style={{
              fontSize: "32px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}
          >
            {formattedSeconds}
          </p>
        </div>
      </div>
    );
  }
};
const categoryRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <span style={{ fontSize: "2rem", color: "green" }}>Sale is over!</span>
    );
  } else {
    const formattedDays = String(days).padStart(2, "0");
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return (
      <div
        className={styles["categories-countdown-container"]}
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "50px ",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
          }}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>{formattedDays}</p>
          <p
            className={styles["categories-countdown-numbers"]}
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}>
            days
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
          }}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>
            {formattedHours}
          </p>
          <p
            className={styles["categories-countdown-numbers"]}
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}>
            hours
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
          }}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>
            {formattedMinutes}
          </p>
          <p
            className={styles["categories-countdown-numbers"]}
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}>
            minutes
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
          }}>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>
            {formattedSeconds}
          </p>
          <p
            className={styles["categories-countdown-numbers"]}
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.28px",
              lineHeight: "30px",
            }}>
            seconds
          </p>
        </div>
      </div>
    );
  }
};

// products on sale
const saleProducts = products.slice(0, 8);

// best selling products
const bestSellingProducts = products.slice(-6);

// Carousel settings
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className={styles.nextArrow} onClick={onClick}>
      <FaArrowRightLong />
    </button>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className={styles.prevArrow} onClick={onClick}>
      <FaArrowLeftLong />
    </button>
  );
}
function NextArrowForCategories(props) {
  const { onClick } = props;
  return (
    <button className={styles.nextArrowForCategories} onClick={onClick}>
      <FaArrowRightLong />
    </button>
  );
}
function PrevArrowForCategories(props) {
  const { onClick } = props;
  return (
    <button className={styles.prevArrowForCategories} onClick={onClick}>
      <FaArrowLeftLong />
    </button>
  );
}
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

var settings_for_categories = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  nextArrow: <NextArrowForCategories />,
  prevArrow: <PrevArrowForCategories />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const backToTop = () => {
  window.scrollTo({top: 0})
} 

const HomeP = () => {
  const isScrolled = useScrolled()

  return (
    <>
    {/* Back To Top (start) */}
    <div className={`back_to_top ${isScrolled ? "isScrolled" : ""}`} onClick={backToTop}>
      <FaArrowUp />
    </div>
    {/* Back To Top (end) */}
      {/* HOME BANNER (start) */}
      <section id={styles.home_banner}>
        <div className="container">
          <div className={styles.home_banner}>
              <Slide direction="left" triggerOnce>
            <div className={styles.home_banner_info}>
              <div className={styles.home_banner_info_logo}>
                <img src={APPLE} alt="" />
                <p>Iphone Series</p>
              </div>
              <h1>
                Get $200–$650 in credit toward iPhone 15 when you trade in an
                iPhone 11 or higher.
              </h1>
              <p>Shop Now</p>
            </div>
              </Slide>
              <Slide direction="right" triggerOnce>
            <div className={styles.home_banner_img}>
              <img src={IPHONE} alt="" />
            </div>
            </Slide>
          </div>
        </div>
      </section>
      {/* HOME BANNER (end) */}

      {/* SALE PRODUCTS (start) */}
      <section id={styles.fresh_products}>
        <div className={styles.fresh_products}>
          <div className="container">
            <Slide direction="up" triggerOnce>
              <div className={styles.fresh_products__title}>
                <div></div>
                <h5>Today's</h5>
              </div>
              <div className={styles.fresh_products__subtitle}>
                <h2>Flash Sales</h2>
                <Countdown
                  date={Date.now() + 700_000_000}
                  zeroPadTime={2}
                  renderer={renderer}/>
              </div>
            </Slide>
          </div>
          <Slide direction="up" triggerOnce>
            <div className={styles.products}>
                <Slider {...settings}>
                  {saleProducts.map((card) => (
                    <Product {...card} key={card.id} />
                  ))}
                </Slider>
                <button>View All Products</button>
            </div>
          </Slide>
          <span className={styles.fresh_products_border_line}></span>
        </div>
      </section>
      {/* SALE PRODUCTS (end) */}

      {/* CATEGORIES (start) */}
      <section id={styles.categories}>
        <div className="container">
          <div className={styles.categories}>
            <Slide direction="up" triggerOnce>
              <div className={styles.categories__title}>
                <div></div>
                <h5>Categories</h5>
              </div>
            <div className={styles.categories__subtitle}>
              Browse By Category
            </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className="category__items">
                <Slider {...settings_for_categories}>
                  {categories.map((card) => (
                    <Category {...card} key={card.id} />
                  ))}
                </Slider>
              </div>
            </Slide>
          </div>
        </div>
      </section>
      {/* CATEGORIES (end) */}

      {/* BEST SELLING PRODUCTS (start) */}
      <section id={styles.best_selling}>
        <div className="container">
          <div className={styles.best_selling}>
            <Slide direction="up" triggerOnce>
              <div className={styles.best_selling__title}>
                <div></div>
                <h5>This Month</h5>
              </div>
              <div className={styles.best_selling__subtitle}>
                <h1>Best Selling Products</h1>
                <button>View All</button>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className={styles.best_selling__products}>
                {bestSellingProducts.map((card) => (
                  <Product {...card} key={card.id} />
                ))}
              </div>
            </Slide>
          </div>
        </div>
      </section>
      {/* BEST SELLING PRODUCTS (end) */}

      {/* CATEGORIES AD CARD (start) */}
      <div className={styles.categories_ad_card}>
        <div className="container">
          <div className={styles.categories_ad_card_container}>
            <div className={styles.categories_ad_card_left}>
              <Slide direction="up" triggerOnce><span>Categories</span></Slide>
              <Slide direction="up" triggerOnce><h1>Enhance Your Music Experience</h1></Slide>
              <Slide direction="up" triggerOnce><Countdown
                date={Date.now() + 200_000_000}
                zeroPadTime={2}
                renderer={categoryRenderer}
              /></Slide>
              <Slide direction="up" triggerOnce><button>Buy Now!</button></Slide>
            </div>
            <div className={styles.categories_ad_card_right}>
              <Slide direction="up" triggerOnce><img src={MUSICPRODUCT} alt="" /></Slide>
            </div>
          </div>
        </div>
      </div>
      {/* CATEGORIES AD CARD (end) */}

      {/* NEW PRODUCTS (start) */}
      <section id={styles.new_products}>
        <div className="container">
          <div className={styles.new_products}>
            <Slide direction="up" triggerOnce>
              <div className={styles.new_products__title}>
                <div></div>
                <h5>Featured</h5>
              </div>
            </Slide>
            <div className={styles.new_products__subtitle}>New Arrival</div>
            <div className={styles.new_products_items}>
              <Slide direction="left" triggerOnce>
                <div className={styles.new_products_items_left}>
                  <img src={NEWPRODUCT1} alt="" />
                  <div className={styles.product_info}>
                    <h4>PlayStation 5</h4>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <p>Shop Now</p>
                  </div>
                </div>
              </Slide>
              <div className={styles.new_products_items_right}>
                <Slide direction="right" triggerOnce>
                  <div className={styles.new_products_item_top}>
                    <img src={NEWPRODUCT2} alt="" />
                    <div className={styles.product_info}>
                      <h4>Women’s Collections</h4>
                      <p>
                        Featured woman collections that give you another vibe.
                      </p>
                      <p>Shop Now</p>
                    </div>
                  </div>
                </Slide>
                <div className={styles.new_products_item_container}>
                  <Slide direction="up" triggerOnce>
                    <div className={styles.new_products_item_left_bottom}>
                      <img src={NEWPRODUCT3} alt="" />
                      <div className={styles.product_info}>
                        <h4>Speakers</h4>
                        <p>Amazon wireless speakers</p>
                        <p>Shop Now</p>
                      </div>
                    </div>
                  </Slide>
                  <Slide direction="up" triggerOnce>
                    <div className={styles.new_products_item_right_bottom}>
                        <img src={NEWPRODUCT3} alt="" />
                        <div className={styles.product_info}>
                          <h4>Perfume</h4>
                          <p>GUCCI INTENSE OUD EDP</p>
                          <p>Shop Now</p>
                        </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEW PRODUCTS (end) */}

      {/* COMPANY DETAILS (start) */}
      <section id={styles.company_details}>
        <div className="container">
          <div className={styles.company_details}>
            <Slide direction="up" triggerOnce>
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
    </>
  );
};

export default HomeP;
