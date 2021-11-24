import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <h3>Kirjaudu</h3>
            <p>Syötä sähköposti osoitteesi ja salasanasi</p>
            <form>
                <label>Sähköposti</label><br />
                <input placeholder="Sähköposti" /><br />
                <label>Salasana</label><br />
                <input placeholder="Salasana" /><br />
                <button>Kirjaudu</button>
                <Link className="nav-link" aria-current="page" to="/inc/Register">Rekisteröidy</Link>
            </form>
        </div>
    );
}