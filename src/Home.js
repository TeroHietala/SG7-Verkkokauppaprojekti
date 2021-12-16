import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const address = "http://localhost/verkkokauppa/products/getcategories.php/"
    axios.get(address)
      .then((response) => {
        const json = response.data;
        setProducts(json);
      }).catch(error => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error);
        }
      })
  })

  return (
    <div class="container">
      <div class="row">
        <h3>Valikoima</h3>
        <div class="col" id="valikoima">
          {products.map(product => (
            <div key={product.id}>
              <img src={'http://localhost/verkkokauppa/images/' + product.image} alt={product.name} className="pikkukuva" />

              <Link className="valikko"
                to={{
                  pathname: '/inc/Products',

                  state: {
                    id: product.id,
                    name: product.name
                  }

                }}
              >{product.name}
              </Link>
            </div>
          ))}
        </div>
      </div>


      <div className="karuselli">
        <h3>Tarjouksia</h3>
        <Carousel fade>
          <Carousel.Item interval={2500}>
            <img
              className="karuselli1"
              src="http://localhost/verkkokauppa/images/tarjouskitara.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="text-block">
                <h3>AVAJAISETU!</h3>
                <p>NYT VAIN 700€</p>
                <p><s>1400€</s></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="karuselli1"
              src="http://localhost/verkkokauppa/images/tarjousrumpu.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <div className="text-block">
                <h3>Tarjous!</h3>
                <p>NYT VAIN 500€</p>
                <p><s>990€</s></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="karuselli1"
              src="http://localhost/verkkokauppa/images/tarjousviulu.jpg"
              alt="Image Three"
            />
            <Carousel.Caption>
              <div className="text-block">
                <h3>Tarjous!</h3>
                <p>NYT VAIN 400€</p>
                <p><s>600€</s></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="karuselli1"
              src="http://localhost/verkkokauppa/images/tarjousbasso.jpg"
              alt="Image Four"
            />
            <Carousel.Caption>
              <div className="text-block">
                <h3>Tarjous!</h3>
                <p>NYT VAIN 200€</p>
                <p><s>350€</s></p>
                <p><Link to="inc/Discount">Katso kaikki tarjoukset</Link></p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}