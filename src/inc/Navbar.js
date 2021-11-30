import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cart from './Cart';
import Icon from "./Icon";
import IconSearch from "./IconSeach";

export default function Navbar({ url, cart, icon }) {

  //Hakee tietokannasta kategoriat
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

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <Link className="nav-link" to={{
          pathname: "/Home"
        }}>INSTRUMENT HEAVEN
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link className="nav-link" to={{
                pathname: "/Home"
              }}> Etusivu
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(category => (
                  <li key={category.id}>
                    <Link className="dropdown-item"
                      to={{
                        pathname: '/inc/Products',
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
              <Link className="nav-link" to={{
                pathname: "/inc/Discount",
              }}> Alennukset
              </Link>
            </li>
            <li class="nav-item">
              <IconSearch icon={icon} />
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Icon icon={icon} />
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
  )
}