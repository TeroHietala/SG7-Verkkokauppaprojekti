import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Discount({ url, discount, addToCart}) {
    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        if (discount !== null) {
        const discountti = url + "products/getdiscount.php/";

        axios.get(discountti) 
            .then((response) => {
                const json = response.data;
                setDiscounts(json);
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
            {discounts.map(discount => (
                <div key={discount.id}>
                    <p>{discount.name}</p>
                    <p>{discount.price} €</p>
                     <button className="btn btn-primary" type="button" onClick={e => addToCart(discount)}>Lisää ostoskoriin</button>
                    
                    <div>
                        {/* <img src={url + 'images/' + product.image} alt="" /> */}
                    </div>
                </div>
            ))}
        </div>
    );
}