import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar(cart) {

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
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Nuotti shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toglle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <Link className="nav-link" to="/">Etusivu</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown">Tuotteet</a>
              <ul className="dropdown-menu" aria-aria-labelledby="dropdown01">
                {categories.map(category => (
                  <li key={category.id}>
                    <Link className="dropdown-item"
                      to={{
                        pathname: '/',
                        state: {
                          id: category.id,
                          name: category.name
                        }
                      }}
                    >{category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/discount">Tarjoukset</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/shoppingbasket">Ostoskori</Link>
            </li>
            <li>
              <input placeholder="Käyttäjätunnus"></input>
            </li>
            <li>
              <input placeholder="Salasana"></input>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/register">Rekisteröidy</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contactus">Yhteystiedot</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}