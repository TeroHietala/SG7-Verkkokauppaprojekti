import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
<<<<<<< HEAD
        <div>
            <h3>Etsi tuotteita</h3>
            <input type="text" placeholder="Etsi tuote nimellä" onChange={event => setInput(event.target.value)}></input>
            <button onClick={(event) => handleSearch(event)}>Etsi</button>
         <div>
            
                <div>
                    <p>{filteredData.name}</p>
                    <p>{filteredData.price}</p>
                     <button className="btn btn-primary" type="button" onClick={e => addToCart(filteredData)}>Lisää ostoskoriin</button>
                    
                    <div>
                        {/* <img src={url + 'images/' + product.image} alt="" /> */}
                    </div>
                </div>
                
           </div> 
         </div>       
    );
}
=======
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
                        <div>
                            <img src={url + 'images/' + item.image} alt={item.name} className="pikkukuva" />
                        </div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button className="btn btn-primary" type="button" onClick={e => addToCart(item)}>Lisää ostoskoriin</button>
                    </div>               
                );
            })}
        </div>
    )
}
>>>>>>> 1e41f58700ec766251eb7b8cb27fca368b1404f9
