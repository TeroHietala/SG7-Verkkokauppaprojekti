import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SPA Example</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}