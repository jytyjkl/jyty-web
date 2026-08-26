import Layout from "../Layout";
import Link from "next/link";
import events from "../../data/events.json";
import styles from "../../styles/events.module.css";
import { getDictionary, routePath } from "../../lib/i18n";
import { formatDate } from "../../lib/formatDate";

export default function TapahtumatIndexPage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const eventsHref = routePath("events", locale);
  const sorted = [...events].sort((a,b) => a.date.localeCompare(b.date));

  return (
    <Layout
      title={dict.events.indexTitle}
      description={dict.events.indexDescription}
      locale={locale}
      alternateHref={routePath("events", otherLocale)}
    >
      <div className="container-wide stack-gap">
        <header className={styles["events-header"]}>
          <h1 className={styles["events-title"]}>{dict.events.heading}</h1>
          <p className={styles["events-intro"]}>
            {dict.events.intro}
          </p>
        </header>

        {sorted.length === 0 ? (
          <div className={styles["events-empty"]}>
            {dict.events.empty}
          </div>
        ) : (
          <div className={styles["events-grid"]}>
            {sorted.map(e => (
              <article key={e.slug[locale]} className={styles["event-card"]}>
                <div className={styles["event-image-container"]}>
                  <img
                    src={e.image ? `/${e.image}` : '/logo.png'}
                    alt={e.title[locale]}
                    className={styles["event-image"]}
                  />
                </div>
                <div className={styles["event-content"]}>
                  <div className={styles["event-meta"]}>
                    <span className={styles["event-date"]}>
                      {formatDate(e.date, locale)}
                    </span>
                    <span className={styles["event-location"]}>{e.location}</span>
                  </div>
                  <h2 className={styles["event-card-title"]}>
                    <Link href={`${eventsHref}/${e.slug[locale]}`}>{e.title[locale]}</Link>
                  </h2>
                  <p className={styles["event-intro"]}>{e.intro[locale]}</p>
                  <Link href={`${eventsHref}/${e.slug[locale]}`} className={styles["event-link"]}>
                    {dict.common.moreInfo}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
