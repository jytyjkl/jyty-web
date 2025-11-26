import styles from "../styles/layout.module.css";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Jyväskylän Teekkariyhdistys</h3>
          <p className={styles["footer-text"]}>
            Rakennamme Jyväskylään oman teekkarikulttuurin – yhteisön, perinteet ja tapahtumat.
          </p>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Pikalinkit</h3>
          <nav className={styles["footer-nav"]}>
            <Link href="/tapahtumat" className={styles["footer-link"]}>Tapahtumat</Link>
            <Link href="/kuulumiset" className={styles["footer-link"]}>Kuulumiset</Link>
            <Link href="/hallitus" className={styles["footer-link"]}>Hallitus</Link>
            <Link href="/saannot" className={styles["footer-link"]}>Säännöt</Link>
            <Link href="/arkisto" className={styles["footer-link"]}>Arkisto</Link>
          </nav>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Yhteystiedot</h3>
          <div className={styles["footer-contact"]}>
            <p className={styles["footer-text"]}>
              <a href="mailto:hallitus@jytyjkl.fi" className={styles["footer-email"]}>hallitus@jytyjkl.fi</a>
            </p>
            <div className={styles["social-links"]}>
              <a
                href="https://www.instagram.com/jyvaskylanteekkarit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles["social-link"]}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@jyvaskylanteekkarit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={styles["social-link"]}
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles["footer-bottom"]}>
        <p>© 2025 Jyväskylän teekkariyhdistys. Kaikki oikeudet pidätetään.</p>
      </div>
    </footer>
  );
}
