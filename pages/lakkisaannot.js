import styles from "../styles/saannot.module.css";
import Layout from "../components/Layout";

const headings = [
  { id: "lakki-kuvaus", label: "Lakin kuvaus" },
  { id: "kantoaika", label: "2 § Kantoaika" },
  { id: "kanto-oikeus", label: "3 § Kanto-oikeus" },
  { id: "kaytto", label: "4 § Käyttö" },
  { id: "pysyva", label: "5 § Pysyväisohjesääntö" },
  { id: "muut", label: "6 § Muut säädökset" },
  { id: "muutokset", label: "7 § Muuttaminen" }
];

export default function Lakkisaannot() {
  return (
    <Layout title="Teekkarilakkiohjesääntö | JYTY" description="Jyväskylän teekkarilakin ohjesääntö">
      <div className="container-wide" style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
        <nav className={styles["rules-toc"]} aria-label="Lakkiohjesäännön sisällysluettelo">
          <h3>Sisällys</h3>
            <ul>
              {headings.map(h => (
                <li key={h.id}>
                  <a href={`#${h.id}`}>{h.label}</a>
                </li>
              ))}
            </ul>
        </nav>
        <div className={`${styles.rules} container-readable`}>
          <h1 className={styles.title}>Jyväskylän teekkarilakkiohjesääntö</h1>
          <p className="rules-intro">Teekkarilakin käyttöä, ulkonäköä ja perinnettä ohjaavat määräykset.</p>

          <h2 id="lakki-kuvaus">Lakin kuvaus<a href="#lakki-kuvaus" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Jyväskylän teekkarilakki on kahdeksankulmainen, Jyväskylän kävelykadun Kompassin muodon mukaan. Lakin sisäpuoli on Jyväskylän yliopiston värien mukaisesti puoliksi sininen ja puoliksi oranssi. Lakin kokardissa yhdistyvät Jyväskylä sekä tekniikka. Kokardi muodostuu Jyväskylän ylioppilaskunnan (JYY) soihdusta, jota ympäröi tekniikan ratas.
          </p>
          <p>
            Ensimmäisen vuoden diplomi-insinööriopiskelijoista eli fukseista tulee teekkareita vappuna, jolloin kasteen jälkeen lakin saa painaa päähänsä. Lakin kantoaika alkaa siis vapun kasteesta ja päättyy syyskuun viimeisenä päivänä pidettäviin lakinlaskijaisiin.
          </p>

          <h2 id="kantoaika">2 § Lakin kantoaika<a href="#kantoaika" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Teekkarilakin kantoaika on 30.4.–30.9. Teekkarilakin saa painaa päähänsä 30.4. samaan aikaan, kun Minna Canthin patsas lakitetaan kello 18.00. Lakki lasketaan 30.9. kello 00.00. Muina aikoina teekkarilakkia ei saa kantaa ilman erillistä lakkilupaa, ellei pysyväisohjesääntö erikseen sitä salli. Lakkilupaa haetaan kirjallisesti Jyväskylän teekkariyhdistys ry:n hallitukselta vähintään kolmea arkipäivää etukäteen. Hakemuksessa on käytävä selväksi, mihin tarkoitukseen lakkia aikoo käyttää. Lakkia saa käyttää vain lakkiluvassa määrättynä aikana ja siinä mainitussa tilaisuudessa.
          </p>

          <h2 id="kanto-oikeus">3 § Lakin kanto-oikeus<a href="#kanto-oikeus" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Kanto-oikeus voidaan myöntää opiskelijalle, joka opiskelee Jyväskylän yliopistossa tekniikan kandidaatiksi ja/tai diplomi-insinööriksi tai tekniikan tohtoriksi. Lakki ojennetaan opiskelija- ja teekkariperinteisiin perehtyneelle ensimmäisen vuoden tekniikan ylioppilaalle 30.4. yhteisessä teekkarikasteessa, muutoin lakki ojennetaan äitienpäivänä. Lakin käyttöoikeus on elinikäinen.
          </p>

          <h2 id="kaytto">4 § Lakin käyttö<a href="#kaytto" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Teekkarilakkia käytetään kunnioittaen ja sitä halventamatta. Lakkia ei saa luovuttaa henkilöille, joilla ei ole teekkarilakin kanto-oikeutta. Teekkareiden kokoontuessa noustaan keskiyöllä korkeimmalle mahdolliselle kohdalle, nostetaan lakki käsi ojennettuna pään yläpuolelle ja lauletaan Teekkarihymni pimennetyssä tilassa, mikäli mahdollista. Lakin kantoaikana lakki lasketaan takaisin päähän teekkarihymnin jälkeen, mutta lakinlaskijaisissa se lasketaan olkapäälle.
          </p>

          <h2 id="pysyva">5 § Pysyväisohjesääntö<a href="#pysyva" className={styles["anchor-link"]}>#</a></h2>
          <p>Teekkarilakkia saa käyttää ilman erillistä lupaa seuraavissa tilaisuuksissa:</p>
          <ul>
            <li>Jyväskylän yliopiston esittelytilaisuuksissa</li>
            <li>Itsenäisyyspäivän soihtukulkueessa</li>
            <li>Lippuairueessa toimiville</li>
            <li>Jäynäkisoissa</li>
            <li>Titeenien taistoissa</li>
            <li>TEKin valtakunnallisissa tapahtumissa</li>
            <li>Tietoteekkariyhdistys ry:n valtakunnallisissa tapahtumissa</li>
            <li>Jyväskylän yliopiston ylioppilaskunnan (JYY) edustajiston kokouksissa</li>
            <li>Suomen ylioppilaskuntien liiton (SYL) liittokokouksissa</li>
          </ul>

          <h2 id="muut">6 § Muut säädökset<a href="#muut" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Teekkarilakkia ei kuulu korjata itse, ja jokaista reikää ja repsottavaa kohtaa vaalitaan merkkinä menneistä vuosista. Jos kuitenkin lakin kunto heikkenee liikaa, niin lakki kuuluu hävittää olemattomiin kaapinperälle ja hankkia uusi lakki tilalle.
          </p>
          <p>
            Jos teekkari osoittaa jatkuvaa piittaamattomuutta teekkarilakkia kohtaan, niin häntä voidaan rangaista teekkarikerhon päättämällä tavalla.
          </p>

          <h2 id="muutokset">7 § Ohjesäännön muuttaminen<a href="#muutokset" className={styles["anchor-link"]}>#</a></h2>
          <p>
            Tämä ohjesääntö hyväksyttiin ensimmäistä kertaa keväällä 2022. Ohjesääntöä voidaan muuttaa tätä ohjesääntöä ylläpitävän yhdistyksen kokouksessa. Tätä ohjesääntöä ylläpitää Jyväskylän teekkariyhdistys ry.
          </p>
        </div>
      </div>
    </Layout>
  );
}
