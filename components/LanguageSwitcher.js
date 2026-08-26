import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/layout.module.css";
import { getDictionary } from "../lib/i18n";

const HINT_DURATION_MS = 2500;

function DisabledLanguageOption({ label, hint }) {
  const [showHint, setShowHint] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function handleClick() {
    setShowHint(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowHint(false), HINT_DURATION_MS);
  }

  return (
    <span className={styles.languageOptionWrapper}>
      <button
        type="button"
        title={hint}
        aria-disabled="true"
        onClick={handleClick}
        className={`${styles.languageLink} ${styles.languageLinkDisabled} ${styles.languageLinkButton}`}
      >
        {label}
      </button>
      {showHint && (
        <span role="status" className={styles.languageHint}>
          {hint}
        </span>
      )}
    </span>
  );
}

function LanguageOption({ label, isActive, href, disabledTitle }) {
  if (isActive) {
    return (
      <span aria-current="true" className={`${styles.languageLink} ${styles.languageLinkActive}`}>
        {label}
      </span>
    );
  }
  if (!href) {
    return <DisabledLanguageOption label={label} hint={disabledTitle} />;
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
