import styles from "../styles/saannot.module.css";
import Layout from "../components/Layout";
import saannotData from "../data/saannot.json";

export default function Saannot() {
	return (
		<Layout title="Säännöt | JYTY" description="Jyväskylän Teekkariyhdistys ry:n säännöt">
			<div className="container-wide" style={{display:"flex",gap:"40px",alignItems:"flex-start",flexWrap:"wrap"}}>
				<nav className={styles["rules-toc"]} aria-label="Sääntöjen sisällysluettelo">
					<h3>Sisällys</h3>
					<ul>
						{saannotData.map(rule => (
							<li key={rule.id}>
								<a href={`#p${rule.id}`}>{rule.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.rules}>
					<h1 className={styles.title}>Jyväskylän Teekkariyhdistys ry - Säännöt</h1>
					<p className={styles.intro}>
						Rekisteröity yhdistys – sääntöjen tiivis kooste ja täydet pykälät alla.
					</p>

					{saannotData.map((rule) => (
						<section key={rule.id} id={`p${rule.id}`} className={styles.section}>
							<h2>
								{rule.title}
								<a href={`#p${rule.id}`} className={styles["anchor-link"]} aria-label="Linkki tähän osioon">#</a>
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
							
							{rule.subsections && rule.subsections.map((sub, idx) => (
								<div key={idx}>
									<h3>{sub.heading}</h3>
									{sub.items && (
										<ul>
											{sub.items.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									)}
								</div>
							))}
							
							{rule.footerParagraphs && rule.footerParagraphs.map((para, idx) => (
								<p key={idx}>{para}</p>
							))}
						</section>
					))}
				</div>
			</div>
		</Layout>
	);
}