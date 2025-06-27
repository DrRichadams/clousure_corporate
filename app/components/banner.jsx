"use client"

import styles from "./banner.module.css"
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    const cta_redirect = () => {
        // window.location.href = 'https://api.whatsapp.com/send/?phone=263779634319&text&type=phone_number&app_absent=0';
        window.open('https://api.whatsapp.com/send/?phone=263779634319&text&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer');
    }
  return (
    <header className={styles.main_header}>
      <div className={styles.header_effects}>
        <div className={styles.header_circles}>
            <div className={styles.circle1}>
                <div className={styles.circle2}></div>
            </div>
        </div>
        <div className={styles.header_blobs}>
             <img src="/assets/blob1.png" alt="Blob" className={styles.blob1}/>
             <img src="/assets/blob2.png" alt="Blob" className={styles.blob2}/>
        </div>
      </div>
      <div className={styles.header_contents}>
        <div className={styles.header_top_contents}>
            <div className={styles.header_content_box}>
                <img src="/assets/vest.png" alt="jacket" />
                <h4>Jackets</h4>
                <p>
                    Enhance your team’s professional image with sleek, branded jackets that double as walking billboards—promoting unity and boosting brand visibility wherever they go. 
                </p>
            </div>
            <div className={styles.header_content_box}>
                <img src="/assets/shirt.png" alt="shirt" />
                <h4>Shirts</h4>
                <p>
                    Designed for comfort and cohesion, these shirts foster unity while delivering subtle, cost-effective marketing that leaves a lasting impression .
                </p>
            </div>
        </div>
        <div className={styles.header_middle_contents}>
            <p className={styles.middle_tagline}>Your #1 go to Corporate Wear Brand</p>
            <div className={styles.middle_main_title}>
                <p>Closure</p>
                <p>Corporate</p>
                <p>Wear</p>
            </div>
            <button className={styles.middle_cta} onClick={()=> cta_redirect()}>
                <IoLogoWhatsapp size={25} />
                <p>Get in touch</p>
                <FaArrowRight />
            </button>
        </div>
        <div className={styles.header_bottom_contents}>
            <div className={styles.header_content_box}>
                <img src="/assets/worksuit.png" alt="jacket" />
                <h4>Work suits</h4>
                <p>
                    These durable suits—often featuring flame‑resistant fabrics, reinforced stitching, and hi‑vis accents—protect employees from hazards while ensuring easy identification on site 
                </p>
            </div>
            <div className={styles.header_content_box}>
                <img src="/assets/shirts.png" alt="shirt" />
                <h4>Casual shirts</h4>
                <p>
                    Crafted in soft cotton blends or performance fabrics, these shirts foster team unity while acting as walking advertisements, subtly raising brand visibility wherever they go
                </p>
            </div>
        </div>
        <Swiper
            className={styles.swiper_catalogue}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
                delay: 5000,                  // Slide changes every 5 seconds
                disableOnInteraction: false, // Keeps autoplay running after user interaction
                pauseOnMouseEnter: true,     // Pause when hovering (optional)
            }}
            loop={true}
        >
            <SwiperSlide className={styles.swiper_slider}>
                <div className={styles.header_content_box}>
                    <img src="/assets/vest.png" alt="jacket" />
                    <h4>Jackets</h4>
                    <p>
                        Enhance your team’s professional image with sleek, branded jackets that double as walking billboards—promoting unity and boosting brand visibility wherever they go. 
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slider}>
                <div className={styles.header_content_box}>
                    <img src="/assets/shirt.png" alt="shirt" />
                    <h4>Shirts</h4>
                    <p>
                        Designed for comfort and cohesion, these shirts foster unity while delivering subtle, cost-effective marketing that leaves a lasting impression .
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slider}>
                <div className={styles.header_content_box}>
                    <img src="/assets/worksuit.png" alt="jacket" />
                    <h4>Work suits</h4>
                    <p>
                        These durable suits—often featuring flame‑resistant fabrics, reinforced stitching, and hi‑vis accents—protect employees from hazards while ensuring easy identification on site 
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slider}>
                <div className={styles.header_content_box}>
                    <img src="/assets/shirts.png" alt="shirt" />
                    <h4>Casual shirts</h4>
                    <p>
                        Crafted in soft cotton blends or performance fabrics, these shirts foster team unity while acting as walking advertisements, subtly raising brand visibility wherever they go
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </header>
  )
}

export default Banner
