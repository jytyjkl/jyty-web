import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/arkisto.module.css";

const materials = [
  {
    id: 1,
    year: 2025,
    title: "Vappulehti 2025",
    description: "JYTYn ensimmäinen vappulehti - teekkaritarinoita, pullavarkauksia ja boolin viisautta.",
    link: "/vappulehti",
    type: "Lehti",
    image: "rentoruusu.JPG"
  },
  // Tulevaisuutta varten:
  // {
  //   id: 2,
  //   year: 2026,
  //   title: "Vappustriimi 2026",
  //   description: "Live-lähetys vapun vietosta.",
  //   link: "/vappustriimi",
  //   type: "Striimi"
  // }
];

export default function Arkisto() {
  // Järjestä uusimmasta vanhimpaan
  const sorted = [...materials].sort((a, b) => b.year - a.year);

  return (
    <Layout title="Arkisto | JYTY" description="JYTYn vappumateriaalien ja tapahtumien arkisto">
      <div className="container-wide stack-gap">
        <header className={styles.header}>
          <h1 className={styles.title}>Arkisto</h1>
          <p className={styles.intro}>
            Täältä löydät JYTYn aiempien vappujen materiaalit ja muistojen helmet.
          </p>
        </header>

        {sorted.length === 0 ? (
          <div className={styles.empty}>
            Arkistoon ei ole vielä lisätty materiaalia.
          </div>
        ) : (
          <div className={styles.grid}>
            {sorted.map(item => (
              <article key={item.id} className={styles.card}>
                {item.image && (
                  <div className={styles.imageContainer}>
                    <img 
                      src={`/${item.image}`} 
                      alt={item.title}
                      className={styles.image}
                    />
                  </div>
                )}
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.type}>{item.type}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <Link href={item.link} className={styles.link}>
                    Avaa →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}