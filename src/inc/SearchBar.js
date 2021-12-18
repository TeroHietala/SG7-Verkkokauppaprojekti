import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function SearchBar({ url, addToCart }) {

    const [allData, setAllData] = useState([]);
    const [searchItem, setSearchItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    

    // Hakee kaikki tuotteet product ja tarjous taulusta
    useEffect(() => {
        if (allData !== null) {
            const address = url + "products/searchproducts.php/";
            axios.get(address)
                .then((response) => {
                    const json = response.data;
                    setAllData(json);
                    console.log(allData)
                }).catch(error => {
                    if (error.response === undefined) {
                        alert(error);
                    } else {
                        alert(error.response.data.error);
                    }
                })
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 style={{ paddingBottom: '25px'  }}>Kaikki Tuotteet</h1>
                <div style={{ paddingBottom: '25px'  }} className="col-12">
                    <input   type="text" placeholder="Etsi tuotteita"
                        onChange={e => { setSearchTerm(e.target.value); }} />
                </div>
                {allData.filter((item) => {
                    if (searchTerm == '') {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                    
                    }).map((item, id) => {
                        
                        return (   
                                      
                                <div  className='col-lg-4 col-md-6 col-sm-10' style={{ padding: '10px'  }} key={id} onClick={e => setSearchItem(item)}>
                                    <Link className="container"
                                                    to={{
                                                        pathname: '/inc/Tuote',
                                                        state: {
                                                            id: item.id,
                                                            name: item.name,
                                                            price: item.price,
                                                            image: item.image
                                                        }
                                                    }}
                                                    >

                                        <Card style={{  width: '18rem', height: '30rem', backgroundColor:'#101115' }}>
                                            <Card.Img id="pikkukuva"  src={url + 'images/' + item.image} alt={item.name} />
                                                <Card.Body style={{ color: 'black' }}>
                                                <Card.Title style={{ color: 'white', textAlign: "center" }} >{item.name}</Card.Title>
                                                <Card.Text style={{ color: 'white', textAlign: "center"  }}>
                                                    Ota tuote haltuun!
                                                </Card.Text>
                                                <p style={{ color: 'white', textAlign: "center" }}>{item.price} €</p>
                                                </Card.Body>
                                                
                                                
                                                        
                                                   
                                            
                                                <Link>
                                                <button id="btn" className="btn" type="button" onClick={e => addToCart(item)}>Lisää ostoskoriin</button>
                                                </Link>
                                        </Card>
                                    </Link>
                                </div>                
                                
                        );
                    })}
            </div>
        </div>
    )
}
