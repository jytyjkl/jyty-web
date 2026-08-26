import Layout from "../Layout";
import Link from "next/link";
import news from "../../data/kuulumiset.json";
import styles from "../../styles/kuulumiset.module.css";
import { getDictionary, routePath } from "../../lib/i18n";
import { formatDate } from "../../lib/formatDate";

export default function KuulumisetIndexPage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const newsHref = routePath("news", locale);
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Layout
      title={dict.news.indexTitle}
      description={dict.news.indexDescription}
      locale={locale}
      alternateHref={routePath("news", otherLocale)}
    >
      <div className="container-wide stack-gap">
        <h1 className={styles["news-title"]}>{dict.news.heading}</h1>
        {sorted.length === 0 ? (
          <div className={styles["news-empty"]}>
            {dict.news.empty}
          </div>
        ) : (
          <ul className={styles["news-list"]}>
            {sorted.map(n => (
              <li key={n.slug[locale]} className={styles["news-card"]}>
                {n.image && (
                  <img
                    src={`/${n.image}`}
                    alt={n.title[locale]}
                    className={styles["news-image"]}
                  />
                )}
                <div className={styles["news-content"]}>
                  <h2>
                    <Link href={`${newsHref}/${n.slug[locale]}`}>{n.title[locale]}</Link>
                  </h2>
                  <div className={styles["news-meta"]}>
                    {formatDate(n.date, locale)}
                  </div>
                  <p className={styles["news-intro"]}>{n.intro[locale]}</p>
                  <Link href={`${newsHref}/${n.slug[locale]}`} className={styles["news-link"]}>
                    {dict.common.readMore}
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
