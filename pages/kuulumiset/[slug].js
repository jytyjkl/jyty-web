import news from "../../data/kuulumiset.json";
import KuulumisetDetailPage from "../../components/pages/KuulumisetDetailPage";

export async function getStaticPaths() {
  const paths = news.map((n) => ({ params: { slug: n.slug.fi } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = news.find((n) => n.slug.fi === params.slug);
  if (!item) return { notFound: true };
  return { props: { news: item } };
}

export default function UutisPage({ news }) {
  return <KuulumisetDetailPage news={news} locale="fi" />;
}
