import events from "../../data/events.json";
import TapahtumaDetailPage from "../../components/pages/TapahtumaDetailPage";

export async function getStaticPaths() {
  const paths = events.map(e => ({
    params: { slug: e.slug.fi }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = events.find(e => e.slug.fi === params.slug);
  if (!event) return { notFound: true };
  return { props: { event } };
}

export default function TapahtumaPage({ event }) {
  return <TapahtumaDetailPage event={event} locale="fi" />;
}
