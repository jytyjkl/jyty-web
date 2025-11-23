import Layout from "../../components/Layout";
import events from "../../data/events";
import styles from "../../styles/events.module.css";

export const runtime = "edge"; // Cloudflare Pages / next-on-pages vaatii tämän dynaamiselle reitille

export async function getStaticPaths() {
  const paths = (Array.isArray(events) ? events : []).map(e => ({
    params: { slug: e.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = (Array.isArray(events) ? events : []).find(e => e.slug === params.slug);
  if (!event) return { notFound: true };
  return { props: { event } };
}

export default function TapahtumaPage({ event }) {
  return (
    <Layout title={`${event.title} | JYTY`} description={event.intro || "Tapahtuma"}>
      <div className={styles["events-container"]}>
        <div className={styles["single-event"]}>
          <h1>{event.title}</h1>
          <div className={styles["event-meta"]}>
            {event.date ? new Date(event.date).toLocaleDateString("fi-FI") : ""} · {event.location}
          </div>
          <div
            className={styles["event-content"]}
            dangerouslySetInnerHTML={{ __html: event.content || event.contentHtml || "" }}
          />
        </div>
      </div>
    </Layout>
  );
}