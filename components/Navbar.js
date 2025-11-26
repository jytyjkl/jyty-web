import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/layout.module.css";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpenMobile(false);
    router.events?.on("routeChangeComplete", close);
    return () => router.events?.off("routeChangeComplete", close);
  }, [router.events]);

  const isActive = (href) => router.pathname === href;

  function handleDropdownKey(e) {
    if (["Enter"," "].includes(e.key)) {
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
        <Link href="/" className={styles.brand} aria-label="Etusivu">
          <img src="/logo.png" alt="JYTY logo" className={styles.brandLogo} />
          <span className={styles.brandText}>JYTY</span>
        </Link>

        <button
          className={styles.navToggle}
          aria-label={openMobile ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((o) => !o)}
        >
          {openMobile ? "✕" : "☰"}
        </button>

        <nav
          className={`${styles.primaryNav} ${openMobile ? styles.open : ""}`}
          aria-label="Päävalikko"
        >
          <ul className={styles.navList}>
            <li>
              <Link
                href="/tapahtumat"
                className={`${styles.navLink} ${isActive("/tapahtumat") ? styles.active : ""}`}
              >
                Tapahtumat
              </Link>
            </li>
            <li>
              <Link
                href="/hallitus"
                className={`${styles.navLink} ${isActive("/hallitus") ? styles.active : ""}`}
              >
                Hallitus
              </Link>
            </li>
            <li className={styles.dropdown}>
              <button className={styles.navLink} type="button" onKeyDown={handleDropdownKey}>
                Kulttuuri ▾
              </button>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/saannot"
                    className={`${styles.dropdownItem} ${isActive("/saannot") ? styles.active : ""}`}
                  >
                    Säännöt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lakkisaannot"
                    className={`${styles.dropdownItem} ${isActive("/lakkisaannot") ? styles.active : ""}`}
                  >
                    Lakkisäännöt
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <button className={styles.navLink} type="button" onKeyDown={handleDropdownKey}>
                Arkisto ▾
              </button>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/arkisto"
                    className={`${styles.dropdownItem} ${isActive("/arkisto") ? styles.active : ""}`}
                  >
                    Vappumateriaalit
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/kuulumiset"
                className={`${styles.navLink} ${isActive("/kuulumiset") ? styles.active : ""}`}
              >
                Kuulumiset
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
