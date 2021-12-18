import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function AddCategory() {
    const [category, setCat] = useState([]);
    const [name, setCatName] = useState('');
    const [image, setCatImage] = useState('');

    function kategoria(e) {
        e.preventDefault();
        //Tallentaessa tiedot tietokantaan, tyhjätään samalla inputit.
        setCatName('')
        setCatImage('')
      
        e.preventDefault();
        const json = JSON.stringify({ name: name, image: image })
        axios.post('http://localhost/verkkokauppa/products/addcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setCat(category => [...category, response.data]);
            }).catch(error => {
                alert(error.response.data.error)
            });
      }
      
    return (
        <div className='container'>
                  {/* Lisää Kategoria */}
      <Form onSubmit={kategoria}>
      <Form.Group className='mb-3' controlId='fname'>
          <Form.Label>Kategorian nimi:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nimi'
            value={name}
            onChange={e => setCatName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Lisää kuva</Form.Label>
        <Form.Control 
        type="file" 
        value={image}
        onChange={e=> setCatImage(e.target.value)}
        />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Lähetä
        </Button>
      </Form>
        </div>
    )
}

export default AddCategory
