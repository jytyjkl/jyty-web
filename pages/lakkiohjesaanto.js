import styles from "../styles/saannot.module.css";
import Layout from "../components/Layout";
import lakkisaannotData from "../data/lakkisaannot.json";

export default function Lakkisaannot() {
  return (
    <Layout title="Teekkarilakkiohjesääntö | JYTY" description="Jyväskylän teekkarilakin ohjesääntö">
      <div className="container-wide" style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
        <nav className={styles["rules-toc"]} aria-label="Lakkiohjesäännön sisällysluettelo">
          <h3>Sisällys</h3>
          <ul>
            {lakkisaannotData.map(rule => (
              <li key={rule.id}>
                <a href={`#${rule.id}`}>{rule.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.rules}>
          <h1 className={styles.title}>Jyväskylän teekkarilakkiohjesääntö</h1>
          <p className={styles.intro}>Teekkarilakin käyttöä, ulkonäköä ja perinnettä ohjaavat määräykset.</p>

          {lakkisaannotData.map((rule) => (
            <section key={rule.id} id={rule.id} className={styles.section}>
              <h2>
                {rule.title}
                <a href={`#${rule.id}`} className={styles["anchor-link"]} aria-label="Linkki tähän osioon">#</a>
              </h2>
              
              {rule.content && <p>{rule.content}</p>}
              
              {rule.items && (
                <ul>
                  {rule.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              
              {rule.paragraphs && rule.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
