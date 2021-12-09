import React from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// tehkää testikäyttäjä tietokantaan rekisteröitymis sivuilla joilla pääsette sitten kirjautumaan



// Kirjautumis sivu
export default function Login() {
    const [customers, setCustomers] = useState([]);
    const [mail_username, setMail] = useState('');
    const [password, setPasswd] = useState('');

    //Tallentaa asiakkaan tiedot tietokantaan
    function save(e) {
        e.preventDefault();
        const json = JSON.stringify({ mail_username: mail_username, password: password })
        axios.post("http://localhost/verkkokauppa/customers/login.php", json)
            .then((response) => {
                const json = response.data;
                setCustomers(json);
                //tallentaa kirjautuneen käyttäjän sessionStorageen
                sessionStorage.setItem('user', JSON.stringify(json));
                //console.log(sessionStorage.getItem('user'))
            }).catch(error => {
                alert(error.response.data.error)
            });
    }

    useEffect(() => {
        if ('user' in sessionStorage) {
            setCustomers(JSON.parse(sessionStorage.getItem('user')));
        }
    }, [])

    //Poistaa käyttäjän tiedot sessionStoragesta ja tyhjentää customer muuttujan
    function emptyUser(customers) {
        sessionStorage.clear(customers);
        setCustomers([])
        window.location.reload(false);
    }
    //console.log(customers)
    return (
        <div className="container">

            <h3>Kirjaudu</h3>
            <p>Syötä sähköposti osoitteesi ja salasanasi</p>
            <form>
                <label>Sähköposti</label><br />
                <input placeholder="Sähköposti" value={mail_username} onChange={e => setMail(e.target.value)} /><br />
                <label>Salasana</label><br />
                <input placeholder="Salasana" type="password" value={password} onChange={e => setPasswd(e.target.value)} /><br />
                <button onClick={save}>Kirjaudu</button>
                <p>Voit rekisteröityä alla olevasta linkistä</p>
                <Link className="nav-link" aria-current="page" to="/inc/Register">Rekisteröidy</Link>

                {/* Tämä positetaan kunhan logout toimii */}
                {customers.map(customer => (
                    <div key={customer.cust_nro}>
                        <p><p>Tervetuloa </p>{customer.first_name} {customer.last_name} <br /><button onClick={e => emptyUser()}>Logout</button></p>
                    </div>

                ))}
            </form>
        </div>
    );
}