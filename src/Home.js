import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Home({ URL, category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category !== null) {
            const address = URL + "products/getproducts.php/" + category?.id;

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

    }, [category])
    return (
        <div>
            <h3>{category?.name}</h3>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <div>
                        <img src={URL + 'images/' + product.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}