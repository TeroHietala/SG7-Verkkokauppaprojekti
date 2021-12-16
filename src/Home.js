import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <div className="container">
          <div className="karuselli">

          <h4>Kaunis etusivu</h4>
          <Carousel fade>
            <Carousel.Item interval={2500}>
            <img
                className="karuselli1"
                src="http://localhost/verkkokauppa/images/tarjouskitara.jpg"
                alt="Image Two"
              />
              <Carousel.Caption>
              <div className="text-block">
                <h3>700€</h3>
                <p><del>1200€</del></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
            <div className="text-block1">
              <img
                className="karuselli1"
                src="http://localhost/verkkokauppa/images/tarjouskitara.jpg"
                alt="Image Two"
              />
              </div>
              <Carousel.Caption>
                <div className="text-block">
                <h3>700€</h3>
                <p><del>1200€</del></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
                </div>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          </div>
      );
    }