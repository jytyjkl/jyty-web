import styles from "../styles/layout.module.css";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { getDictionary, routePath } from "../lib/i18n";

export default function Footer({ locale = "fi" }) {
  const dict = getDictionary(locale);

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>{dict.footer.heading}</h3>
          <p className={styles["footer-text"]}>
            {dict.footer.tagline}
          </p>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>{dict.footer.quickLinks}</h3>
          <nav className={styles["footer-nav"]}>
            <Link href={routePath("events", locale)} className={styles["footer-link"]}>{dict.nav.events}</Link>
            <Link href={routePath("news", locale)} className={styles["footer-link"]}>{dict.nav.news}</Link>
            <Link href={routePath("board", locale)} className={styles["footer-link"]}>{dict.nav.board}</Link>
            <Link href={routePath("rules", locale)} className={styles["footer-link"]}>{dict.nav.rules}</Link>
            <Link href="/arkisto" className={styles["footer-link"]}>{dict.nav.archive}</Link>
          </nav>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>{dict.footer.contact}</h3>
          <div className={styles["footer-contact"]}>
            <p className={styles["footer-text"]}>
              <a href="mailto:hallitus@jytyjkl.fi" className={styles["footer-email"]}>hallitus@jytyjkl.fi</a>
            </p>
            <div className={styles["social-links"]}>
              <a
                href="https://www.instagram.com/jyvaskylanteekkarit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.instagram}
                className={styles["social-link"]}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@jyvaskylanteekkarit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.tiktok}
                className={styles["social-link"]}
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p>{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
