import styles from "../styles/home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import events from "../data/events.js";
import sections from "../data/homeSections.json";
import resources from "../data/homeResources.json";

export default function Home() {
  const sourceEvents = Array.isArray(events) ? events : (events?.events || []);
  const upcoming = sourceEvents.slice().sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  const nextHighlight = upcoming[0];

  return (
    <Layout title="JYTY" description="Jyväskylän Teekkariyhdistys ry">
      {/* Tervetulo-hero */}
      <section className={styles.welcomeHero}>
        <div className={styles.welcomeInner}>
          <h1 className={styles.welcomeTitle}>Tervetuloa JYTYn sivuille</h1>
          <p className={styles.welcomeLead}>
            Rakennamme Jyväskylään oman teekkarikulttuurin – yhteisön, perinteet ja tapahtumat. Liity mukaan ja tee historiasta seuraava luku.
          </p>
          <div className={styles.welcomeActions}>
            <Link href="/tapahtumat" className={styles.ctaPrimary}>Tapahtumat</Link>
            <Link href="/hallitus" className={styles.ctaSecondary}>Liity mukaan</Link>
          </div>
        </div>
      </section>

      {/* Pilarit */}
      <section className={styles.missionSection}>
        {sections.map(s=>(
          <div key={s.id} className={styles.missionCard}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <Link href={s.href} className={styles.inlineLink}>{s.cta} →</Link>
          </div>
        ))}
      </section>

      {/* Ajankohtainen nosto */}
      {nextHighlight && (
        <section className={styles.highlightSection}>
          <div className={styles.highlightInner}>
            <h2>{nextHighlight.title}</h2>
            <p>{nextHighlight.intro}</p>
            <Link href={`/tapahtumat/${nextHighlight.slug}`} className={styles.ctaPrimarySmall}>
              Lisätiedot →
            </Link>
          </div>
        </section>
      )}

      {/* Tapahtumat */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.eventsHeading}>Tulevat tapahtumat</h2>
          <Link href="/tapahtumat" className={styles.sectionCta}>Kaikki →</Link>
        </div>
        {upcoming.length === 0 ? (
          <div className={styles.eventsEmpty}>Ei julkaistuja tapahtumia.</div>
        ) : (
          <ul className={styles.eventsGrid}>
            {upcoming.map(e=>(
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

      {/* Resurssit */}
      <section className={styles.resourcesGrid}>
        {resources.map(r=>(
          <div key={r.id} className={styles.resourceItem}>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
            <Link href={r.href} className={styles.resourceLink}>{r.cta} →</Link>
          </div>
        ))}
      </section>

      {/* Liity */}
      <section className={styles.joinInfo}>
        <p>
          Liittyminen tai jäsenyyskysymykset: sihteeri{" "}
          <a href="mailto:ilmo.kurki@jytyjkl.fi" className={styles.inlineLink}>
            ilmo.kurki@jytyjkl.fi
          </a>
        </p>
      </section>
    </Layout>
  );
}
