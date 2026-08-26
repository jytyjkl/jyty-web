import Link from "next/link";
import styles from "../styles/layout.module.css";
import { getDictionary } from "../lib/i18n";

function LanguageOption({ label, isActive, href, disabledTitle }) {
  if (isActive) {
    return (
      <span aria-current="true" className={`${styles.languageLink} ${styles.languageLinkActive}`}>
        {label}
      </span>
    );
  }
  if (!href) {
    return (
      <span
        className={`${styles.languageLink} ${styles.languageLinkDisabled}`}
        aria-disabled="true"
        title={disabledTitle}
      >
        {label}
      </span>
    );
  }
  return (
    <Link href={href} className={styles.languageLink}>
      {label}
    </Link>
  );
}

export default function LanguageSwitcher({ locale, alternateHref }) {
  const dict = getDictionary(locale);

  return (
    <div className={styles.languageSwitcher} aria-label="Kieli / Language">
      <LanguageOption
        label="FI"
        isActive={locale === "fi"}
        href={locale === "fi" ? null : alternateHref}
        disabledTitle={dict.common.notTranslated}
      />
      <span className={styles.languageDivider}>·</span>
      <LanguageOption
        label="EN"
        isActive={locale === "en"}
        href={locale === "en" ? null : alternateHref}
        disabledTitle={dict.common.notTranslated}
      />
    </div>
  );
}
