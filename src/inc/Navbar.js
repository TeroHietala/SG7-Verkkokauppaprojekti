import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cart from './Cart';

export default function Navbar({cart, uri, setCategory}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/verkkokauppa/products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        console.log(categories)
      }).catch(error => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error)
        }
      })
  }, [])

  return (

    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Nuotti shop</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Etusivu</Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="Discount">Tarjoukset</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Register">Rekisteröidy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ContactUs">Yhteystiedot</Link>
            </li>
          </ul>
          <ul className="navba-nav ml-auto">
            <li className="nav-item">
              <Cart cart={cart} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}