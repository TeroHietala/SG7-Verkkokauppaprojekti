import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Products({ url, category, addToCart }) {
    const [products, setProducts] = useState([]);

    //Hakee tietokannasta tuotteet
    useEffect(() => {
        if (category !== null) {
            const address = url + "products/getproducts.php/" + category?.id;

            axios.get(address)
                .then((response) => {
                    const json = response.data;
                    setProducts(json);
                }).catch(error => {
                    if (error.response === undefined) {
                        alert(error);
                    } else {
                        alert(error.response.data.error);
                    }
                })
        }

    }, [category, url])

    return (
        <div className="container">
            <h3>Tuotteet {category?.name}</h3>

            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price} €</p>
                    <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>

                    <div>
                        {/* <img src={url + 'images/' + product.image} alt="" /> */}
                    </div>
                </div>
            ))}
        </div>
    );
}