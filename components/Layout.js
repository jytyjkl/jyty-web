import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";
import Head from "next/head";
import { getDictionary } from "../lib/i18n";

export default function Layout({ children, title, description="", fullWidth=false, locale="fi", alternateHref=null, translated=true }) {
  const router = useRouter();
  const dict = getDictionary(locale);
  const resolvedTitle = title || dict.common.siteName;
  const path = router.asPath.split('?')[0].split('#')[0];
  const hasAlternate = locale === "en" || translated;
  const fiHref = locale === "fi" ? path : alternateHref;
  const enHref = locale === "en" ? path : alternateHref;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{resolvedTitle}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href={`https://jytyjkl.fi${path}`}/>
        {hasAlternate ? (
          <>
            <link rel="alternate" hrefLang="fi" href={`https://jytyjkl.fi${fiHref}`}/>
            <link rel="alternate" hrefLang="en" href={`https://jytyjkl.fi${enHref}`}/>
            <link rel="alternate" hrefLang="x-default" href={`https://jytyjkl.fi${fiHref}`}/>
          </>
        ) : (
          <link rel="alternate" hrefLang="fi" href={`https://jytyjkl.fi${path}`}/>
        )}
        <meta property="og:title" content={resolvedTitle}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
      </Head>
      <Navbar locale={locale} alternateHref={hasAlternate ? alternateHref : null} />
      <main id="main" className={styles["layout-main"]} style={{display: 'flex', flexDirection: 'column'}}>
        {fullWidth ? (
          children
        ) : (
          <div className="container-wide stack-gap">
            {children}
          </div>
        )}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
