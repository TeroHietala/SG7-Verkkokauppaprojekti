import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

export default function Holder() {
  return (
    <div className="container">
      <div className="karuselli">
      <h4>Kaunis etusivu</h4>
      <Carousel fade>
        <Carousel.Item interval={2500}>
          <img
            className="karuselli1 img-fluid"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
            
          />
          <Carousel.Caption>
            <h3>AVAJAISETU!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="karuselli1 img-fluid"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
          <h3>Tarjous</h3>
            <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}