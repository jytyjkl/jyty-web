import styles from "../styles/hallitus.module.css";
import Layout from "../components/Layout";

const members = [
  {
    name: "Juho Järvi",
    title: "Puheenjohtaja",
    image: "hallitus/juho.jpg",
    email: "pj@jytyjkl.fi",
  },
  {
    name: "Eemil Hukkanen",
    title: "Varapuheenjohtaja",
    image: "hallitus/eemil.jpg",
    email: "pj@jytyjkl.fi,
  },
  {
    name: "Ilmo Kurki",
    title: "Sihteeri",
    image: "hallitus/ilmo.jpg",
    email: "ilmo.kurki@jytyjkl.fi",
  },
  {
    name: "Nuutti Rantanen",
    title: "Rahastonhoitaja",
    image: "hallitus/nuutti.jpg",
    email: "nuutti.rantanen@jytyjkl.fi",
  },
  {
    name: "Kasper Pelkonen",
    title: "Kiltavastaava",
    image: "hallitus/kassu.jpg",
    email: "kasper.pelkonen@jytyjkl.fi",
  },
  {
    name: "Lassi Laitinen",
    title: "Teekkarikulttuurivastaava",
    image: "hallitus/lassi.jpg",
    email: "lassi.laitinen@jytyjkl.fi",
  },
  {
    name: "Atte Heikkinen",
    title: "Viestintävastaava",
    image: "hallitus/atte.jpg",
    email: "atte.heikkinen@jytyjkl.fi",
  },
  {
    name: "Juho Kallijärvi",
    title: "Mediavastaava",
    image: "hallitus_placeholder.png",
    email: "juho.kallijarvi@jytyjkl.fi",
  },
  {
    name: "Theodore Veistos",
    title: "Somevastaava",
    image: "hallitus_placeholder.png",
    email: "theodore.veistos@jytyjkl.fi",
  },
];

export default function Hallitus() {
  return (
    <Layout>
      <div>
        <h1 className={styles["hallitus-title"]}>Hallituksen jäsenet</h1>
        <div className={styles["hallitus-container"]}>
          {members.map((member, i) => (
            <div key={i} className={styles["hallitus-card"]}>
              <img src={`/${member.image}`} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.title}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          ))}
        </div>
        <div className={styles["hallitus-contact"]}>
          <a href="mailto:hallitus@jytyjkl.fi">Ota yhteyttä hallitukseen</a>
        </div>
      </div>
    </Layout>
  );
}
