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

                        
                            <div class='col-4' key={product.id} >
                                <Card  style={{ width: '18rem', backgroundColor:'#404040  ' }}>
                                    <Card.Img   variant="top" className="pikkukuva" src={url + 'images/' + product.image} alt={product.name} />
                                        <Card.Body style={{ color: 'black' }}>
                                            <Card.Title style={{ color: 'white', textAlign: "center" }} >{product.name}</Card.Title>
                                            <Card.Text style={{ color: 'white'  }}>
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
                                            <button className="btn btn-primary" type="button">Avaa tuote tästä!</button>
                                        </Link>
                                    <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                                </Card>
                            </div>
                    ))}
                </div>
        </div>
    );
}