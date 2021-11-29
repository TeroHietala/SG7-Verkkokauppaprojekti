import React from "react";
import { Link } from "react-router-dom";

export default function GDPR() {
    const handleClick = () => {
        window.open("https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX%3A32016R0679#d1e2144-1-1");
      };
    return (
        <div className="container">
                            <h3>Rekisteri- ja tietosuojaseloste</h3>
                <p>
                    Tämä on Yrityksen EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 16.11.2021. Viimeisin muutos 16.11.2021.
                </p>
    

                <h3>1. Rekisterinpitäjä</h3>
                <p>
                    NuottiShop, Mikämikämaa 12, 90650 Oulu
                </p>

                <h3>2. Rekisteristä vastaava yhteyshenkilö</h3>
                <p>Etunimi Sukunimi, sähköposti, puhelinnumero</p>
                <p>
                    Jos organisaatiossasi on tietosuojavastaava, kirjaa tähän vähintään hänen yhteystietonsa. Muutoin kuka tahansa yhteyshenkilö.
                </p>
                

                <h3>3. Asiakasrekisteri</h3>
                <p>
                    NuottiShop:in asiakasrekisteriä säilyttää Nuottishop ja sen hallinnasta pitää huolta NuottiShop.
                </p>

                <h3>4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h3>
                <p>EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on</p>
                <p>- henkilön suostumus (dokumentoitu, vapaaehtoinen, yksilöity, tietoinen ja yksiselitteinen)</p>
                <p>- sopimus, jossa rekisteröity on osapuolena</p>
                <p>- laki</p>
                <p>- rekisterinpitäjän oikeutettu etu (esim. asiakassuhde ennen sopimusta, työsuhde, jäsenyys).</p>
                <p>
                    Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi tms.
                </p>
                <p>
                    Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin, eikä NuottiShop luovuta tietoja kolmansille osapuolille. 
                </p>
                

                <h3>5. Rekisterin tietosisältö</h3>
                <p>
                    Rekisteriin tallennettavia tietoja ovat: henkilön nimi, asema, yritys/organisaatio, yhteystiedot (puhelinnumero, sähköpostiosoite, osoite), 
                    www-sivustojen osoitteet, verkkoyhteyden IP-osoite, tunnukset/profiilit sosiaalisen median palveluissa, tiedot tilatuista palveluista ja niiden muutoksista, 
                    laskutustiedot, muut asiakassuhteeseen ja tilattuihin palveluihin liittyvät tiedot.
                </p>
                <p>
                    Tiedot säilytetään rekisterissä toistaiseksi.
                </p>
                <p>
                    Verkkosivuston vierailijoiden IP-osoitteita ja palvelun toiminnoille välttämättömiä evästeitä käsitellään oikeutetun edun perusteella mm. 
                    tietoturvasta huolehtimiseksi ja sivuston vierailijoiden tilastotietojen keruuta varten niissä tapauksissa, kun niiden voidaan katsoa olevan henkilötietoja. 
                    Kolmansien osapuolten evästeille pyydetään tarvittaessa suostumus erikseen.
                </p>
                <h3>6. Säännönmukaiset tietolähteet</h3>
                <p>
                    Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm. www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, 
                    puhelimitse, sosiaalisen median palvelujen kautta, sopimuksista, asiakastapaamisista ja muista tilanteista, 
                    joissa asiakas luovuttaa tietojaan.
                </p>
                <p>
                    Yritysten ja muiden organisaatioiden yhteyshenkilöiden tietoja voidaan kerätä myös julkisista lähteistä kuten verkkosivuilta, hakemistopalveluista ja muilta yrityksiltä.
                </p>
                

                <h3>7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h3>
                <p>
                    Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on sovittu asiakkaan kanssa.
                </p>
                <p>
                    Tietoja voidaan siirtää rekisterinpitäjän toimesta myös EU:n tai ETA:n ulkopuolelle.
                </p>
                
                <h3>8. Rekisterin suojauksen periaatteet</h3>
                <p>
                    Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. 
                    Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. 
                    Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta 
                    kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden työnkuvaan se kuuluu.
                </p>
                

                <h3>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h3>
                <p>
                    Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai 
                    puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. 
                    Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
                </p>
                

                <h3>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h3>
                <p>
                    Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä ("oikeus tulla unohdetuksi"). 
                    Niin ikään rekisteröidyillä on muut <Link onClick={handleClick}>EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet</Link> kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. 
                    Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. 
                    Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).       
                </p>
        </div>
    );
}