import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Discount({ url, discount, addToCart }) {
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
            <div className="row">
                {discounts.map(discount => (
                    
                    
                    <div className='col-lg-4 col-md-6 col-sm-10' style={{ padding: '10px'  }} key={discount.id}>
                        <Link
                                to={{
                                    pathname: '/inc/Tuote',
                                    state: {
                                        id: discount.id,
                                        name: discount.name,
                                        price: discount.price,
                                        image: discount.image
                                    }
                                }}
                            >
                            <Card style={{  width: '18rem', height: '30rem', backgroundColor:'#101115' }}>
                                <Card.Img id="pikkukuva"  src={url + 'images/' + discount.image} alt={discount.name} />
                                    <Card.Body style={{ color: 'black' }}>
                                                    <Card.Title style={{ color: 'white', textAlign: "center" }} >{discount.name}</Card.Title>
                                                    <Card.Text style={{ color: 'white', textAlign: "center"  }}>
                                                        Tässä erinomainen tarjous tuote!
                                                    </Card.Text>
                                                    <p style={{ color: 'white', textAlign: "center" }}>{discount.price} €</p>
                                    </Card.Body>
                                
                                    
                                <Link>
                                <button id="btn" className="btn" type="button" onClick={e => addToCart(discount)}>Lisää ostoskoriin</button>
                                </Link>
                            </Card>
                        </Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}