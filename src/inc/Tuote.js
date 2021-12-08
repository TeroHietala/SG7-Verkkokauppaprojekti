import React from "react";


export default function Tuote({product}) {
    return (
        <div style={{'padding-top': '50px'}}>
            <p>{product?.name}</p>
            <p>{product.price} €</p>
            
        </div>
    )

}