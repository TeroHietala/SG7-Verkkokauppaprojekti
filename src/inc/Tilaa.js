import React from "react";
import { useState } from "react";
import uuid from 'react-native-uuid';

export default function Tilaa({url, cart}) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [finished, setFinished] = useState(false);

    function order(e) {
        e.preventDefault();
        fetch(url + 'order/add.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type':  'application/json',
            },
            body: JSON.stringify({
                first_name: fname,
                last_name: lname,
                address: address,
                cart: cart,
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        )
    }

    let sum = 0;
    if (finished === false) {
    return (
        <div className="container">
            <h3>Ostoskori</h3>
            <table>
                <tbody>
                    {cart.map(product => {
                        sum+=parseFloat(product.price * product.amount);
                        return (
                            <tr key={uuid.v4()}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                <tr key={uuid.v4()}>
                    <td></td>
                    <td>{sum.toFixed(2)} €</td>
                </tr>
                </tbody>
            </table>
                {cart.length > 0 &&
                <>
                <h3>Ostajan tiedot</h3>
                    <form onSubmit={order}>
                        <div>
                            <label>Etunimi</label><br />
                            <input placeholder="Erkki" value={fname} onChange={e => setFname(e.target.value)} /><br />
                        </div>
                        <div>
                            <label>Sukunimi</label><br />
                            <input placeholder="Esimerkki" value={lname} onChange={e => setLname(e.target.value)} /><br />
                        </div>
                        <div>
                            <label>Osoite</label><br />
                            <input placeholder="Esimerkkitie 12" value={address} onChange={e => setAddress(e.target.value)} /><br />
                    </div>
                    <div>
                        <button>Tilaa</button>
                    </div>
             </form>
                </>
                }
        </div>
    )
} else {
    return (<h3 style={{'padding-top' : '100px'}}>Than you for your order</h3>);
}
}