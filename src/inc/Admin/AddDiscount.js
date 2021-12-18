
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

export default function AddDiscount() {
    const[discount,setDiscount] =useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

function alennus(e) {
e.preventDefault();
//Tallentaessa tiedot tietokantaan, tyhjätään samalla inputit.
setName('')
setPrice('')
setDescription('')
setImage('')



e.preventDefault();
const json = JSON.stringify({ name: name, price: price, image: image,description: description })
axios.post('http://localhost/verkkokauppa/products/adddiscount.php', json, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((response) => {
    setDiscount(discount => [...discount, response.data]);
}).catch(error => {
    alert(error.response.data.error)
});
}

    return (
        <div className='container'>
        {/* Lisää tuote Kategoriaan */}
    <Form onSubmit={alennus}>
          <Form.Group className='mb-3' controlId='fname'>
            <Form.Label>Tuotteen nimi:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Nimi'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='rmail'>
            <Form.Label>Tuotteen hinta</Form.Label>
            <Form.Control
              type='number'
              placeholder=''
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Lisää kuva</Form.Label>
          <Form.Control 
          type="file" 
          value={image}
          onChange={e=> setImage(e.target.value)}
          />
          </Form.Group>
          <Form.Group className='mb-3' controlId='feedback'>
            <Form.Label>Tuotekuvaus</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Tuotekuvaus.'
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Form.Group>
  
          <Button variant='primary' type='submit'>
            Lähetä
          </Button>
        </Form>
        </div>
    )
}



