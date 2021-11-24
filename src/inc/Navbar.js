import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cart from './Cart';

export default function Navbar({url, cart, setCategory}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error)
        }
      })
  }, [url])

  return (
    <div className="navi">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Nuotti shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toglle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Etusivu</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown">Tuotteet</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown01">
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

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/inc/Discount">Alet</Link>
            </li>


        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Cart cart={cart} />        
          </li>
        </ul>
        </div>

      </div>
    </nav>
    </div>
  )
}