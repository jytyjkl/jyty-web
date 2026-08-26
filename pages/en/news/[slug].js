import news from "../../../data/kuulumiset.json";
import KuulumisetDetailPage from "../../../components/pages/KuulumisetDetailPage";

export async function getStaticPaths() {
  const paths = news.map((n) => ({ params: { slug: n.slug.en } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = news.find((n) => n.slug.en === params.slug);
  if (!item) return { notFound: true };
  return { props: { news: item } };
}

export default function UutisPageEn({ news }) {
  return <KuulumisetDetailPage news={news} locale="en" />;
}
