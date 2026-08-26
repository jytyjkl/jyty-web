import events from "../../../data/events.json";
import TapahtumaDetailPage from "../../../components/pages/TapahtumaDetailPage";

export async function getStaticPaths() {
  const paths = events.map(e => ({
    params: { slug: e.slug.en }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = events.find(e => e.slug.en === params.slug);
  if (!event) return { notFound: true };
  return { props: { event } };
}

export default function TapahtumaPageEn({ event }) {
  return <TapahtumaDetailPage event={event} locale="en" />;
}
