import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'

export default function ContactUs () {
  const [fback, setFeedback] = useState([])
  const [fname, setFname] = useState('')
  const [responsemail, setRemail] = useState('')
  const [feedback, setFback] = useState('')
  function post(e) {
    e.preventDefault();
    setFname("");
    setRemail("");
    setFback("");
    const json = JSON.stringify({
      fname: fname,
      rmail: responsemail,
      feedback: feedback
    })
    axios
      .post('http://localhost/verkkokauppa/feedback/feedback.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setFeedback(feedback => [...feedback, response.data])
      })
      .catch(error => {
        alert(error.response.data.error)
      })

  
  }
  return (
    <div className='container'>
      Tähdellä merkityt kohdat ovat pakolliset, mikäli haluat kysymykseesi
      vastauksen sähköpostilla, ole hyvä ja täytä myös sähköpostiosoitteesi.
      <Form onSubmit={post}>
        <Form.Group className='mb-3' controlId='fname'>
          <Form.Label>Nimi *</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nimi'
            value={fname}
            onChange={e => setFname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='rmail'>
          <Form.Label>Sähköposti</Form.Label>
          <Form.Control
            type='email'
            placeholder='mattimalli@esimerkki.fi'
            value={responsemail}
            onChange={e => setRemail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='feedback'>
          <Form.Label>Tekstikenttä *</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Palaute tai kysymys.'
            rows={3}
            value={feedback}
            onChange={e => setFback(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Lähetä
        </Button>
      </Form>
    </div>
  )
}
