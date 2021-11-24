import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Discount({discount, url, addToCart}) {
    const [alet, setDiscount] = useState([]);

    useEffect(() => {
        if (discount !== null) {
        const discounts = "http://localhost/verkkokauppa/products/getdiscount.php/";
        axios.get(discounts) 
    
            .then((response) => {
                const json = response.data;
                setDiscount(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    }, [discount, url])

    return (
        <div className="container">
            <h3>Tarjous tuotteet</h3>
            {alet.map(alet => (
                <div key={alet.id}>
                    <p>{alet.name}</p>
                    <p>{alet.price} €</p>
                     <button className="btn btn-primary" type="button" onClick={e => addToCart(alet)}>Lisää ostoskoriin</button>
                    
                    <div>
                        {/* <img src={url + 'images/' + product.image} alt="" /> */}
                    </div>
                </div>
            ))}
        </div>
    );
}