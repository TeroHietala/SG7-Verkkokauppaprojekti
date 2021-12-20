import React from "react";


export default function Tuote({url, product, addToCart}) {
    
    return (
        <div className="container">
            <p>{product.name}</p>
        <div className="row">
        <div className="col-md-5 col-sm-10">
            <img src={url + 'images/' + product.image} alt={product.name} className="isokuva img-fluid" />
        </div>
        <div className="col-md-5 col-sm-10">
            <p>{product.description}</p>
            </div>
        </div>
            <p>{product.price} €</p>
            <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    )
}