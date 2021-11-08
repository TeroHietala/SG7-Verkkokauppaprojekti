import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
        <li class="nav-item">
        <Link className="nav-link" to="/products">Tuotteet</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/discount">Tarjoukset</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/shoppingbasket">Ostoskori</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contactus">Yhteystiedot</Link>
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
    </div>
  </div>
</nav>
)
}