import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "./components/testimonials";
import Portifolio from "./components/portifolio";
import Link from "next/link";

export default function Home() {
  const partners = [ "cp.png", "gd.png", "md.png", "tmf.png", "tv.png" ]
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <img src="/assets/corporate-logo.png" />
          <ul className={styles.nav_menus}>
            <li><Link href="#portifolio">Portifolio</Link></li>
            <li><Link href="#about_us">About Us</Link></li>
            <li><Link href="#contact_us">Contact Us</Link></li>
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
        <div className={styles.about_us_container} id="about_us">
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
        <Portifolio />
      </main>
      <footer className={styles.footer} id="contact_us">
        <h3>Contact Us</h3>
        <p>Have a question or need a quote? We’re here to help. Get in touch with Closure Corporate Wear today and let’s dress your team for success.</p>
        <p>Location: 201 Samora Machel Ave, Eastlea, Harare, Zimbabwe</p>
        <p>Email: closurecooperatewear@gmail.com</p>
        <p>Phone: +263 77 963 4319</p>
      </footer>
    </div>
  );
}
