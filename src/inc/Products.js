import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";


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

                <div class="row">
                    {products.map(product => (

                        
                            <div class='col-md-5 col-sm-10 ' style={{ padding: '10px'  }} key={product.id} >
                                <Card style={{  width: '18rem', height: '30rem', backgroundColor:'#101115' }}>
                                    <Card.Img id="pikkukuva" variant="top"  src={url + 'images/' + product.image} alt={product.name} />
                                        <Card.Body style={{ color: 'black' }}>
                                            <Card.Title style={{ color: 'white', textAlign: "center" }} >{product.name}</Card.Title>
                                            <Card.Text style={{ color: 'white', textAlign: "center"  }}>
                                                Tässä erinomainen tuote!
                                            </Card.Text>
                                            <p style={{ color: 'white', textAlign: "center" }}>{product.price} €</p>
                                        </Card.Body>
                                    
                                    <Link className="container"
                                        to={{
                                            pathname: '/inc/Tuote',
                                            state: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                image: product.image
                                            }
                                        }}
                                        >
                                            <p align="center">Katso tuote tiedot</p>   
                                        </Link>
                                    <button id="btn" className="btn" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                                </Card>
                            </div>
                    ))}
                </div>
        </div>
    );
}