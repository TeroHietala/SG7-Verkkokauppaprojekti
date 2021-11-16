import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer bg-dark">
            <div className="container-fluid">
            <div class="row">
                <div class="column">
                    <h4>Tietoa meistä</h4>
                    <p>
                    <ul>
                      <li><Link to="/inc/GDPR">Rekisteri- ja tietosuojaseloste</Link></li>
                      <li><Link to="/inc/Toimitusehdot">Toimitusehdot, kulut ja tavat</Link></li>
                      <li><Link to="/inc/ContactUs">Ota yhteyttä</Link></li>
                      <li><Link to="/inc/Maksutavat">Maksutavat</Link></li>
                      <li><Link to="/inc/Takuu">Takuu ja palautus</Link></li>
                    </ul>
                    </p>
                </div>
                <div class="column">
                    <h4>Nuottishop 2021</h4>
                    <p></p>
                </div>
                <div class="column">
                    <h4>Ota yhteyttä</h4>
                    <p>Yhteystiedot</p>
                    <p>Some text..</p>
                    <p>Puhelinnumero</p>
                    <p>Y-tunnus</p>
  </div>
</div>
            </div>
            
        </footer>
    )
}