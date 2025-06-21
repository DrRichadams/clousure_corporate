import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "./components/testimonials";

export default function Home() {
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
      </main>
    </div>
  );
}
