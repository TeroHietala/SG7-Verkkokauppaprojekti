import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ContactUs() {
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Sähköposti</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Tekstikenttä</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Lähetä
  </Button>
</Form>
        </div>
    );
}