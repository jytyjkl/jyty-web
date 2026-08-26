import styles from "../../styles/saannot.module.css";
import Layout from "../Layout";
import saannotData from "../../data/saannot.json";
import { getDictionary, routePath } from "../../lib/i18n";

export default function SaannotPage({ locale }) {
  const dict = getDictionary(locale);
  const otherLocale = locale === "en" ? "fi" : "en";

  return (
    <Layout
      title={dict.rules.title}
      description={dict.rules.description}
      locale={locale}
      alternateHref={routePath("rules", otherLocale)}
    >
      <div className="container-wide" style={{display:"flex",gap:"40px",alignItems:"flex-start",flexWrap:"wrap"}}>
        <nav className={styles["rules-toc"]} aria-label={dict.rules.tocAriaLabel}>
          <h3>{dict.rules.tocHeading}</h3>
          <ul>
            {saannotData.map(rule => (
              <li key={rule.id}>
                <a href={`#p${rule.id}`}>{rule.title[locale]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.rules}>
          <h1 className={styles.title}>{dict.rules.heading}</h1>
          <p className={styles.intro}>
            {dict.rules.intro}
          </p>
          {dict.rules.disclaimer && (
            <p className={styles.intro}><em>{dict.rules.disclaimer}</em></p>
          )}

          {saannotData.map((rule) => (
            <section key={rule.id} id={`p${rule.id}`} className={styles.section}>
              <h2>
                {rule.title[locale]}
                <a href={`#p${rule.id}`} className={styles["anchor-link"]} aria-label={dict.rules.anchorAriaLabel}>#</a>
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

              {rule.subsections && rule.subsections.map((sub, idx) => (
                <div key={idx}>
                  <h3>{sub.heading[locale]}</h3>
                  {sub.items && (
                    <ul>
                      {sub.items.map((item, i) => (
                        <li key={i}>{item[locale]}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {rule.footerParagraphs && rule.footerParagraphs.map((para, idx) => (
                <p key={idx}>{para[locale]}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
