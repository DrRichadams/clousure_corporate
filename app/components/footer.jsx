import styles from "./footer.module.css"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return(
        <div className={styles.footer} id="contact_us">
            <div className={styles.footer_titles}>
                <h3>Contact Us</h3>
                <p>Have a question or need a quote? We’re here to help. Get in touch with Closure Corporate Wear today and let’s dress your team for success.</p>
            </div>

            <div className={styles.socials_contacts}>
                <div className={styles.footer_contacts}>
                    <p>Location: 201 Samora Machel Ave, Eastlea, Harare, Zimbabwe</p>
                    <p>Email: closurecooperatewear@gmail.com</p>
                    <p>Phone: +263 77 963 4319</p>
                </div>
                <div className={styles.footer_socials}>
                    <h3>Socials</h3>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61572942250391">
                        <FaFacebook size={25} />
                        <p>Closure Corporate Wear </p>
                    </a>
                </div>
            </div>
        </div>
    );
}