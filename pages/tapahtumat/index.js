import Layout from "../../components/Layout";
import Link from "next/link";
import events from "../../data/events.json";
import styles from "../../styles/events.module.css";

export default function TapahtumatIndex() {
  const sorted = [...events].sort((a,b) => a.date.localeCompare(b.date));
  return (
    <Layout title="Tapahtumat | JYTY" description="Jyväskylän teekkarit tapahtumat">
      <div className="container-wide stack-gap">
        <h1 className={styles["events-title"]}>Tapahtumat</h1>
        {sorted.length === 0 ? (
          <div className={styles["events-empty"]}>
            Tapahtumia ei ole vielä julkaistu. Julkaisemme ensimmäiset tapahtumat pian – seuraa kanaviamme!
          </div>
        ) : (
          <ul className={styles["event-list"]}>
            {sorted.map(e => (
              <li key={e.slug} className={styles["event-card"]}>
                <h2>
                  <Link href={`/tapahtumat/${e.slug}`}>{e.title}</Link>
                </h2>
                <div className={styles["event-meta"]}>
                  {new Date(e.date).toLocaleDateString("fi-FI")} · {e.location}
                </div>
                <p className={styles["event-intro"]}>{e.intro}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}