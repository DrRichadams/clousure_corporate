import styles from "./nav.module.css"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <img src="/assets/corporate-logo.png" />
            <ul className={styles.nav_menus}>
            <li><Link href="#portifolio">Portifolio</Link></li>
            <li><Link href="#about_us">About Us</Link></li>
            <li><Link href="#contact_us">Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
