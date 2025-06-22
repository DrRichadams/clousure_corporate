'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import styles from "./testimonials.module.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { title: "Weston, HR Manager Global DNA Zimbabwe", catch: "Our team has never looked sharper.", descrip: "We wanted our staff to feel proud in their uniforms, and your designs exceeded expectations. The quality is exceptional, the fit is perfect, and the professional look has elevated our brand image." },
  { title: "Kudzi, Production Manager Closure TV", catch: "Reliable service and top-notch quality.", descrip: "We’ve worked with other suppliers before, but none have delivered the consistency and professionalism we’ve received here. On-time delivery, attention to detail, and a real understanding of what we need in corporate wear." },
  { title: "Nigel, Manager Closure Productions", catch: "Exceptional value for money.", descrip: "We needed durable, stylish corporate wear that could withstand daily use—what we got was much more. Affordable pricing without compromising on quality." },
];

const Testimonials = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.main_title}>Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
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
        {testimonials.map((testimonial, i) => (
        <SwiperSlide key={i} className={styles.slider}>
         <div className={styles.testi_name}> 
            <div></div>
            <h3>{testimonial.title}</h3>
         </div>
          <h2 className={styles.testi_catch}>{testimonial.catch}</h2>
          <p>{testimonial.descrip}</p>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default Testimonials
