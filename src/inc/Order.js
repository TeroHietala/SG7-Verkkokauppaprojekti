import React from "react";
import uuid from 'react-native-uuid';


export default function Order({cart, removeFromCart}) {
    return (
        <div>
            <h3>Ostoskori</h3>
            {cart.map(product => (
                //sum+=parseFloat(product.price);
                <div key={uuid.v4()}>
                    <td>{product.name}</td>
                    <td>{product.price} €</td>
                    <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                </div>
            ))}
        </div>
    );
}
