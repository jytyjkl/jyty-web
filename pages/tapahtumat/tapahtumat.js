import Layout from "../../components/Layout";
import { events } from "../../data/events";
import styles from "../../styles/events.module.css";

export async function getStaticPaths() {
  return {
    paths: events.map(e => ({ params: { slug: e.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const event = events.find(e => e.slug === params.slug);
  return { props: { event } };
}

export default function TapahtumaPage({ event }) {
  return (
    <Layout>
      <div className={styles["events-container"]}>
        <div className={styles["single-event"]}>
          <h1>{event.title}</h1>
            <div className={styles["event-meta"]}>
              {new Date(event.date).toLocaleDateString("fi-FI")} · {event.location}
            </div>
            <div
              className="event-content"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
        </div>
      </div>
    </Layout>
  );
}