import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/home.module.css";
import events from "../data/events.json";
import news from "../data/kuulumiset.json";

export default function Home() {
  const upcoming = [...events].sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  
  // Hae 3 uusinta kuulumista
  const recentNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <Layout title="JYTY" description="Jyväskylän Teekkariyhdistys ry">
      {/* Tervetulo-hero - kompakti */}
      <section className={styles.welcomeHeroCompact}>
        <div className={styles.welcomeInner}>
          <h1 className={styles.welcomeTitle}>Tervetuloa JYTYn sivuille</h1>
          <p className={styles.welcomeLead}>
            Rakennamme Jyväskylään oman teekkarikulttuurin – yhteisön, perinteet ja tapahtumat.
          </p>
        </div>
      </section>

      {/* Tapahtumat ja Kuulumiset rinnakkain */}
      <div className={styles.contentSideBySide}>
        {/* Tapahtumat */}
        <section className={styles.eventsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.eventsHeading}>Tulevat tapahtumat</h2>
            <Link href="/tapahtumat" className={styles.sectionCta}>Kaikki →</Link>
          </div>
          {upcoming.length === 0 ? (
            <div className={styles.eventsEmpty}>Ei julkaistuja tapahtumia.</div>
          ) : (
            <ul className={styles.eventsGridCompact}>
              {upcoming.slice(0, 3).map(e=>(
                <li key={e.slug} className={styles.eventItem}>
                  <h3 className={styles.eventTitle}>
                    <Link href={`/tapahtumat/${e.slug}`}>{e.title}</Link>
                  </h3>
                  <div className={styles.eventMeta}>
                    {new Date(e.date).toLocaleDateString("fi-FI")} · {e.location}
                  </div>
                  <p className={styles.eventIntro}>{e.intro}</p>
                  <Link href={`/tapahtumat/${e.slug}`} className={styles.eventLink}>Lisätiedot →</Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Kuulumiset */}
        <section className={styles.newsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.eventsHeading}>Kuulumiset</h2>
            <Link href="/kuulumiset" className={styles.sectionCta}>Kaikki →</Link>
          </div>
          {recentNews.length === 0 ? (
            <div className={styles.eventsEmpty}>Ei julkaistuja kuulumisia.</div>
          ) : (
            <ul className={styles.newsGridCompact}>
              {recentNews.map(n => (
                <li key={n.slug} className={styles.newsItem}>
                  <h3 className={styles.eventTitle}>
                    <Link href={`/kuulumiset/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <div className={styles.eventMeta}>
                    {new Date(n.date).toLocaleDateString("fi-FI")}
                  </div>
                  <p className={styles.eventIntro}>{n.intro}</p>
                  <Link href={`/kuulumiset/${n.slug}`} className={styles.eventLink}>Lue lisää →</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
}
