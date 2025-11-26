import Layout from "../../components/Layout";
import Link from "next/link";
import news from "../../data/kuulumiset.json";
import styles from "../../styles/kuulumiset.module.css";

export default function UutisetIndex() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Layout title="Uutiset | JYTY" description="Jyväskylän teekkareiden uutiset">
      <div className="container-wide stack-gap">
        <h1 className={styles["news-title"]}>Kuulumiset</h1>
        {sorted.length === 0 ? (
          <div className={styles["news-empty"]}>
            Kuulumisia ei ole vielä julkaistu.
          </div>
        ) : (
          <ul className={styles["news-list"]}>
            {sorted.map(n => (
              <li key={n.slug} className={styles["news-card"]}>
                {n.image && (
                  <img 
                    src={`/${n.image}`} 
                    alt={n.title}
                    className={styles["news-image"]}
                  />
                )}
                <div className={styles["news-content"]}>
                  <h2>
                    <Link href={`/kuulumiset/${n.slug}`}>{n.title}</Link>
                  </h2>
                  <div className={styles["news-meta"]}>
                    {new Date(n.date).toLocaleDateString("fi-FI")}
                  </div>
                  <p className={styles["news-intro"]}>{n.intro}</p>
                  <Link href={`/kuulumiset/${n.slug}`} className={styles["news-link"]}>
                    Lue lisää →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}