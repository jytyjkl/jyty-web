import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";
import Head from "next/head";

export default function Layout({ children, title="JYTY", description="Jyväskylän Teekkariyhdistys" }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href={`https://jytyjkl.fi${typeof window === 'undefined' ? '' : window.location.pathname}`}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
      </Head>
      <Navbar />
      <main id="main" className={styles["layout-main"]}>
        <div className="container-wide stack-gap">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
