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
      </main>
    </div>
  );
}
