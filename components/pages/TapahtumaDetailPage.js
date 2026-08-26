import Layout from "../Layout";
import styles from "../../styles/events.module.css";
import { getDictionary, routePath } from "../../lib/i18n";
import { formatDate } from "../../lib/formatDate";

export default function TapahtumaDetailPage({ event, locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const alternateHref = `${routePath("events", otherLocale)}/${event.slug[otherLocale]}`;

  return (
    <Layout
      title={`${event.title[locale]}${dict.events.titleSuffix}`}
      description={event.intro[locale] || dict.events.defaultDescription}
      locale={locale}
      alternateHref={alternateHref}
    >
      <div className={styles["events-container"]}>
        <div className={styles["single-event"]}>
          {event.image && (
            <img
              src={`/${event.image}`}
              alt={event.title[locale]}
              className={styles["event-hero-image"]}
            />
          )}
          <h1>{event.title[locale]}</h1>
          <div className={styles["event-meta"]}>
            {event.date ? formatDate(event.date, locale) : ""} · {event.location}
          </div>
          <div
            className={styles["event-content"]}
            dangerouslySetInnerHTML={{ __html: event.content[locale] || "" }}
          />
        </div>
      </div>
    </Layout>
  );
}
