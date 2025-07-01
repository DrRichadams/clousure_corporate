"use client"

import styles from "./nav.module.css"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";

export default function NavBar() {
  const [ mNavOpen, set_mNavOpen ] = useState(false)
  return (
    <>
      <nav className={styles.nav}>
          <img src="/assets/corporate-logo.png" />
              <ul className={styles.nav_menus}>
                <li><Link href="#portifolio">Portifolio</Link></li>
                <li><Link href="#about_us">About Us</Link></li>
                <li><Link href="#contact_us">Contact Us</Link></li>
            </ul>
            <button className={styles.menu_btn} onClick={() => set_mNavOpen(!mNavOpen)}>
              {!mNavOpen ? <GiHamburgerMenu size={25}/>:
              <MdOutlineClose size={25}/>}
            </button>
      </nav> 
      <div className={styles.mobile_nav_list} style={{ display: mNavOpen ? "block":"none" }}>
          <ul>
              <li><Link href="#portifolio" className={styles.mLink}>Portifolio</Link><FaArrowRight /></li>
              <li><Link href="#about_us" className={styles.mLink}>About Us</Link><FaArrowRight /></li>
              <li><Link href="#contact_us" className={styles.mLink}>Contact Us</Link><FaArrowRight /></li>
          </ul>
      </div>
    </>
  )
}

