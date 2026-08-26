import styles from "../../styles/saannot.module.css";
import Layout from "../Layout";
import lakkisaannotData from "../../data/lakkisaannot.json";
import { getDictionary, routePath } from "../../lib/i18n";

export default function LakkiohjesaantoPage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";

  return (
    <Layout
      title={dict.capRules.title}
      description={dict.capRules.description}
      locale={locale}
      alternateHref={routePath("capRules", otherLocale)}
    >
      <div className="container-wide" style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
        <nav className={styles["rules-toc"]} aria-label={dict.capRules.tocAriaLabel}>
          <h3>{dict.capRules.tocHeading}</h3>
          <ul>
            {lakkisaannotData.map(rule => (
              <li key={rule.id}>
                <a href={`#${rule.id}`}>{rule.title[locale]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.rules}>
          <h1 className={styles.title}>{dict.capRules.heading}</h1>
          <p className={styles.intro}>{dict.capRules.intro}</p>
          {dict.capRules.disclaimer && (
            <p className={styles.intro}><em>{dict.capRules.disclaimer}</em></p>
          )}

          {lakkisaannotData.map((rule) => (
            <section key={rule.id} id={rule.id} className={styles.section}>
              <h2>
                {rule.title[locale]}
                <a href={`#${rule.id}`} className={styles["anchor-link"]} aria-label={dict.capRules.anchorAriaLabel}>#</a>
              </h2>

              {rule.content && <p>{rule.content[locale]}</p>}

              {rule.items && (
                <ul>
                  {rule.items.map((item, idx) => (
                    <li key={idx}>{item[locale]}</li>
                  ))}
                </ul>
              )}

              {rule.paragraphs && rule.paragraphs.map((para, idx) => (
                <p key={idx}>{para[locale]}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
