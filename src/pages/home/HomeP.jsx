import Countdown from 'react-countdown';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from './HomeP.module.scss';
import FRAME from '../../assets/images/phone_frame.png'
import { products } from '../../data';
import Product from '../../components/products';
import Slider from 'react-slick';


// countdown settings
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span style={{ fontSize: '2rem', color: 'green' }}>Sale is over!</span>;
  } else {
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '50px ' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px', textTransform: 'uppercase'}}>
          <p style={{fontSize: '12px', fontWeight: '500'}}>days</p>
          <p style={{fontSize: '32px', fontWeight: '600', letterSpacing: '1.28px', lineHeight: '30px'}}>{formattedDays}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px', textTransform: 'uppercase'}}>
          <p style={{fontSize: '12px', fontWeight: '500'}}>hours</p>
          <p style={{fontSize: '32px', fontWeight: '600', letterSpacing: '1.28px', lineHeight: '30px'}}>{formattedHours}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px', textTransform: 'uppercase'}}>
          <p style={{fontSize: '12px', fontWeight: '500'}}>minutes</p>
          <p style={{fontSize: '32px', fontWeight: '600', letterSpacing: '1.28px', lineHeight: '30px'}}>{formattedMinutes}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px', textTransform: 'uppercase'}}>
          <p style={{fontSize: '12px', fontWeight: '500'}}>seconds</p>
          <p style={{fontSize: '32px', fontWeight: '600', letterSpacing: '1.28px', lineHeight: '30px'}}>{formattedSeconds}</p>
        </div>
      </div>
    );
  }
};

// products on sale
const saleProducts = products.slice(0, 8)


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
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
};



const HomeP = () => {
  return (
    <>
    <section id={styles.home_banner}>
        <div className="container">
            <div className={styles.home_banner}>
                <img src={FRAME} alt="" />
            </div>
        </div>
    </section>
    
    <section id={styles.fresh_products}>
        <div className="container">
          <div className={styles.fresh_products__title}>
              <div></div>
              <h5>Today's</h5>
          </div>
          <div className={styles.fresh_products__subtitle}>
              <h2>Flash Sales</h2>
              <Countdown date='2023-12-05T03:00:03'
              zeroPadTime={2}
              renderer={renderer} />
          </div>
        </div>
        <div className={styles.products}>
          <Slider {...settings}>
            {saleProducts.map(card => (
              <Product {...card}/>
            ))}
        </Slider>
        <button>View All Products</button>
        </div>
    </section>
    </>
  )
}

export default HomeP