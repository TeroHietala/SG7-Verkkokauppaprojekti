import React from "react";
import { useState } from "react";
import uuid from 'react-native-uuid';
import Swal from 'sweetalert2';

export default function Tilaa({ url, cart }) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mail,setMail] = useState('');
    const [address, setAddress] = useState('');
    const [zip,setZip] = useState('');
    const [city, setCity] = useState('');
    const [phone,setPhone] = useState('');
    const [finished, setFinished] = useState(false);

    function order(e) {
        e.preventDefault();
        fetch(url + 'order/add.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: fname,
                last_name: lname,
                address: address,
                mail:mail,
                zip:zip,
                city:city,
                phone:phone,
                cart: cart,
            })
        })
            .then(res => {
                return res.json();
            })
            .then(
                (res) => {
                    setFinished(true);
                    localStorage.clear(cart);
                }, (error) => {
                    alert(error);
                }
            )
    }
    function alertClicked() {
        let timerInterval
Swal.fire({
  title: 'Kiitos tilauksesta !',
  html: 'Tilaustasi käsitellään, tämä ikkuna sammuu automaattisesti <b></b> ',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    window.location.reload(false);
}
})
    }

    let sum = 0;
    if (finished === false) {
        return (
            <div className="container">
                <h3>Ostoskori</h3>
                <table>
                    <tbody>
                        {cart.map(product => {
                            sum += parseFloat(product.price * product.amount);
                            return (
                                <tr key={uuid.v4()}>
                                    <td>{product.name}</td>
                                    <td>{product.price * product.amount}</td>
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
                                <label>Sähköposti</label><br />
                                <input type="email" placeholder="Esimerkki@esimerkki.fi" value={mail} onChange={e => setMail(e.target.value)} /><br />
                            </div>
                            <div>
                                <label>Postinumero</label><br />
                                <input type="number" placeholder="00100" value={zip} onChange={e => setZip(e.target.value)} /><br />
                            </div>
                            <div>
                                <label>Postinumero</label><br />
                                <input type="text" placeholder="Helsinki" value={city} onChange={e => setCity(e.target.value)} /><br />
                            </div>
                            <div>
                                <label>Postinumero</label><br />
                                <input type="number" placeholder="0501231234" value={phone} onChange={e => setPhone(e.target.value)} /><br />
                            </div>
                            <div>
                                <button className="btn"  style={{background: "#dd6b00", margin: 10}} onClick={alertClicked} >Tilaa</button>
                            </div>
                        </form>
                    </>
                }
            </div>
        )
    } /* else {
        return (<h3 style={{ 'padding-top': '100px' }} className="container">Than you for your order</h3>);
    } */
}