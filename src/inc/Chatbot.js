import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

//Chatbot tyylit
const theme = {
  headerBgColor: '#101115',
  headerFontColor: '#f0ccab',
  headerFontSize: '20px',
  botBubbleColor: '#dd6b00',
  botFontColor: '#101115',
  userBubbleColor: '#f0ccab',
  userFontColor: '#4a4a4a',
}

//Chatbot keskustelut
const steps = [
  {
    id: "1",
    message: "Terve. Minun nimeni on Chatbot. Valitse alta kuinka voin auttaa.",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Tarvitsen apua tuotteiden tilaamiseen", trigger: "3" },
      { value: 2, label: "En ole vielä saanut tilaamaani tuotetta?", trigger: "4" },
      { value: 3, label: "Muut asiat.", trigger: "5" }
    ]
  },
  {
    id: "3",
    message: "Voit lisätä haluamasi tuotteen ostoskoriin. Mene sen jälkeen ostoskoriin ja paina 'tilaa tuote' painiketta. Voit tilata tuotteen ilman kirjautumista. Tarvitsetko lisää apua?",
    trigger: "6"
  },
  {
    id: "6",
    options: [
      { value: 1, label: "En löydä oikeaa tuotetta", trigger: "7" },
      { value: 2, label: "Tuotetta ei ole verkkokaupassa", trigger: "8" },
      { value: 3, label: "Muissa tilauksiin liittyvissä asiossa?", trigger: "21" }
    ]
  },
  {
    id: "7",
    message: "Voit etsiä tuotteita nimellä suurennuslasin alta. Voinko vielä auttaa sinua?", trigger: "20",
  },
  {
    id: "8",
    message: "Tuotteemme vaihtelevat saatavuuden mukaan. Voit kysyä asiakaspalvelusta onko haluamaasi tuotetta tulossa.", trigger: "20",
  },
  {
    id: "9", message: "Ota yhteyttä asiakaspalveluun.",
    trigger: "50"
  },
  {
    id: "4",
    message: "Onko tilauksesi tekemisestä aikaa alle vai yli kaksi viikkoa?",
    trigger: "10"
  },
  {
    id: "10",
    options: [
      { value: 1, label: "Alle", trigger: "11" },
      { value: 2, label: "Yli", trigger: "12" },
    ]
  },
  {
    id: "11",
    message: "Pyydän sinua odottamaan vielä hetken. Jos tuote ei ole saapunut kahden viikon kuluttua tilauksesta, ota yhteyttä asiakaspalveluun.",
    trigger: "50"
  },
  {
    id: "12",
    message: "Valitettavasti toimituksessa on tapahtunut jokin yllättävä viivästys. Voit ottaa yhteyttä asiakaspalveluun lisätietojen saamiseksi.",
    trigger: "50"
  },
  {
    id: "5",
    options: [
      { value: 1, label: "Olen unohtanut salasanani enkä pysty kirjautumaan", trigger: "62" },
      { value: 2, label: "Mistä löydän mahdolliset maksutavat?", trigger: "63" },
      { value: 3, label: "Miten voin antaa palautetta?", trigger: "64" }
    ]
  },
  {
    id: "20",
    options: [
      { value: 1, label: "Kyllä, kiitos", trigger: "2" },
      { value: 2, label: "Ei, kiitos", trigger: "60" }
    ]
  },
  {
    id: "21",
    options: [
      { value: 1, label: "Kyllä", trigger: "22" },
      { value: 2, label: "En", trigger: "60" }
    ]
  },
  {
    id: "22",
    options: [
      { value: 1, label: "Saanko tilauksesta vahvistuksen?", trigger: "23" },
      { value: 2, label: "Saanko lähetyksestä seurantakoodin?", trigger: "24" }
    ]
  },
  {
    id: "23",
    message: "Kyllä. Saat vahvistuksen heti kun tilauksenne on saapunut meille. Voinko vielä auttaa sinua?", trigger: "20",
  },
  {
    id: "24",
    message: "Kyllä. Lähetämme seurantakoodin heti kunnes tuotteet ovat lähetetty", trigger: "20",
  },
  {
    id: "50",
    options: [
      { value: 1, label: "Sähköposti", trigger: "51" },
      { value: 2, label: "Puhelin numero", trigger: "52" },
    ]
  },
  {
    id: "51",
    message: "Voit lähettää meille sähköpostia osoitteeseen aspa@iheaven.fi. Vastaamme viestiisi mahdollisimman pian. Tarvitsetko apua muissa asiossa?", trigger: "20",
  },
  {
    id: "52",
    message: "Tavoitat meidät numerosta 090 008 001 99. Olemme paikalla arkisin Ma-Pe kello 9-17 sekä La kello 11-16. Voinko vielä auttaa sinua?", trigger: "20",
  },
  {
    id: "61",
    message: "Ole hyvä ja ota yhteyttä asiakaspalveluun",
    trigger: "50"
  },
  {
    id: "62",
    message: "Ota yhteyttä asiakaspalveluun saadaksesi uuden salasanan. Voit valita otatko yhteyttä sähköpostilla vai puhelimella.", trigger: "50",
  },
  {
    id: "63",
    message: "Löydät mahdolliset maksutavat sivun alhaalta 'Maksutavat' tekstin alta. Voinko vielä auttaa sinua?", trigger: "20",
  },
  {
    id: "64",
    message: "Voit antaa palautetta sivun alareunasta löytyvän 'Ota yhteyttä' tekstin alta. Täytä ja lähetä lomake. Vastaamme palautteeseen mahdollisimman pikaisesti. Voinko vielä auttaa sinua?", trigger: "20",
  },
  {
    id: "60",
    message: "Kiitos. Hyvää päivän jatkoa.",
    end: true
  },
];

export default function chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <Chatbot id="chatbot" steps={steps} />
    </ThemeProvider>
  );
}