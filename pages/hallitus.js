import styles from "../styles/hallitus.module.css";
import Layout from "../components/Layout";

const members = [
	{
		name: "Juho Järvi",
		title: "Puheenjohtaja",
		image: "hallitus/juho.jpg",
		email: "pj@jytyjkl.fi",
		description: "Johtaa toimintaa, vastaa kokonaisuudesta ja edustuksesta.",
	},
	{
		name: "Eemil Hukkanen",
		title: "Varapuheenjohtaja",
		image: "hallitus/eemil.jpg",
		email: "pj@jytyjkl.fi",
		description: "Tukee puheenjohtajaa, vastaa kehitys- ja projektiasioista.",
	},
	{
		name: "Ilmo Kurki",
		title: "Sihteeri",
		image: "hallitus/ilmo.jpg",
		email: "ilmo.kurki@jytyjkl.fi",
		description: "Pöytäkirjat, dokumentaatio ja sisäinen tiedotus.",
	},
	{
		name: "Nuutti Rantanen",
		title: "Rahastonhoitaja",
		image: "hallitus/nuutti.jpg",
		email: "nuutti.rantanen@jytyjkl.fi",
		description: "Talouden seuranta, budjetointi ja maksuliikenne.",
	},
	{
		name: "Kasper Pelkonen",
		title: "Kiltavastaava",
		image: "hallitus/kassu.jpg",
		email: "kasper.pelkonen@jytyjkl.fi",
		description: "Yhteys kiltoihin ja yhteistyö rajapinnat.",
	},
	{
		name: "Lassi Laitinen",
		title: "Teekkarikulttuurivastaava",
		image: "hallitus/lassi.jpg",
		email: "lassi.laitinen@jytyjkl.fi",
		description: "Perinteet, tapahtumaperinne ja teekkarisisällöt.",
	},
	{
		name: "Atte Heikkinen",
		title: "Viestintävastaava",
		image: "hallitus/atte.jpg",
		email: "atte.heikkinen@jytyjkl.fi",
		description: "Sisäinen ja ulkoinen viestintä, kanavien koordinointi.",
	},
	{
		name: "Juho Kallijärvi",
		title: "Mediavastaava",
		image: "hallitus_placeholder.png",
		email: "juho.kallijarvi@jytyjkl.fi",
		description: "Media, visuaalinen materiaali ja tuotannot.",
	},
	{
		name: "Theodore Veistos",
		title: "Somevastaava",
		image: "hallitus_placeholder.png",
		email: "theodore.veistos@jytyjkl.fi",
		description: "Sosiaalinen media ja reaaliaikainen näkyvyys.",
	},
];

const leadershipTitles = [
	"Puheenjohtaja",
	"Varapuheenjohtaja",
	"Rahastonhoitaja",
	"Sihteeri",
];

export default function Hallitus() {
	const leadership = members.filter((m) => leadershipTitles.includes(m.title));
	const others = members.filter((m) => !leadershipTitles.includes(m.title));

	return (
		<Layout title="Hallitus | JYTY" description="Jyväskylän Teekkariyhdistys ry hallitus">
			<div className="container-wide stack-gap">
				<header className={styles.pageHeader}>
					<h1 className={styles["hallitus-title"]}>Hallituksen jäsenet</h1>
					<p className={styles.subtitle}>
						Hallitus rakentaa Jyväskylän teekkarikulttuuria ja pitää huolta
						jatkuvuudesta.
					</p>
				</header>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Johto</h2>
					<div className={styles["hallitus-container"]}>
						{leadership.map((member, i) => (
							<article key={i} className={styles["hallitus-card"]}>
								<img
									src={`/${member.image}`}
									alt={`${member.name} – ${member.title}`}
									className={styles.portrait}
									loading="lazy"
								/>
								<h3 className={styles.name}>{member.name}</h3>
								<p className={styles.role}>{member.title}</p>
								<p className={styles.desc}>{member.description}</p>
								<a
									href={`mailto:${member.email}`}
									className={styles.email}
									aria-label={`Sähköposti: ${member.email}`}
								>
									{member.email}
								</a>
							</article>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Vastaavat</h2>
					<div className={styles["hallitus-container"]}>
						{others.map((member, i) => (
							<article key={i} className={styles["hallitus-card"]}>
								<img
									src={`/${member.image}`}
									alt={`${member.name} – ${member.title}`}
									className={styles.portrait}
									loading="lazy"
								/>
								<h3 className={styles.name}>{member.name}</h3>
								<p className={styles.role}>{member.title}</p>
								<p className={styles.desc}>{member.description}</p>
								<a
									href={`mailto:${member.email}`}
									className={styles.email}
									aria-label={`Sähköposti: ${member.email}`}
								>
									{member.email}
								</a>
							</article>
						))}
					</div>
				</section>

				<section className={styles.contactSection + " container-readable"}>
					<h2>Yhteys</h2>
					<p>Voit olla yhteydessä hallitukseen matalalla kynnyksellä:</p>
					<p className={styles.joinHint}>
						Liittyminen tai jäsenyyskysymykset: ota yhteyttä sihteeriin{" "}
						<a href="mailto:ilmo.kurki@jytyjkl.fi" className={styles.emailLink}>
							ilmo.kurki@jytyjkl.fi
						</a>
					</p>
					<div className={styles.contactActions}>
						<a
							href="mailto:hallitus@jytyjkl.fi"
							className={styles.primaryContact}
						>
							hallitus@jytyjkl.fi
						</a>
						<a
							href="mailto:ilmo.kurki@jytyjkl.fi"
							className={styles.secondaryContact}
						>
							Sihteeri
						</a>
					</div>
				</section>
			</div>
		</Layout>
	);
}
