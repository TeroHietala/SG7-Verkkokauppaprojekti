import React from "react";
import uuid from 'react-native-uuid';
import { useState, useEffect, createRef } from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import Products from "./Products";
import Discount from "./Discount";
import { Link } from "react-router-dom";


export default function Order({ url, cart, removeFromCart, updateAmount, empty }) {
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

    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product)
        setInputIndex(index);
    }

    let sum = 0;
    return (
        <div className="container">
            <tr className="row">
                <h3>Ostoskori</h3>
                <hr></hr>
                <tr className="container-fluid">
                    <td className="col-4">Tuote:</td>
                    <td className="col-4">Hinta:</td>
                    <td className="col-3"></td>
                    <td className="col-3">Määrä:</td>
                    <td className="col-2"></td>

                    <td>
                    

                    </td>
                    <hr></hr>
                    {cart.map((product, index) => (

                        <tr key={uuid.v4()}>
                            <td style={{ padding: 15 }} className="col-2">{product.name}</td>
                            <td style={{ padding: 15 }} className="col-2">{product.price} €</td>

                            <td className="col-2" style={{ padding: 15 }}><input
                                ref={inputs[index]}
                                style={{ width: '60px' }}
                                type="number" step="1" min="1" max="100"
                                onChange={e => changeAmount(e, product, index)}
                                value={product.amount}
                            />

                                <img src={url + 'images/' + product.image} alt={product.name} className="col-4 pikkukuva2" style={{ padding: 5 }} />
                            </td>
                            <td className="col-2" style={{ padding: 15 }}>
                                {product.price}€ x {product.amount} 
                            </td>

                            <td style={{ padding: 15 }} className="col-2"><a href="#" onClick={() => removeFromCart(product)}>Delete</a>
                            
                            </td>
                            
                        </tr>
                        

                    ))}
                    <hr></hr>
                    {cart.map(product => {
                        sum += parseFloat(product.price * product.amount);
                        return (
                            
                       <tr key={uuid.v4()}>
                           
                                <td className="col-8">{product.name}:</td>
                                <td className="col-2">{product.price * product.amount} €</td>
                                <td></td>
                            </tr>
                        )
                    })}
                    <hr></hr>
                    <tr key={uuid.v4()} className="col-12">

                        <td className="col">

                        </td>
                        <td className="col-12">Lopullinen summa: {sum.toFixed(2)} €</td>
                    </tr>
                    <hr></hr>
                    <tr key={uuid.v4()}>
                        <Link className="nav-link" to={{
                            pathname: "/inc/Tilaa",
                        }}> 
                        
                        Tilaa
                        </Link>
                        
                        <td className="sumrow"><a href="/inc/order" onClick={() => empty(null)}>Tyhjennä</a></td>
                        
                    </tr>
                </tr>
                </tr>
                
        </div>
    );
}
