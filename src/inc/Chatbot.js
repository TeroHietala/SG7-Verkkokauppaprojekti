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

//Chatbot vastaukset
const steps = [
  //Kysymys 1 ja vaihtoehdot
  {
    id: "1",
    message: "Terve. Minun nimeni on Chatbot. Valitse alta kuinka voin auttaa.",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Tarvitsen apua tuotteiden tilaamiseen", trigger: "3" },
      { value: 2, label: "Et ole vielä saanut tilaamaasi tuotetta?", trigger: "4" },
      { value: 3, label: "Muut asiat.", trigger: "5" }
    ]
  },
  //Vaihtoehto 1
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
      { value: 3, label: "Muissa tilauksiin liittyvissä asiossa?", trigger: "9" }
    ]
  },
  {
    id: "7",
    message: "Voit etsiä tuotteita nimellä suurennuslasin alta.",
    end:true
  },
  {
    id: "8",
    message: "Tuotteemme vaihtelevat saatavuuden mukaan. Voit kysyä asiakaspalvelusta onko haluamaasi tuotetta tulossa.",
    end:true
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
    message: "Ole hyvä ja ota yhteyttä asiakaspalveluun",
    trigger: "50"
  },{
    id: "50",
    options: [
    {value: 1, label: "Sähköposti", trigger: "51"},
    {value: 2, label: "Puhelin numero", trigger: "52"},
  ]
},
  {
    id: "51",
    message: "Voit lähettää sähköpostia asiakaspalveluumme. Vastaamme viestiisi mahdollisimman pian. aspa@iheaven.fi",
    end: true
  },
  {
    id: "52",
    message: "Henkilökuntamme vastaa numerosta 090 008 001 99",
    end: true
  },
];

export default function chatbot() {
  return (
    
    <ThemeProvider theme={theme}>
<Chatbot  id="chatbot" steps={steps} />
</ThemeProvider>
        
  );
}
