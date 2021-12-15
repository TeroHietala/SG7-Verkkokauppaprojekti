import React from "react";
import { useState } from "react";
import axios from "axios";

//Asiakkaan rekisteröintisivu
export default function Register() {
    const [customer, setCustomer] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mail, setMail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [addr, setAddr] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    //Tallentaa asiakkaan tiedot tietokantaan
    function save(e) {
        e.preventDefault();
        const json = JSON.stringify({ fname: fname, lname: lname, mail: mail, passwd: passwd, addr: addr, zip: zip, city: city, phone: phone })
        axios.post('http://localhost/verkkokauppa/customers/register.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setCustomer(customer => [...customer, response.data]);
            }).catch(error => {
                alert(error.response.data.error)
            });
    }
    //Tyhjentää inputit ja muuttujat
    function clear(e) {
        e.preventDefault();
        setFname('')
        setLname('')
        setMail('')
        setPasswd('')
        setAddr('')
        setZip('')
        setCity('')
        setPhone('')
    }

    return (
        <div className="container">
            <h3>Rekisteröidy</h3>
            <form onSubmit={save}>
                <label>Etunimi</label><br />
                <input placeholder="Erkki" value={fname} onChange={e => setFname(e.target.value)} /><br />
                <label>Sukunimi</label><br />
                <input placeholder="Esimerkki" value={lname} onChange={e => setLname(e.target.value)} /><br />
                <label>Sähköposti</label><br />
                <input placeholder="erkki.esimerkki@sähköposti.fi" value={mail} onChange={e => setMail(e.target.value)} /><br />
                <label>Salasana</label><br />
                <input placeholder="Salasana" value={passwd} onChange={e => setPasswd(e.target.value)} /><br />
                <label>Osoite</label><br />
                <input placeholder="Kadunnimi" value={addr} onChange={e => setAddr(e.target.value)} /><br />
                <label>Postinumero</label><br />
                <input placeholder="10100" value={zip} onChange={e => setZip(e.target.value)} /><br />
                <label>Postitoimipaikka</label><br />
                <input placeholder="Helsinki" value={city} onChange={e => setCity(e.target.value)} /><br />
                <label>Puhelin numero</label><br />
                <input placeholder="0501231234" value={phone} onChange={e => setPhone(e.target.value)} /><br />
                <button onClick={clear}>Rekisteröidy</button>
            </form>
        </div>
    );
}