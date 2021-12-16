import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <h1>Kaikki Tuotteet</h1>
            <input type="text" placeholder="Etsi tuotteita"
                onChange={e => { setSearchTerm(e.target.value); }} />

            {allData.filter((item) => {
                if (searchTerm == '') {
                    return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
            }).map((item, id) => {
                return (           
                    <div key={id} onClick={e => setSearchItem(item)}>
                        
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
                        <p>{item.name}</p>
                        <img src={url + 'images/' + item.image} alt={item.name} id="isokuva" />
                    </Link>
                    <p>{item.price}</p>
                        
                        <button className="btn btn-primary" type="button" onClick={e => addToCart(item)}>Lisää ostoskoriin</button>
                    </div>               
                );
            })}
        </div>
    )
}
