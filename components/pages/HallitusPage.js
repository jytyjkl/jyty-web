import { useState } from "react";
import styles from "../../styles/hallitus.module.css";
import Layout from "../Layout";
import hallitusData from "../../data/hallitukset.json";
import { getDictionary, routePath } from "../../lib/i18n";

const LEADERSHIP_ROLES = ["chair", "vice_chair", "treasurer", "secretary"];

export default function HallitusPage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const [selectedYear, setSelectedYear] = useState(hallitusData.current);

  const currentHallitus = hallitusData.hallitukset.find(
    (h) => h.year === selectedYear
  );
  const members = currentHallitus ? currentHallitus.members : [];

  const leadership = members.filter((m) => LEADERSHIP_ROLES.includes(m.role));
  const others = members.filter((m) => !LEADERSHIP_ROLES.includes(m.role));

  const availableYears = hallitusData.hallitukset
    .map((h) => h.year)
    .sort((a, b) => b - a);

  return (
    <Layout
      title={dict.board.title}
      description={dict.board.description}
      locale={locale}
      alternateHref={routePath("board", otherLocale)}
    >
      <div className="container-wide stack-gap">
        <header className={styles.pageHeader}>
          <h1 className={styles["hallitus-title"]}>{dict.board.heading}</h1>
          <p className={styles.subtitle}>
            {dict.board.subtitle}
          </p>

          {/* Vuosivalitsin */}
          <div className={styles.yearSelector}>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`${styles.yearButton} ${
                  selectedYear === year ? styles.yearButtonActive : ""
                }`}
              >
                {year}
                {year === hallitusData.current && (
                  <span className={styles.currentBadge}>{dict.common.current}</span>
                )}
              </button>
            ))}
          </div>
        </header>

        {leadership.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {dict.board.leadershipHeading(selectedYear)}
            </h2>
            <div className={styles["hallitus-container"]}>
              {leadership.map((member, i) => (
                <article key={i} className={styles["hallitus-card"]}>
                  <img
                    src={`/${member.image}`}
                    alt={`${member.name} – ${member.title[locale]}`}
                    className={styles.portrait}
                    loading="lazy"
                  />
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.title[locale]}</p>
                  <p className={styles.desc}>{member.description[locale]}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className={styles.email}
                      aria-label={dict.board.emailAriaLabel(member.email)}
                    >
                      {member.email}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{dict.board.othersHeading}</h2>
            <div className={styles["hallitus-container"]}>
              {others.map((member, i) => (
                <article key={i} className={styles["hallitus-card"]}>
                  <img
                    src={`/${member.image}`}
                    alt={`${member.name} – ${member.title[locale]}`}
                    className={styles.portrait}
                    loading="lazy"
                  />
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.title[locale]}</p>
                  <p className={styles.desc}>{member.description[locale]}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className={styles.email}
                      aria-label={dict.board.emailAriaLabel(member.email)}
                    >
                      {member.email}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedYear === hallitusData.current && (
          <section
            className={styles.contactSection + " container-readable"}
          >
            <h2>{dict.board.contactHeading}</h2>
            <p>{dict.board.contactIntro}</p>
            <p className={styles.joinHint}>
              {dict.board.joinHintPrefix}{" "}
              <a
                href="mailto:ilmo.kurki@jytyjkl.fi"
                className={styles.emailLink}
              >
                ilmo.kurki@jytyjkl.fi
              </a>
            </p>
            <div className={styles.contactActions}>
              <a
                href="mailto:hallitus@jytyjkl.fi"
                className={styles.primaryContact}
              >
                hallitus@jytyjkl.fi
              </a>
              <a
                href="mailto:ilmo.kurki@jytyjkl.fi"
                className={styles.secondaryContact}
              >
                {dict.board.secretaryLabel}
              </a>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
