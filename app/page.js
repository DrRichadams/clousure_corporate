import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "./components/testimonials";

export default function Home() {
  const partners = [ "cp.png", "gd.png", "md.png", "tmf.png", "tv.png" ]
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          {/* <Image 
            src="/assets/corporate-logo.png"
            width={0} // required fallback
            height={0} // required fallback
            style={{ width: '1rem', height: 'auto' }}
          /> */}
          <img src="/assets/corporate-logo.png" />
          <ul className={styles.nav_menus}>
            <li>Portifolio</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <Image 
          src="/assets/banner.png" 
          alt="Banner" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </header>
      <main>
        <Testimonials />
        <div className={styles.partners_container}>
            <h3>Our Partners</h3>
            <div className={styles.partners_list}>
              {partners.map(partner => (
                <img src={`/assets/${partner}`} key={partner} />
              ))}
            </div>
        </div>
        <div className={styles.about_us_container}>
          <h3>About Us</h3>
          <div className={styles.about_contents}>
            <p>
              At <span>Closure Corporate Wear</span>, we specialize in designing and supplying high-quality, professional apparel that empowers businesses to present a polished, unified image. From tailored suits to branded uniforms, our garments are crafted with precision, durability, and style in mind.
              <br /><br />
              We understand that what your team wears speaks volumes about your brand. That’s why we work closely with each client to deliver corporate wear solutions that reflect their identity, values, and industry standards.
              <br /><br />
              Whether you’re outfitting a small team or an entire workforce, Closure Corporate Wear is your trusted partner in professional presentation.
            </p>
            <div className={styles.about_vid}>
                <img src="/assets/banner2.png" className={styles.about_pic} />
                <img src="/assets/youtube.png" className={styles.youtube_icon} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
