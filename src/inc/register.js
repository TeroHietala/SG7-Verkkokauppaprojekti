import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2';

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
        //Tallentaessa tiedot tietokantaan, tyhjätään samalla inputit.
        setFname('')
        setLname('')
        setMail('')
        setPasswd('')
        setAddr('')
        setZip('')
        setCity('')
        setPhone('')
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
    function alertClicked() {
        let timerInterval
        Swal.fire({
            title: 'Kiitos rekisteröitymisestä!',
            html: 'Rekisteröintiä käsitellään, tämä ikkuna sammuu automaattisesti ja voit sen jälkeen kirjautua sivulle. <b></b> ',
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

    return (
        <div className="container">
            <h3>Rekisteröidy</h3>
            <Form onSubmit={save}>
                <Form.Group className='mb-3' controlId='fname'>
                    <Form.Label>Etunimi</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Etunimi'
                        value={fname}
                        onChange={e => setFname(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='lname'>
                    <Form.Label>Sukunimi</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Sukunimi'
                        value={lname}
                        onChange={e => setLname(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='mail'>
                    <Form.Label>Sähköposti</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='mattimalli@esimerkki.fi'
                        value={mail}
                        onChange={e => setMail(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='passwd'>
                    <Form.Label>Salasana</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Salasana'
                        value={passwd}
                        onChange={e => setPasswd(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>Osoite</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Kadunnimi'
                        value={addr}
                        onChange={e => setAddr(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='zip'>
                    <Form.Label>Postinumero</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Postinro'
                        value={zip}
                        onChange={e => setZip(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='city'>
                    <Form.Label>Postitoimipaikka</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Postitoimipaikka'
                        value={city}
                        onChange={e => setCity(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='phone'>
                    <Form.Label>Puhelinnumero</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Puhelinnumero'
                        value={phone}
                        onChange={e => setPhone(e.target.value)} />
                </Form.Group>
                <Button id="btn" type='submit' onClick={alertClicked} >Lähetä</Button>
            </Form>
        </div>
    );
}