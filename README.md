# JYTY – Jyväskylän Teekkariyhdistys ry

Modernit Next.js-pohjaiset sivut: teekkarikulttuuri, tapahtumat ja vappulehti.

## Sisältö

- Etusivu: hero + pilarit + nosto + tapahtumat (data: [data/homeSections.json](data/homeSections.json), [data/homeResources.json](data/homeResources.json), [data/events.js](data/events.js))
- Hallitus: roolikortit ([pages/hallitus.js](pages/hallitus.js))
- Säännöt & Lakkisäännöt: lukupohja + sisällysluettelo ([pages/saannot.js](pages/saannot.js), [pages/lakkisaannot.js](pages/lakkisaannot.js))
- Vappulehti: artikkelit + quote + sanaristikko ([pages/vappulehti.js](pages/vappulehti.js), [`Crossword`](components/Crossword.js))
- Vappustriimi: Owncast upotus ([pages/vappustriimi.js](pages/vappustriimi.js))

## Teknologia

- Next.js (pages-router)
- React-komponentit: [`Layout`](components/Layout.js), [`Navbar`](components/Navbar.js), [`Footer`](components/Footer.js)
- CSS Modules (styles/*.module.css)
- Staattinen data JSON / JS (siirrettävissä CMS:ään myöhemmin)

## Projektirakenne

```
components/   Yhteiset UI-komponentit
pages/        Reittikohtaiset sivut
data/         Staattinen sisältö (siirrettävä CMS:ään)
styles/       Tyylit (layout, sivukohtaiset)
public/       Kuvat ja staattiset assetit
```

## Kehitys

Asenna riippuvuudet:

```sh
npm install
```

Käynnistä dev:

```sh
npm run dev
```

Tuota build:

```sh
npm run build
npm start
```

## Sisällön päivitys

- Tapahtumat: muokkaa [data/events.js](data/events.js) (lisää objekti taulukkoon).
- Etusivun pilarit: [data/homeSections.json](data/homeSections.json)
- Resurssikortit: [data/homeResources.json](data/homeResources.json)
- Vappulehti: artikkelit (tällä hetkellä inline, siirrettävissä JSON:iin).
- Sanaristikko: sanat [`Crossword`](components/Crossword.js)

## SEO & Saavutettavuus

- Perus meta ja Open Graph: [`Layout`](components/Layout.js)
- Navigaatio ARIA: [`Navbar`](components/Navbar.js)
- Anchor-linkit sääntösivuilla nopeaan navigointiin.

## Roadmap

- Siirto headless CMS:ään (Sanity / Contentful)
- Artikkelien erottelu JSON / Markdown
- Sponsorit & FAQ -sivut
- Hakutoiminto
- Kuvien optimointi `next/image`

## Lisenssi

Sisäinen käyttö JYTYlle. Lisenssi tarkennetaan myöhemmin.