import Layout from "../Layout";
import Link from "next/link";
import styles from "../../styles/home.module.css";
import events from "../../data/events.json";
import news from "../../data/kuulumiset.json";
import { getDictionary, routePath, homePath } from "../../lib/i18n";
import { formatDate } from "../../lib/formatDate";

export default function HomePage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const eventsHref = routePath("events", locale);
  const newsHref = routePath("news", locale);
  const today = new Date().toISOString().split('T')[0]
  const upcoming = [...events].filter(e => e.date >= today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  const recentNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <Layout
      title={dict.home.title}
      description={dict.home.description}
      fullWidth={true}
      locale={locale}
      alternateHref={homePath(otherLocale)}
    >
      {/* Hero - koko leveys */}
      <section className={styles.welcomeHeroCompact}>
        <div className={styles.welcomeInner}>
          <h1 className={styles.welcomeTitle}>{dict.home.heroTitle}</h1>
          <p className={styles.welcomeLead}>
            {dict.home.heroLead}
          </p>
        </div>
      </section>

      {/* Sisältö - rajoitettu leveys */}
      <div className="container-wide" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        {/* Tapahtumat ja Kuulumiset rinnakkain */}
        <div className={styles.contentSideBySide}>
          {/* Tapahtumat */}
          <section className={styles.eventsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.eventsHeading}>{dict.home.upcomingEvents}</h2>
              <Link href={eventsHref} className={styles.sectionCta}>{dict.common.all}</Link>
            </div>
            {upcoming.length === 0 ? (
              <div className={styles.eventsEmpty}>{dict.home.noEvents}</div>
            ) : (
              <ul className={styles.eventsGridCompact}>
                {upcoming.slice(0, 3).map(e=>(
                  <li key={e.slug[locale]} className={styles.eventItem}>
                    {e.image && (
                      <img
                        src={`/${e.image}`}
                        alt={e.title[locale]}
                        className={styles.eventItemImage}
                      />
                    )}
                    <h3 className={styles.eventTitle}>
                      <Link href={`${eventsHref}/${e.slug[locale]}`}>{e.title[locale]}</Link>
                    </h3>
                    <div className={styles.eventMeta}>
                      {formatDate(e.date, locale)} · {e.location}
                    </div>
                    <p className={styles.eventIntro}>{e.intro[locale]}</p>
                    <Link href={`${eventsHref}/${e.slug[locale]}`} className={styles.eventLink}>{dict.common.moreInfo}</Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Kuulumiset */}
          <section className={styles.newsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.eventsHeading}>{dict.home.news}</h2>
              <Link href={newsHref} className={styles.sectionCta}>{dict.common.all}</Link>
            </div>
            {recentNews.length === 0 ? (
              <div className={styles.eventsEmpty}>{dict.home.noNews}</div>
            ) : (
              <ul className={styles.newsGridCompact}>
                {recentNews.map(n => (
                  <li key={n.slug[locale]} className={styles.newsItem}>
                    <h3 className={styles.eventTitle}>
                      <Link href={`${newsHref}/${n.slug[locale]}`}>{n.title[locale]}</Link>
                    </h3>
                    <div className={styles.eventMeta}>
                      {formatDate(n.date, locale)}
                    </div>
                    <p className={styles.eventIntro}>{n.intro[locale]}</p>
                    <Link href={`${newsHref}/${n.slug[locale]}`} className={styles.eventLink}>{dict.common.readMore}</Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
