import Layout from "../Layout";
import styles from "../../styles/kuulumiset.module.css";
import { getDictionary, routePath } from "../../lib/i18n";
import { formatDate } from "../../lib/formatDate";

export default function KuulumisetDetailPage({ news, locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";
  const alternateHref = `${routePath("news", otherLocale)}/${news.slug[otherLocale]}`;

  return (
    <Layout
      title={`${news.title[locale]}${dict.news.titleSuffix}`}
      description={news.intro[locale]}
      locale={locale}
      alternateHref={alternateHref}
    >
      <div className="container-wide">
        <article className={styles["single-news"]}>
          <h1>{news.title[locale]}</h1>
          <div className={styles["news-meta"]}>
            {formatDate(news.date, locale)}
          </div>
          {news.image && (
            <img
              src={`/${news.image}`}
              alt={news.title[locale]}
              className={styles["news-hero-image"]}
            />
          )}
          <div
            className={styles["news-body"]}
            dangerouslySetInnerHTML={{ __html: news.content[locale] }}
          />
        </article>
      </div>
    </Layout>
  );
}
