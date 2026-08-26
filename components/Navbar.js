import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/layout.module.css";
import { getDictionary, routePath, homePath } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale = "fi", alternateHref = null }) {
  const [openMobile, setOpenMobile] = useState(false);
  const router = useRouter();
  const dict = getDictionary(locale);
  const eventsHref = routePath("events", locale);
  const boardHref = routePath("board", locale);
  const rulesHref = routePath("rules", locale);
  const capRulesHref = routePath("capRules", locale);
  const newsHref = routePath("news", locale);

  useEffect(() => {
    const close = () => setOpenMobile(false);
    router.events?.on("routeChangeComplete", close);
    return () => router.events?.off("routeChangeComplete", close);
  }, [router.events]);

  const isActive = (href) => router.pathname === href;

  function handleDropdownKey(e) {
    if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle(styles.openDropdown);
    } else if (e.key === "Escape") {
      e.currentTarget.parentElement.classList.remove(styles.openDropdown);
      e.currentTarget.blur();
    }
  }

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link href={homePath(locale)} className={styles.brand} aria-label={dict.nav.home}>
          <img src="/logo.png" alt="JYTY logo" className={styles.brandLogo} />
          <span className={styles.brandText}>JYTY</span>
        </Link>

        <button
          className={styles.navToggle}
          aria-label={openMobile ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((o) => !o)}
        >
          {openMobile ? "✕" : "☰"}
        </button>

        <nav
          className={`${styles.primaryNav} ${openMobile ? styles.open : ""}`}
          aria-label={dict.nav.mainMenu}
        >
          <ul className={styles.navList}>
            <li>
              <Link
                href={eventsHref}
                className={`${styles.navLink} ${isActive(eventsHref) ? styles.active : ""}`}
              >
                {dict.nav.events}
              </Link>
            </li>
            <li className={styles.dropdown}>
              <button
                className={styles.navLink}
                type="button"
                onKeyDown={handleDropdownKey}
              >
                {dict.nav.association} ▾
              </button>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href={boardHref}
                    className={`${styles.dropdownItem} ${isActive(boardHref) ? styles.active : ""}`}
                  >
                    {dict.nav.board}
                  </Link>
                </li>
                <li>
                  <Link
                    href={rulesHref}
                    className={`${styles.dropdownItem} ${isActive(rulesHref) ? styles.active : ""}`}
                  >
                    {dict.nav.rules}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <button
                className={styles.navLink}
                type="button"
                onKeyDown={handleDropdownKey}
              >
                {dict.nav.culture} ▾
              </button>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/arkisto"
                    className={`${styles.dropdownItem} ${isActive("/arkisto") ? styles.active : ""}`}
                  >
                    {dict.nav.archive}
                  </Link>
                </li>
                <li>
                  <Link
                    href={capRulesHref}
                    className={`${styles.dropdownItem} ${isActive(capRulesHref) ? styles.active : ""}`}
                  >
                    {dict.nav.capRules}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScDCByHY9gRwloyc3xe2o4h54Upzh7s56CkYI9OuQsOfzsncg/viewform"
                    className={`${styles.dropdownItem}`}
                  >
                    {dict.nav.capPermit}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={newsHref}
                className={`${styles.navLink} ${isActive(newsHref) ? styles.active : ""}`}
              >
                {dict.nav.news}
              </Link>
            </li>
            <li>
              <LanguageSwitcher locale={locale} alternateHref={alternateHref} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
