import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar({URL, setCategory}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(URL + "products/getcategories.php")
    .then((response) => {
      const json = response.data;
      setCategories(json);
      setCategory(json[0]);
      console.log(categories)
    }).catch(error => {
      if (error.response === undefined) {
        alert(error);
      }
    })
  },[])

  //kategorian haku backendistä
  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(URL + 'products/getcategories.php');
        const json = await response.json();
        if (response.ok) {
          setCategories(json);
          setCategory(json[0]);
          console.log(categories)
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    getCategories();
  }, [])

 
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">NUOTTI SHOP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">Etusivu</Link>
            </li>
            {/* <NavDropdown title="Tuotteet" id="nav-dropdown">
        <NavDropdown.Item eventKey="/products">Kitarat</NavDropdown.Item>
        <NavDropdown.Item eventKey="/products">Rummut</NavDropdown.Item>
        <NavDropdown.Item eventKey="/products">Bassot</NavDropdown.Item>
        <NavDropdown.Item eventKey="/products">Viulut</NavDropdown.Item>
        <NavDropdown.Item eventKey="/products">Muut</NavDropdown.Item>

      </NavDropdown> */}
            <li class="nav-item">
              <Link className="nav-link" to="/discount">Tarjoukset</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/shoppingbasket">Ostoskori</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contactus">Yhteystiedot</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01">Tuotteet</a>
              <ul>
                {categories.map(category => (
                  <li key={category.id}>
                    <Link
                      className="dropdown-item"
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

            <li>
              <input placeholder="Käyttäjätunnus"></input>
            </li>
            <li>
              <input placeholder="Salasana"></input>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/register">Reksiteröidy</Link>
            </li>
          </ul>
          <ul className='navba-nav ml-auto'>
            <li className='nav-item'>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}