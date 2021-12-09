import React from "react";



export default function Tuote({url, product, addToCart}) {

    return (
        <div className="container">
            <p>{product.name}</p>
            <img src={url + 'images/' + product.image} alt={product.name} className="pikkukuva" />
            <p>{product.price} €</p>
            <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    )
}