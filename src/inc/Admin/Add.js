import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function Add() {
const [product, setProduct] = useState([]);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [category_id, setCategory_id] = useState('');
const [description, setDescription] = useState('');


//Tallentaa uusi tuote tietokantaan

function send(e) {
    e.preventDefault();
    //Tallentaessa tiedot tietokantaan, tyhjätään samalla inputit.
    setName('')
    setPrice('')
    setCategory_id('')
    setDescription('')
    setImage('')

    e.preventDefault();
    const json = JSON.stringify({ name: name, price: price, image: image, description: description })
    axios.post('http://localhost/verkkokauppa/products/addproducts.php', json, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            setProduct(product => [...product, response.data]);
        }).catch(error => {
            alert(error.response.data.error)
        });
}

    return (
    <div className='container'>
      {/* Lisää tuote Kategoriaan */}
  <Form onSubmit={send}>
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
        <Form.Label>Kategoria:</Form.Label>
        <Form.Check
        
          type="radio"
          value="1"
          label="Kitara"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange={e => setCategory_id(e.target.value)}
        />
        <Form.Check
          type="radio"
          value="2"
          label="Rumpu"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange={e => setCategory_id(e.target.value)}
        />
        <Form.Check
          type="radio"
          value="3"
          label="Basso"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          onChange={e => setCategory_id(e.target.value)}
        />
        <Form.Check
          type="radio"
          value="4"
          label="Viulu"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          onChange={e => setCategory_id(e.target.value)}
        />
        <Form.Check
          type="radio"
          value="5"
          label="Muut"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          onChange={e => setCategory_id(e.target.value)}
        />


        <Form.Group className='mb-3' controlId='feedback'>
          <Form.Label>Jokin muu kategoria</Form.Label>
          <Form.Control
            type='number'
            placeholder=''
            value={category_id}
            onChange={e => setCategory_id(e.target.value)}
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

export default Add
