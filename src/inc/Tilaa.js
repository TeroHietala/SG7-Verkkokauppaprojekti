import React from "react";
import { useState } from "react";
import axios from "axios";
import uuid from 'react-native-uuid';

export default function Tilaa({cart}) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [productid, setProductid] = useState('');
    const [kpl, setKpl] = useState('');
    const [order, setOrder] = useState('');


// Tallentaa tilauksen tiedot tietokantaan
    function save(e) {
        e.preventDefault();
        const json = JSON.stringify({ first_name: fname, last_name: lname, product_id: productid, kpl: kpl});
        console.log(json)
        axios.post('http://localhost/verkkokauppa/order/add.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setOrder(order => [...order, response.data]);
            }).catch(error => {
                alert(error.response.data.error)
            });
    }
    
    return (
        <div className="container">
            <h3>Tilaa</h3>
            <form >
                <label>Etunimi</label><br />
                <input placeholder="Erkki" value={fname} onChange={e => setFname(e.target.value)} /><br />
                <label>Sukunimi</label><br />
                <input placeholder="Esimerkki" value={lname} onChange={e => setLname(e.target.value)} /><br />
                <button onClick={save}>Tilaa</button>
            </form>
        </div>
    );
}