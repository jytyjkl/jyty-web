import Layout from "../../components/Layout";
import Link from "next/link";
import events from "../../data/events.json";
import styles from "../../styles/events.module.css";

export default function TapahtumatIndex() {
  const sorted = [...events].sort((a,b) => a.date.localeCompare(b.date));
  return (
    <Layout title="Tapahtumat | JYTY" description="Jyväskylän teekkarit tapahtumat">
      <div className="container-wide stack-gap">
        <header className={styles["events-header"]}>
          <h1 className={styles["events-title"]}>Tapahtumat</h1>
          <p className={styles["events-intro"]}>
            Seuraa JYTYn tapahtumia ja tule mukaan rakentamaan teekkariyhteisöä Jyväskylässä.
          </p>
        </header>

        {sorted.length === 0 ? (
          <div className={styles["events-empty"]}>
            Tapahtumia ei ole vielä julkaistu. Julkaisemme ensimmäiset tapahtumat pian – seuraa kanaviamme!
          </div>
        ) : (
          <div className={styles["events-grid"]}>
            {sorted.map(e => (
              <article key={e.slug} className={styles["event-card"]}>
                <div className={styles["event-image-container"]}>
                  <img 
                    src={e.image ? `/${e.image}` : '/logo.png'} 
                    alt={e.title}
                    className={styles["event-image"]}
                  />
                </div>
                <div className={styles["event-content"]}>
                  <div className={styles["event-meta"]}>
                    <span className={styles["event-date"]}>
                      {new Date(e.date).toLocaleDateString("fi-FI")}
                    </span>
                    <span className={styles["event-location"]}>{e.location}</span>
                  </div>
                  <h2 className={styles["event-card-title"]}>
                    <Link href={`/tapahtumat/${e.slug}`}>{e.title}</Link>
                  </h2>
                  <p className={styles["event-intro"]}>{e.intro}</p>
                  <Link href={`/tapahtumat/${e.slug}`} className={styles["event-link"]}>
                    Lisätiedot →
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