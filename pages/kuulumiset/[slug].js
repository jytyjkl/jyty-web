import Layout from "../../components/Layout";
import news from "../../data/kuulumiset.json";
import styles from "../../styles/kuulumiset.module.css";

export const runtime = "experimental-edge";

export async function getStaticPaths() {
  const paths = news.map(n => ({ params: { slug: n.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = news.find(n => n.slug === params.slug);
  if (!item) return { notFound: true };
  return { props: { news: item } };
}

export default function UutisPage({ news }) {
  return (
    <Layout title={`${news.title} | JYTY`} description={news.intro}>
      <div className="container-wide">
        <article className={styles["single-news"]}>
          <h1>{news.title}</h1>
          <div className={styles["news-meta"]}>
            {new Date(news.date).toLocaleDateString("fi-FI")}
          </div>
          {news.image && (
            <img 
              src={`/${news.image}`} 
              alt={news.title}
              className={styles["news-hero-image"]}
            />
          )}
          <div
            className={styles["news-body"]}
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </div>
    </Layout>
  );
}