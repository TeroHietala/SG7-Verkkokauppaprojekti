import React from "react";
import uuid from 'react-native-uuid';
import { useState, useEffect, createRef } from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import Products from "./Products";
import Discount from "./Discount";
import { Link } from "react-router-dom";


export default function Order({ url, cart, removeFromCart, updateAmount, empty}) {
    const [inputs, setInputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = createRef();
        }
    }, [inputs])

    useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
        inputs[inputIndex].current.focus();
        }
    }, [cart])

    function changeAmount(e,product,index) {
        updateAmount(e.target.value,product)
        setInputIndex(index);
    }


    return (
    <div className="container">
        <tr>
            <h3>Ostoskori</h3>
        <tr>
            {cart.map((product,index) => (
                <tr key={uuid.v4()}>
                    <td>{product.name}</td>
                    <td style={{padding: 15}}>{product.price} €</td>
                    
                <td><input
                ref={inputs[index]}
                style={{width: '60px'}}
                type="number" step="1" min="1" max="100"
                onChange={e => changeAmount(e,product,index)}
                        value={product.amount} />

                    <img src={url + 'images/' + product.image} alt={product.name} className="pikkukuva" />
                    </td> 
                    <td style={{ padding: 15 }}><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                </tr>
            ))}
            <tr key={uuid.v4()}>

                <Link className="nav-link" to={{
                    pathname: "/inc/Tilaa",
                    }}> Tilaa
                </Link>
                <td className="sumrow"><a href="/inc/order" onClick={() => empty(null)}>Tyhjennä</a></td>
            </tr>
        </tr>
        </tr>
    </div>
    );
}
